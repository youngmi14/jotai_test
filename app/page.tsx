'use client'

import { useAtomValue } from 'jotai'
import { authStateAtom } from '@/app/store/auth';
import Button from '@/app/components/Button'

function Home() {
  const auth = useAtomValue(authStateAtom);

  return (
    <div>
      <div>현재 로그인타입 값 : {auth.loginType ? auth.loginType : '(아직 할당된 loginType 없음)'}</div>
      <Button />
    </div>
  );
}

export default Home;