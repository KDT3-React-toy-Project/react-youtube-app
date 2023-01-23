import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from 'src/contexts/AuthContextProvider';
import './Sidebar.scss';
import { BsYoutube } from 'react-icons/bs';
import '../../index.scss';
import { 
  ToggleGnbBtnIcon,
  HomeBtnIcon,
  QuestBtnIcon,
  ShortsBtnIcon,
  SubscribeBtnIcon,
  OriginalsBtnIcon,
  YouTubeMusicIcon,
  StorageBoxBtnIcon,
  RecordBtnIcon,
  MyVideoBtnIcon,
  LaterVideoBtnIcon,
  OfflineVideoBtnIcon,
  PlaylistBtnIcon,
  LikeVideoIcon,
  MovieBtnIcon,
  GameBtnIcon,
  LearningBtnIcon,
  SportsBtnIcon,
  CreatorStudioIcon,
  YouTubeMusicBtnIcon,
  KidsBtnIcon,
  YouTubeTvIcon,
  SettingIcon,
  ReportRecordIcon,
  ServiceIcon,
  CommentsIcon,
} from '../Icons/icons';

interface show {
  shownav: boolean;
  setShownav: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ setShownav, shownav }: show) {
  const toggleGnbFn = () => {
    shownav ? setShownav(false) : setShownav(true);
  };

  const { user } = useAuthContext();

  return (
    <>
      <nav
        className="contents__gnb"
        style={
          shownav
            ? {
                transform: `translateX(0)`,
              }
            : null
        }
      >
        <div className="contents__gnb-header">
          <button
            className="header__gnb-btn"
            onClick={() => {
              toggleGnbFn();
            }}
          >
            menu
            <ToggleGnbBtnIcon/>
          </button>
          <Link to="/" className="header__home-logo">
            logo
            {!user && <img src="https://i.ibb.co/frTQBs7/yt-logo-rgb-dark.png" alt="youtube-logo-Dark" />}
            {user && <img src="https://ifh.cc/g/bH5qQy.png" alt="youtube-Premium-logo-Dark" />}
          </Link>
        </div>
        <ul>
          <li>
            <ul>
              <li className="check">
                <a href="/">
                  <HomeBtnIcon />
                  <span>홈</span>
                </a>
              </li>
              {user && (
                <li>
                  <a href="/">
                    <QuestBtnIcon/>
                    <span>탐색</span>
                  </a>
                </li>
              )}
              <li>
                <a href="/">
                  <ShortsBtnIcon />
                  <span>Shorts</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <SubscribeBtnIcon />
                  <span>구독</span>
                </a>
              </li>
              {user && (
                <>
                  <li>
                    <a href="/">
                      <OriginalsBtnIcon />
                      <span>Originals</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <YouTubeMusicIcon />
                      <span>YouTube Music</span>
                    </a>
                  </li>
                </>
              )}
            </ul>
            <ul>
              <li>
                <a href="/">
                  <StorageBoxBtnIcon />
                  <span>보관함</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <RecordBtnIcon />
                  <span>시청 기록</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <MyVideoBtnIcon />
                  <span>내 동영상</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <LaterVideoBtnIcon />
                  <span>나중에 볼 동영상</span>
                </a>
              </li>
              {user && (
                <>
                  {' '}
                  <li>
                    <a href="/">
                      <OfflineVideoBtnIcon />
                      <span>오프라인 저장 동영상</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <PlaylistBtnIcon />
                      <span>playlist</span>
                    </a>
                  </li>
                </>
              )}
              <li>
                <a href="/">
                  <LikeVideoIcon />
                  <span>좋아요 표시한 동영상</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <p>탐색</p>
              <li>
                <a href="/">
                  <MovieBtnIcon />
                  <span>영화</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <GameBtnIcon />
                  <span>게임</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <LearningBtnIcon />
                  <span>학습</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <SportsBtnIcon />
                  <span>스포츠</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <p>
                <span>YOUTUBE</span> 더보기
              </p>
              {!user && (
                <li>
                  <a href="/">
                    <BsYoutube style={{ color: '#ff0000' }} />
                    YouTube Premium
                  </a>
                </li>
              )}
              <li>
                <a href="/">
                  <CreatorStudioIcon />
                  <span>크리에이터 스튜디오</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <YouTubeMusicBtnIcon />
                  <span>YouTube Music</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <KidsBtnIcon />
                  <span>YouTube Kids</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <YouTubeTvIcon />
                  <span>YouTube TV</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <a href="/">
                  <SettingIcon />
                  <span>설정</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <ReportRecordIcon />
                  <span>신고 기록</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <ServiceIcon />
                  <span>고객센터</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <CommentsIcon />
                  <span>의견 보내기</span>
                </a>
              </li>
            </ul>
          </li>
          <ul className="footer">
            <li>
              <a href="/">정보</a>
              <a href="/">보도자료</a>
              <a href="/">저작권</a>
              <a href="/">문의하기</a>
              <a href="/">크리에이터</a>
              <a href="/">광고</a>
              <a href="/">개발자</a>
            </li>
            <li>
              <a href="/">약관</a>
              <a href="/">개인정보처리방침</a>
              <a href="/">정책 및 안전</a>
              <a href="/">YouTube 작동의 원리</a>
              <a href="/">새로운 기능 테스트하기</a>
            </li>
            <li>
              <p>
                © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594
                (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC,
                <a href="/">사업자정보,</a>
                <a href="/">불법촬영물 신고</a>
              </p>
              <p>
                크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는
                이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.
              </p>
            </li>
          </ul>
        </ul>
      </nav>
      {shownav ? null : (
        <nav className="contents__mini-gnb">
          <ul>
            <li>
              <a href="/">
                <svg viewBox="0 0 24 24" focusable="false">
                  <g>
                    <path d="M4,10V21h6V15h4v6h6V10L12,3Z" stroke="#fff" />
                  </g>
                </svg>
                <span>홈</span>
              </a>
            </li>
            {user && (
              <li>
                <a href="/">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <g>
                      <path
                        d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span>탐색</span>
                </a>
              </li>
            )}
            <li>
              <a href="/">
                <svg viewBox="0 0 24 24" focusable="false">
                  <g height="24" viewBox="0 0 24 24" width="24">
                    <path
                      d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                      fill="#fff"
                    />
                  </g>
                </svg>
                <span>Shorts</span>
              </a>
            </li>
            <li>
              <a href="/">
                <svg viewBox="0 0 24 24" focusable="false">
                  <g>
                    <path
                      d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9zM3,10h18v10H3V10z"
                      fill="#fff"
                    />
                  </g>
                </svg>
                <span>구독</span>
              </a>
            </li>
            {user && (
              <>
                <li>
                  <a href="/">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <g>
                        <path
                          d="M10,9.35,15,12l-5,2.65ZM12,6a54.36,54.36,0,0,0-7.56.38A1.53,1.53,0,0,0,3.38,7.44,24.63,24.63,0,0,0,3,12a24.63,24.63,0,0,0,.38,4.56,1.53,1.53,0,0,0,1.06,1.06A54.36,54.36,0,0,0,12,18a54.36,54.36,0,0,0,7.56-.38,1.53,1.53,0,0,0,1.06-1.06A24.63,24.63,0,0,0,21,12a24.63,24.63,0,0,0-.38-4.56,1.53,1.53,0,0,0-1.06-1.06A54.36,54.36,0,0,0,12,6h0m0-1s6.25,0,7.81.42a2.51,2.51,0,0,1,1.77,1.77A25.87,25.87,0,0,1,22,12a25.87,25.87,0,0,1-.42,4.81,2.51,2.51,0,0,1-1.77,1.77C18.25,19,12,19,12,19s-6.25,0-7.81-.42a2.51,2.51,0,0,1-1.77-1.77A25.87,25.87,0,0,1,2,12a25.87,25.87,0,0,1,.42-4.81A2.51,2.51,0,0,1,4.19,5.42C5.75,5,12,5,12,5Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <span>Originals</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <g>
                        <path
                          d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <span>YouTube Music</span>
                  </a>
                </li>
              </>
            )}
            <li>
              <a href="/">
                <svg viewBox="0 0 24 24" focusable="false">
                  <g>
                    <path
                      d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                      fill="#fff"
                    />
                  </g>
                </svg>
                <span>보관함</span>
              </a>
            </li>
            {user && (
              <li>
                <a href="/">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <g>
                      <path
                        d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span>오프라인 저장 동영상</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Sidebar;
