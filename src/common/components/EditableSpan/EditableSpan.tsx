import React, { ChangeEvent, FunctionComponent, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../Input/Input'

import { loginTC } from 'features/auth/authSlice'

type EditableSpanPropsType = {
  value: string
  onChange: (newValue: string) => void
}

type EditFormType = {
  value: string
}

export const EditableSpan = () => {
  return <p>Yo</p>
}
// export const EditableSpan = React.memo((props: any) => {
//   const [editMode, setEditMode] = useState(false)
//   const [title, setTitle] = useState(props.value)
//
//   // const {
//   //   value,
//   //   formState: { errors },
//   //   handleSubmit,
//   // } = useForm<EditFormType>()
//
//   const activateEditMode = () => {
//     setEditMode(true)
//     setTitle(props.value)
//   }
//   const activateViewMode = () => {
//     setEditMode(false)
//     props.onChange(title)
//   }
//   const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.currentTarget.value)
//   }
//
//   // const onSubmit: SubmitHandler<LoginFieldsType> = data => {
//   //   dispatch(meTC({ name: data.name }))
//   // }
//
//   // AiOutlineEdit
//   return editMode ? (
//     'dsadas'
//   ) : (
//     // <form >
//     //   <Input
//     //     {...register('email', {
//     //       required: true,
//     //       pattern: {
//     //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//     //         message: 'Invalid email address',
//     //       },
//     //     })}
//     //     type={'text'}
//     //     label={'Email'}
//     //   />
//     // </form>
//     <span onDoubleClick={activateEditMode}>{props.value}</span>
//   )
// })
