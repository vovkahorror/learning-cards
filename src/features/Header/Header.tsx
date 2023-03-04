import { Link } from 'react-router-dom'

import { PATH } from 'pages/path'

export const Header = () => {
  return (
    <div
      style={{ display: 'flex', columnGap: '20px', padding: '10px', backgroundColor: '#e0e0e0' }}
    >
      <Link to={PATH.LOGIN}>LOGIN</Link>
      <Link to={PATH.REGISTRATION}>REGISTRATION</Link>
      <Link to={PATH.RECOVERY}>RECOVERY</Link>
      <Link to={PATH.NEW_PASSWORD}>NEW_PASSWORD</Link>
      <Link to={PATH.PROFILE}>PROFILE</Link>
      <Link to={PATH.NOT_FOUND}>NOT_FOUND</Link>
      <Link to={PATH.VIEW_COMPONENTS}>VIEW_COMPONENTS</Link>
    </div>
  )
}
