import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(23, 23, 23, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  overflow: hidden;
  z-index: 1;

  animation-duration: 400ms;

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

export const ModalContainer = styled.div`
  width: 395px;
  min-height: 50px;
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  padding: 20px;
`

export const PortalTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: black;
`

export const Line = styled.hr`
  margin: 20px 0 30px;
  width: 100%;
`

export const CloseButton = styled.button`
  padding: 5px 5px 3px 5px;
  border-radius: 20px;
  background-color: unset;

  :hover {
    background-color: rgba(190, 190, 190, 0.35);
  }
`
