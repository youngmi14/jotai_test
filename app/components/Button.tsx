import { useAtom } from 'jotai'
import { authStateAtom } from '@/app/store/auth';
import { SocialLoginType } from '@/app/type/type';

const types: SocialLoginType[] = ["GOOGLE", "NAVER", "KAKAO", "LINKED"];

export default function Jotai() {
  const [authState, setAuthState] = useAtom(authStateAtom);

  function handleClick() {
    const newTypes = types.filter(item => item !== authState.loginType);
    const newType = newTypes[Math.floor(Math.random() * newTypes.length)];
    console.log('바뀌기전', authState.loginType)

    setAuthState((auth) => ({
      ...auth,
      loginType: newType,
    }));
  }

  return (
    <div>
      <button onClick={handleClick}>로그인타입 수정</button>
    </div>
  )
}
