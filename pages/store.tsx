import { atom } from 'recoil';

export const jwtState = atom({
    key: 'jwtToken',
    default: '',
});

export const isLogin = atom({
    key: 'isLogin',
    default: false,
})

