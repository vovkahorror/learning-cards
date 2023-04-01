import { Box } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { CancelButton, DeleteButton } from 'features/packs/PackList/styled'
import { deletePackTC } from 'features/packs/packsSlice'

type PropsType = {
  setShowModal: (value: boolean) => void
  nameOfPack?: string
  pack_id: string
}

export const DeletePackModal = ({ setShowModal, pack_id, nameOfPack }: PropsType) => {
  const dispatch = useAppDispatch()

  const handlerDeletePack = () => {
    dispatch(deletePackTC(pack_id))
    setShowModal(false)
  }
  const handlerCloseModal = () => setShowModal(false)

  return (
    <>
      <div>
        Do you really want to remove <b>{nameOfPack}</b>?<br />
        All cards will be deleted.
      </div>
      <Box mt="5" display="flex" justifyContent="space-between">
        <CancelButton onClick={handlerCloseModal}>Cancel</CancelButton>
        <DeleteButton onClick={handlerDeletePack}>Delete</DeleteButton>
      </Box>
    </>
  )
}
