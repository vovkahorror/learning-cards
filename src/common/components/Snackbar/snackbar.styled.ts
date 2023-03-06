import { RiCloseLine } from 'react-icons/ri'
import styled from 'styled-components'

import { VariantsSnackbarType } from 'app/appSlice'
import { theme } from 'styles/theme'

const variantsSnackbar = {
  ['info']: theme.colors.secondary,
  ['success']: theme.colors.success,
  ['error']: theme.colors.danger,
  ['warning']: theme.colors.warning,
}

export const SnackbarWrapper = styled.div<{
  isActive: boolean
  variant: VariantsSnackbarType | undefined
}>`
  position: fixed;
  display: flex;
  align-items: center;

  left: 15px;
  bottom: 15px;
  z-index: 99;

  padding: 0.75rem 1rem 0.75rem 1.25rem;
  border-radius: 8px;
  background-color: ${p => variantsSnackbar[p.variant || 'info']};
  transform: ${p => (p.isActive ? 'scale(1)' : 'scale(0)')};
  transition: 0.3s;
`

export const InfoText = styled.p`
  font-size: 1rem;
  color: white;
`

export const CloseIcon = styled(RiCloseLine)<{ variant: VariantsSnackbarType | undefined }>`
  margin-left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
  cursor: pointer;
  border-radius: 50%;

  :hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`
