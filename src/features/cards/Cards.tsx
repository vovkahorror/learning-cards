import React, { FC } from 'react'

type CardsPropsType = {
  cardsPack_id: string
}
export const Cards: FC<CardsPropsType> = ({ cardsPack_id }) => {
  return (
    <div>
      <table></table>
    </div>
  )
}
