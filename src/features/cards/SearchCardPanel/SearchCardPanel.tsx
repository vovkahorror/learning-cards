import React, { useEffect, useState } from 'react'

import { IoEllipsisVerticalCircle } from 'react-icons/io5'
import { Input, Whisper } from 'rsuite'

import { Button } from 'common/components/Button/Button'
import { Box } from 'common/components/Layout/Box'
import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { useDebounce } from 'common/hooks/useDebounce'
import { CardModal } from 'features/cards/CardList/CardModal'
import { CardsPopover } from 'features/cards/SearchCardPanel/CardsPopover'

type SearchCardPanelPropsType = {
  isNotEmptyPack: boolean
  isMyPack: boolean
  setSearchParams: (searchParams: string) => void
  addNewCard: (format: string | null, question: string, answer: string) => void
  deletePack: () => void
  navigateToLearn: () => void
}

export const SearchCardPanel = ({
  isNotEmptyPack,
  isMyPack,
  setSearchParams,
  addNewCard,
  deletePack,
  navigateToLearn,
}: SearchCardPanelPropsType) => {
  const packName = useAppSelector(state => state.cards.packName)
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
            <Whisper
              trigger="click"
              placement={'bottom'}
              speaker={<CardsPopover deletePack={deletePack} />}
            >
              <Box display={'flex'} alignItems={'center'}>
                <IoEllipsisVerticalCircle size={22} color={'white'} cursor={'pointer'} />
              </Box>
            </Whisper>
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
