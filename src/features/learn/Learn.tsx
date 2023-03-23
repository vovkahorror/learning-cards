import { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { BackToPacks, Box } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { CardType } from 'features/cards/cardsAPI'
import { learnSelectors } from 'features/learn'
import { EndQuestion } from 'features/learn/LearnContent/EndQuestion'
import { QuestionAnswer } from 'features/learn/LearnContent/QuestionAnswer'
import { clearCarsPackLearn, getCardsPackForLearnTC } from 'features/learn/learnSlice'
import { TitleCardPack } from 'features/learn/styled'
import { PATH } from 'pages/path'

export const Learn = () => {
  const cards = useAppSelector<CardType[]>(learnSelectors.cardsPack)
  const packName = useAppSelector(learnSelectors.packName)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { pack_id } = useParams()

  useEffect(() => {
    if (!pack_id) return
    dispatch(getCardsPackForLearnTC(pack_id))
  }, [])

  const handlerNavigateToPackList = () => {
    navigate(PATH.PACKS)
    dispatch(clearCarsPackLearn())
  }

  return (
    <Box width={'440px'}>
      <BackToPacks onClick={handlerNavigateToPackList} />
      <TitleCardPack>{packName}</TitleCardPack>
      {cards.length ? <QuestionAnswer /> : <EndQuestion />}
    </Box>
  )
}
