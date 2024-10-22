import { atom } from 'jotai';
import { SocialLoginType, SocialLoginCode } from '@/app/type/type';

type authStateType = {
  loginType: SocialLoginType | null;
  loginCode: SocialLoginCode
}

export const authStateAtom = atom<authStateType>({
  loginType: null,
  loginCode: ""
});