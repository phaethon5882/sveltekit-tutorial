## 배포주소
sveltekit-tutorial-azure.vercel.app

## 요약
1. sveltekit 은 svelte 를 기반으로한 서버사이드 렌더링 프레임워크다.
2. 스벨트는 프레임워크라 그런지 (엄밀히 말하면 컴파일러지만) 라우팅, 비동기처리에 관한 기본적인 설정이 이미 다 내장되어 있어서 외워서 쓰기만 하면 된다.
3. 한 가지 놀라웠던 점은, 프레임워크에서 지원하는 유틸들이었는데. 
   ```svelte
   <form on:submit|preventDefault={handleSubmit}>
   ```
   처럼 preventDefault 를 직접 짜지 않아도 된다는 점.. 직접 짜는 것처럼 내부적으론 curry 로 동작하지 않을까 싶다.
 4. sveltekit 은 역시 node 로 된 서버기 때문에 API 도 만들 수 있었다. .json.ts 처럼 파일확장자 앞에 .json 을 붙여주면 REST api 를 만들 수 있다.

## 총평
매력적이고 쉬운 프레임워크인데. 아직 타입스크립트랑은 잘 안 맞는 것 같다.
비동기 패칭을 위해 load 함수를 선언할 때 타입스크립트 지원이 잘 안 돼서 타입 추론이 안 된다...
언젠가는 나아지겠지?
