export const d = 1
// import { useCallback, useState } from 'react'
// import {useSearchParams} from "react-router-dom";
//
// type useSearchParamsStatePropsType = {
//   name: any
//   serialize: any
//   deserialize: any
// }
//
// const defaultDeserialize = (v: any) => v
// const defaultSerialize = String
//
// function getSearchParam(search: string, param: string) {
//   const searchParams = new URLSearchParams(search)
//
//   return searchParams.get(param)
// }
//
// function setSearchParam(search: any, param: any, value: any) {
//   const searchParams = new URLSearchParams(search)
//
//   searchParams.set(param, value)
//
//   return searchParams.toString()
// }
//
// export function useSearchParamsState({
//   name,
//   serialize = defaultSerialize,
//   deserialize = defaultDeserialize,
// }: useSearchParamsStatePropsType) {
//   let [searchParams, setSearchParams] = useSearchParams()
//   const [value, setValue] = useState(() => {
//     const initialValue = deserialize(getSearchParam(searchParams.location.search, name))
//
//     return initialValue
//   })
//   const latestValue = useLatest(value)
//
//   const updateValue = useCallback(
//     (newValue: any) => {
//       const search = history.location.search
//       const actualNewValue =
//         typeof newValue === 'function' ? newValue(latestValue.current) : newValue
//
//       setValue(actualNewValue)
//
//       const newSearch = setSearchParam(search, name, serialize(actualNewValue))
//
//       history.replace({
//         search: newSearch,
//       })
//     },
//     [latestValue, history, name, serialize]
//   )
//
//   return [value, updateValue]
// }
