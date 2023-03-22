import { Route, Routes, Navigate } from 'react-router-dom'

import { LayoutWrapper } from 'common/components/LayoutWrapper/LayoutWrapper'
import { NotFound } from 'common/components/NotFound/NotFound'
import { RequireAuth } from 'common/hoc/RequireAuth'
import { Login } from 'features/auth/Login/Login'
import { InfoMessage } from 'features/auth/RecoveryPassword/InfoMessage/InfoMessage'
import { NewPassword } from 'features/auth/RecoveryPassword/NewPassword/NewPassword'
import { Recovery } from 'features/auth/RecoveryPassword/Recovery/Recovery'
import { Registration } from 'features/auth/Registration/Registration'
import { Cards } from 'features/cards/Cards'
import { Learn } from 'features/learn/Learn'
import { Packs } from 'features/packs/Packs'
import { Profile } from 'features/Profile/Profile'
import { PATH } from 'pages/path'

export const Pages = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.FORGOT_PASSWORD} element={<Recovery />} />
        <Route path={PATH.CHECK_EMAIL} element={<InfoMessage />} />
        <Route path={PATH.SET_NEW_PASSWORD} element={<NewPassword />}>
          <Route path=":resetPasswordToken" element={<NewPassword />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path={'/'} element={<Navigate to={PATH.PACKS} />} />
          <Route path={PATH.PACKS} element={<Packs />} />
          <Route path={PATH.PROFILE} element={<Profile />} />
          <Route path={PATH.CARDS}>
            <Route path={':cardsPack_id'} element={<Cards />} />
          </Route>
          <Route path={PATH.LEARN} element={<Learn />} />
        </Route>

        <Route path={PATH.NOT_FOUND} element={<NotFound />} />
        <Route path={'*'} element={<Navigate to={PATH.NOT_FOUND} />} />
      </Route>
    </Routes>
  )
}
