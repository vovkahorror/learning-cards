import { styled } from 'styles/theme'

export const ProfileAvatar = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  margin: 0 auto;
`
export const ProfileAvatarImg = styled.div`
  border-radius: 100%;
  width: 96px;
  height: 96px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
`
