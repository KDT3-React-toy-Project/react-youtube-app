# :sparkles: [Youtube Clone Toy Project (Demo)](https://kdt3-team7-react-youtube-app.netlify.app)

#### 프로젝트 문서는 [여기](https://docs.google.com/spreadsheets/d/1EhoF12aqxV7dyYcOJNbmAZO6rkJGMgtNTbrpR0zFBcM/edit#gid=0)에서 확인하실 수 있습니다.

<br/><br/>

## :raising_hand: Member

<table border>
  <tbody>
    <tr>
      <td align="center" width="150px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103119275?v=4"  alt=""/>
        <center>FE. 팀원</center>
        <br/>
        <a href="https://github.com/Hyeeeein">
          <img src="https://img.shields.io/badge/김혜인-2596be?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </br>
      <td align="center" width="150px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt=""/>
        <center>FE. 팀원</center>
        <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/조효림-e28743?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="150px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/76930602?v=4"  alt=""/>
        <center>FE. 팀원</center>
        <br/>
        <a href="https://github.com/0nesan">
          <img src="https://img.shields.io/badge/한수산-96be25?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="150px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/64674174?v=4"  alt=""/>
        <center>FE. 팀원</center>
        <br/>
        <a href="https://github.com/hyerimhan">
          <img src="https://img.shields.io/badge/한혜림-FF55B6?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/><br/>

## :wrench: 기술 스택
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-round&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-round&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-round&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-round&logo=React&logoColor=gray"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-round&logo=TypeScript&logoColor=white"/> 
<br/>

### Tools
  - Deploy
  <br/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-round&logo=Netlify&logoColor=white"/> 

  - 버전관리
  <br/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-round&logo=GitHub&logoColor=white"/> 

  - Docs
  <br/>
  <img src="https://img.shields.io/badge/Google Sheets-34A853?style=flat-round&logo=Google Sheets&logoColor=white"/>

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
- "dotenv": "^16.0.3"
  - apikey 숨김. `REACT_APP_API_KEY`로 apikey 사용

<br/><br/>

## :pushpin: 기능 구현 목록

### 1. Header

- [ ] 로고
  - 클릭 시, 홈으로 이동
- [ ] 검색창
  - 해당 제목으로 영상 검색
- [ ] 로그인
  - 구글 연동
    <br/><br/>

### 2. HOME

- [ ] 영상 목록

  - public -> videos -> popular.json 목업데이터 우선 사용
    <br/><br/>

  ### 2-1. VideoCard

  - [ ] 영상 클릭 시, 해당 영상 VideoDetail 페이지로 넘어감.
  - [ ] 썸네일
  - [ ] 영상 제목
  - [ ] 채널명
  - [ ] 조회수 &middot; 업로드날짜
        <br/><br/>

### 3. VideoDetail

- [ ] 영상
- [ ] 영상 제목
- [ ] 채널명
- [ ] 영상 상세 설명
- [ ] 관련 영상 목록
- [ ] 댓글

### 4. 기타

- [ ] 화면 렌더링 중일땐 `Loading...` 출력
- [ ] 페이지에 에러 발생 시, NotFound 페이지로 넘어감.
- [ ] 반응형
