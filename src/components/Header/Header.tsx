import { useState, Dispatch, SetStateAction, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { BiUserCircle } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';
import User from '../User/User';
import './header.scss';
import { useAuthContext } from 'src/contexts/AuthContextProvider';

interface show {
  shownav: boolean;
  setShownav: Dispatch<SetStateAction<boolean>>;
}

interface input {
  inputVal: string;
}

export default function Header({ setShownav, shownav }: show) {
  const { user, login, logout } = useAuthContext();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      inputVal: '',
    },
  });
  const { ref, ...rest } = register('inputVal');

  const [showInput, setShowInput] = useState<boolean>(false);
  const [showDelBtn, setShowDelBtn] = useState<boolean>(false);

  const inputEl = useRef<HTMLInputElement>();

  const onSubmit = (data: input) => {
    navigate(`videos/search/${data.inputVal}`);
    setShowDelBtn(false);
    reset();
  };

  const toggleGnbFn = () => {
    shownav ? setShownav(false) : setShownav(true);
  };
  const toggleInput = () => {
    showInput ? setShowInput(false) : setShowInput(true);
  };

  const toggleDelBtn = () => {
    if (inputEl.current.value !== '') {
      setShowDelBtn(true);
    } else {
      setShowDelBtn(false);
    }
  };

  return (
    <>
      {shownav && <div className="bg-pg"></div>}
      <header className="header">
        <div className="header__start">
          <button
            className="header__gnb-btn"
            onClick={() => {
              toggleGnbFn();
            }}
          >
            menu
            <HiBars3 />
          </button>
          <h1>
            <Link to="/" className="header__home-logo">
              logo
              {!user && <img src="https://i.ibb.co/frTQBs7/yt-logo-rgb-dark.png" alt="youtube-logo-Dark" />}
              {user && <img src="https://ifh.cc/g/bH5qQy.png" alt="youtube-Premium-logo-Dark" />}
            </Link>
          </h1>
        </div>

        <div
          className="search_form"
          style={
            showInput
              ? {
                  display: `flex`,
                }
              : null
          }
        >
          <button
            className="input-close-btn"
            onClick={() => {
              toggleInput();
            }}
          >
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
              <g mirror-in-rtl="">
                <path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z" fill="#fff" />
              </g>
            </svg>
          </button>
          <form onSubmit={handleSubmit(onSubmit)} {...rest}>
            <div className="search-input-wrap">
              <input
                type="text"
                placeholder="검색"
                {...rest}
                ref={(e) => {
                  ref(e);
                  inputEl.current = e;
                }}
                onChange={() => {
                  toggleDelBtn();
                }}
              />
              {showDelBtn && (
                <button
                  type="button"
                  className="val-del-btn"
                  onClick={() => {
                    inputEl.current.value = '';
                    toggleDelBtn();
                  }}
                >
                  검색 내용 지우기
                  <svg viewBox="0 0 50 50">
                    <path
                      d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              )}
            </div>
            <button type="submit" className="search-btn">
              검색
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                  <path
                    d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
            </button>
            <button type="button" className="voice-btn">
              음성인식
              <svg>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
                  fill="#fff"
                ></path>
              </svg>
            </button>
          </form>
        </div>

        <div className="header__top-menu">
          <button
            className="show-search-btn"
            onClick={() => {
              toggleInput();
            }}
          >
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
              <g>
                <path
                  d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </button>
          {user && <User user={user} />}
          {!user && (
            <button className="login" onClick={login}>
              <BiUserCircle size="24" style={{ marginRight: '10px' }} />
              로그인
            </button>
          )}
          {user && (
            <button className="logout" onClick={logout}>
              <MdLogout size="24" title="로그아웃" />
            </button>
          )}
        </div>
      </header>
    </>
  );
}
