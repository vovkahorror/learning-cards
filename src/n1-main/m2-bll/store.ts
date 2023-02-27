import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux';
import {loginReducer} from '../../n2-features/f1-auth/a1-login/login-reducer';
import {registerReducer} from '../../n2-features/f1-auth/a2-register/register-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});

export const store = legacy_createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;