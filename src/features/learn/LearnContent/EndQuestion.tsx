import { useParams } from 'react-router-dom'

import { useAppDispatch } from 'common/hooks'
import { getCardsPackForLearnTC } from 'features/learn/learnSlice'
import { ButtonLearn, TextTitle } from 'features/learn/styled'

export const EndQuestion = () => {
  const dispatch = useAppDispatch()
  const { pack_id } = useParams()

  const handlerRepeatQuestions = () => {
    if (!pack_id) return
    dispatch(getCardsPackForLearnTC(pack_id))
  }

  return (
    <>
      <TextTitle>
        You have passed all questions in this package!
        <br />
        Do you want to repeat?
      </TextTitle>
      <ButtonLearn onClick={handlerRepeatQuestions} fullWidth>
        Repeat questions
      </ButtonLearn>
    </>
  )
}
