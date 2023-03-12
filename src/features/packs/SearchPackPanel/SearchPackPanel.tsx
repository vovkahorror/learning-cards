import React, { useState } from 'react'

import { Col, Input, InputNumber, RangeSlider, Row } from 'rsuite'

import { Box } from 'common/components/Layout/Box'

export const SearchPackPanel = () => {
  const [value, setValue] = useState<[number, number]>([1, 5])

  return (
    <Box style={{ paddingTop: '150px' }} display={'flex'} gap={'20px'} alignItems={'end'}>
      <Box width={'413px'}>
        <p>Search</p>
        <Input />
      </Box>

      <Box>
        <p>Show packs cards My All</p>
        <Row>
          <Col md={4}>
            <InputNumber
              min={0}
              max={value[1]}
              value={value[0]}
              onChange={nextValue => {
                const [start, end] = value

                if (nextValue > end) {
                  return
                }
                setValue([+nextValue, end])
              }}
            />
          </Col>
          <Col md={10}>
            <RangeSlider
              min={0}
              max={8}
              defaultValue={value}
              progress
              value={value}
              onChange={(value: [number, number]) => {
                setValue(value)
              }}
            />
          </Col>
          <Col md={4}>
            <InputNumber
              min={value[0]}
              max={8}
              value={value[1]}
              onChange={nextValue => {
                const [start, end] = value

                if (start > nextValue) {
                  return
                }
                setValue([start, +nextValue])
              }}
            />
          </Col>
        </Row>
      </Box>

      <Box>
        <p>Show packs cards Number of cards My All 2 10</p>
      </Box>
      <p>filter</p>
    </Box>
  )
}
