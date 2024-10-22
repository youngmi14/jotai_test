타입스크립트 기반 Next.js 에서 전역 상태관리 라이브러리 Jotai 테스트.

## Jotai 설치
```bash
yarn add jotai
```

## Jotai 초기값 선언
```javascript
import { atom } from 'jotai';

export const authStateAtom = atom({
  loginType: null,
  loginCode: ""
});
```


## Jotai 값 읽기

단순 값 읽기는 `useAtomValue` 사용

```jsx
import { useAtomValue } from 'jotai'

const auth = useAtomValue(authStateAtom);
console.log(auth.loginType)
```

## Jotai 값 업데이트

단순 값 업데이트는 `useSetAtom` 사용

## Jotai 값 읽고, 업데이트

값 읽기 및 업데이트는 `useAtom` 사용

```jsx
import { useAtom } from 'jotai'

const [authState, setAuthState] = useAtom(authStateAtom);

const newType = 'NEWTYPE';
setAuthState((auth) => ({
  ...auth,
  loginType: newType,
}));
```