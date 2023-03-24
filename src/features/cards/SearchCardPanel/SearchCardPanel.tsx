import React, { useEffect, useState } from 'react'

import { Input } from 'rsuite'

import { Button } from 'common/components/Button/Button'
import { Box } from 'common/components/Layout/Box'
import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { useDebounce } from 'common/hooks/useDebounce'
import { CardModal } from 'features/cards/CardList/CardModal'
import { WhisperCards } from 'features/cards/SearchCardPanel/WhisperCards/WhisperCards'

export const SearchCardPanel = ({
  isNotEmptyPack,
  isMyPack,
  cardsPack_id,
  setSearchParams,
  addNewCard,
  navigateToLearn,
}: SearchCardPanelPropsType) => {
  const packName = useAppSelector(
    state => state.packs.cardPacks.find(pack => pack._id === cardsPack_id)?.name
  )
  const isPrivatePack = useAppSelector(
    state => state.packs.cardPacks.find(pack => pack._id === cardsPack_id)?.private
  )
  const [value, setValue] = useState<string>('')
  const debounceValue = useDebounce(value, 1000)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setSearchParams(debounceValue)
  }, [debounceValue])

  const handlerChangeInput = (value: string) => {
    setValue(value)
  }

  const handlerOpenModal = () => setShowModal(true)

  return (
    <Box width={'100%'} display={'flex'} flexDirection={'column'}>
      <Box display={'flex'} justifyContent={'space-between'} mb={'2'}>
        <Box display={'flex'} alignItems={'center'} gap={'9px'}>
          <span style={{ fontWeight: '600', fontSize: '22px', lineHeight: '27px', color: 'white' }}>
            {packName}
          </span>
          {isMyPack && (
            <WhisperCards
              cardsPack_id={cardsPack_id}
              packName={packName}
              isPrivatePack={isPrivatePack}
              navigateToLearn={navigateToLearn}
            />
          )}
        </Box>

        {isNotEmptyPack && (
          <Box>
            {isMyPack ? (
              <Button onClick={handlerOpenModal}>Add new card</Button>
            ) : (
              <Button onClick={navigateToLearn}>Learn to pack</Button>
            )}
          </Box>
        )}
      </Box>

      {isNotEmptyPack && (
        <Box width={'100%'}>
          <Box mb={'2'}>
            <p style={{ color: 'white' }}>Search</p>
          </Box>
          <Input value={value} onChange={handlerChangeInput} />
        </Box>
      )}

      <PortalModal title={'Add new card'} show={showModal} setShow={setShowModal}>
        <CardModal setShowModal={setShowModal} addEditCard={addNewCard} />
      </PortalModal>
    </Box>
  )
}

type SearchCardPanelPropsType = {
  isNotEmptyPack: boolean
  isMyPack: boolean
  cardsPack_id?: string
  setSearchParams: (searchParams: string) => void
  addNewCard: (format: string | null, question: string, answer: string) => void
  navigateToLearn: () => void
}
