import { styled } from 'styles/theme'

export const Card = styled.div`
  background-color: var(--rs-bg-card);
  backdrop-filter: blur(20px);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid var(--rs-border-primary);
  min-width: 412px;
  position: relative;
`
