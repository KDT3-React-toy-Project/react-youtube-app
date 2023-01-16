# :sparkles: [Youtube Clone Toy Project (Demo)]()

### `npm start`

로컬서버 [http://localhost:3000] 오픈

<br/><br/>

## :page_with_curl: 설치된 라이브러리

- ["@tanstack/react-query": "^4.22.0"](https://tanstack.com/query/latest/docs/react/overview)
  - `useQuery` 사용
- "axios": "^1.2.2"
  - api과 통신하기 위한 라이브러리
- ["react-icons": "^4.7.1"](https://react-icons.github.io/react-icons)
  - 필요한 아이콘을 검색한 후 아이콘을 클릭하여 복사하고 프로젝트에 사용
  - 사용예시 :point_right:<br/>
    <img src="https://i.ibb.co/09MnYzG/2023-01-16-113151.png" alt="2023-01-16-113151" border="0">
- ["react-router-dom": "^6.6.2"](https://reactrouter.com/en/main)
- ["timeago.js": "^4.0.2"](https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3)
  - 업로드 날짜를 보여주는 라이브러리
  - 적용예시 :point_right:<br/>
    <img src="https://i.ibb.co/JvJ3Ssv/2023-01-16-114404.png" alt="2023-01-16-114404" border="0">
- ["tailwindcss": "^3.2.4"](https://tailwindcss.com/docs/installation)
  - css 라이브러리
  - 초기 설정 (tailwind.config.js)
    - 사용예시
      - colors :point_right:<br/>
        <img src="https://i.ibb.co/4m2ww4d/2023-01-16-120127.png" alt="2023-01-16-120127" border="0">
      - plugins :point_right: n줄 이상 넘어가면 텍스트 숨김처리<br/>
        <img src="https://i.ibb.co/L19h8cd/2023-01-16-120116.png" alt="2023-01-16-120116" border="0">
- "dotenv": "^16.0.3"
  - apikey 숨김. `REACT_APP_API_KEY`로 apikey 사용

<br/><br/>

## :pushpin: 기능 구현 목록

### Header

- [ ] 로고
  - 클릭 시, 홈으로 이동
- [ ] 검색창
  - 해당 제목으로 영상 검색

### HOME

- [ ] 영상 목록 (public -> videos -> popular.json 목업데이터 우선 사용)
- [ ] 영상 클릭 시, 해당 영상 VideoDetail 페이지로 넘어감.

### VideoDetail

- [ ] 영상
- [ ] 영상 제목
- [ ] 채널명
- [ ] 영상 상세 설명
- [ ] 관련 영상 목록

### 기타

- [ ] 화면 렌더링 중일땐 `Loading...` 출력
- [ ] 페이지에 에러 발생 시, NotFound 페이지로 넘어감.
