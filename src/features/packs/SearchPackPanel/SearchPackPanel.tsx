import { useEffect, useState } from 'react'

import { Input } from 'rsuite'

import { Button, Box } from 'common/components'
import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { useAppDispatch, useDebounce } from 'common/hooks'
import { ClearFilter } from 'features/cards/SearchCardPanel/SearchCardPanel.styled'
import { DataModal } from 'features/packs/PackList/DataModal'
import { addPackTC, clearSearchParams, setSearchParams } from 'features/packs/packsSlice'
import { CustomRangeSlider } from 'features/packs/SearchPackPanel/CustomRangeSlider/CustomRangeSlider'
import { TogglePacks } from 'features/packs/SearchPackPanel/TogglePacks/TogglePacks'

export const SearchPackPanel = () => {
  const dispatch = useAppDispatch()

  const [value, setValue] = useState<string>('')
  const debounceValue = useDebounce(value, 1000)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(setSearchParams({ packName: debounceValue }))
  }, [debounceValue])

  const handlerClearFilter = () => {
    console.log(1)
    dispatch(clearSearchParams())
    setValue('')
  }

  const addNewPack = (name: string, isPrivate: boolean) => {
    dispatch(addPackTC({ name, private: isPrivate }))
  }

  const handlerOpenModal = () => setShowModal(true)
  const handlerChangeInput = (value: string) => setValue(value)

  return (
    <>
      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        gap={'20px'}
        alignItems={'end'}
      >
        <Box width={'413px'}>
          <Box mb={'2'}>
            <p style={{ color: 'white' }}>Search</p>
          </Box>
          <Input value={value} onChange={handlerChangeInput} />
        </Box>

        <Box>
          <Box mb={'2'}>
            <p>Show packs cards</p>
          </Box>
          <TogglePacks />
        </Box>

        <Box>
          <Box mb={'2'}>
            <p>Number of cards</p>
          </Box>
          <CustomRangeSlider />
        </Box>

        <ClearFilter onClick={handlerClearFilter} />
        <Button onClick={handlerOpenModal}>Add pack</Button>
      </Box>

      <PortalModal title={'Add new pack'} show={showModal} setShow={setShowModal}>
        <DataModal setShowModal={setShowModal} addEditPack={addNewPack} />
      </PortalModal>
    </>
  )
}
