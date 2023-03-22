import { useEffect, useState } from 'react'

import { Radio, RadioGroup } from 'rsuite'
import { ValueType } from 'rsuite/Radio'

import { useAppDispatch, useAppSelector } from 'common/hooks'
import { CardType } from 'features/cards/cardsAPI'
import { learnSelectors } from 'features/learn'
import { getRandomCard } from 'features/learn/getRandomCard'
import { updateGradeTC } from 'features/learn/learnSlice'
import { ButtonLearn, DescribeShot, TextSpan, TextTitle } from 'features/learn/styled'

export const QuestionAnswer = () => {
  const cards = useAppSelector<CardType[]>(learnSelectors.cardsPack)
  const dispatch = useAppDispatch()

  const [card, setCard] = useState<CardType | undefined>(undefined)
  const [isChecked, setIsChecked] = useState(false)
  const [valueGrade, setValueGrade] = useState<ValueType>('')

  useEffect(() => {
    setCard(getRandomCard(cards))
  }, [])

  const handlerRadioGroup = (value: ValueType) => setValueGrade(value)
  const handlerShowAnswer = () => setIsChecked(true)

  const handlerNextQuestion = () => {
    setIsChecked(false)
    setValueGrade('')
    if (card) {
      dispatch(updateGradeTC({ grade: +valueGrade, card_id: card._id }))
      setCard(getRandomCard(cards))
    }
  }

  return (
    <>
      <TextTitle>
        Question: <TextSpan>{card?.question}</TextSpan>
      </TextTitle>
      <DescribeShot>Количество попыток ответов на вопрос: {card?.shots}</DescribeShot>
      {isChecked ? (
        <>
          <TextTitle>
            Answer: <TextSpan>{card?.answer}</TextSpan>
          </TextTitle>
          <RadioGroup value={valueGrade} onChange={handlerRadioGroup} name="radioList">
            <p>Rate yourself:</p>
            <Radio value={'1'}>Did not know</Radio>
            <Radio value={'2'}>Forgot</Radio>
            <Radio value={'3'}>A lot of thought</Radio>
            <Radio value={'4'}>Сonfused</Radio>
            <Radio value={'5'}>Knew the answer</Radio>
          </RadioGroup>
          <ButtonLearn onClick={handlerNextQuestion} disabled={!valueGrade} fullWidth>
            Next
          </ButtonLearn>
        </>
      ) : (
        <ButtonLearn onClick={handlerShowAnswer} fullWidth>
          Show answer
        </ButtonLearn>
      )}
    </>
  )
}
