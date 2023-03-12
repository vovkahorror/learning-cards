import React, { useEffect } from 'react'

import { Table } from 'rsuite'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardPacksType } from 'features/packs/packsAPI'
import { fetchPacksTC } from 'features/packs/packsSlice'

const { Column, HeaderCell, Cell } = Table

export const PackList = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector<CardPacksType[]>(state => state.packs.cardPacks)

  useEffect(() => {
    dispatch(fetchPacksTC())
  }, [])

  return (
    <div>
      <Table height={400} data={data}>
        <Column width={60} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="user_name" />
        </Column>

        <Column width={150}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>

        <Column width={100}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column width={150}>
          <HeaderCell>Postcode</HeaderCell>
          <Cell dataKey="postcode" />
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
      </Table>
    </div>
  )
}
