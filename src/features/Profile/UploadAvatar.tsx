import React, { ChangeEvent, useRef } from 'react'

import { AiOutlineCamera } from 'react-icons/ai'

import { useAppDispatch } from 'common/hooks'
import { convertFileToBase64 } from 'common/utils/convert-file-to-base64'
import { updateUserAvatarTC } from 'features/auth/authSlice'
import { ProfileUpload } from 'features/Profile/profile.styled'

export const UploadAvatar = () => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      convertFileToBase64(file, (file64: string) => {
        dispatch(updateUserAvatarTC(file64))
      })
    }
  }

  return (
    <>
      <ProfileUpload onClick={selectFileHandler}>
        <AiOutlineCamera />
      </ProfileUpload>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        accept={'.png, .jpg, .jpeg, .gif'}
        onChange={uploadHandler}
      />
    </>
  )
}
