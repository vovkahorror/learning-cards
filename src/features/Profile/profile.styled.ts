import { Dropdown } from 'rsuite'

import { styled } from 'styles/theme'

export const ProfileAvatar = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto;
`
export const ProfileAvatarImg = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  overflow: hidden;
`
export const ProfileUpload = styled.div`
  background-color: ${props => props.theme.colors.gray};
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 100%;
  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.light};
  cursor: pointer;
`

// Profile Header Data

export const ProfileHeaderAvatarImg = styled.img`
  height: 36px;
  width: 36px;
  object-fit: cover;
  position: relative;
`
export const DropdownItem = styled(Dropdown.Item)`
  display: flex;
  align-items: center;
  column-gap: 10px;
`

export const ProfileHeaderName = styled.p`
  color: white;
  margin-right: 10px;
`
