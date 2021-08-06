import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Links } from '../../components/styledComponents';
import colors from '../../config/colors';
import query from '../../assets/img/1.png';
import Link from 'next/link';

export default function SideNav() {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };

  const ChangeRoute = (href) => {
    router.push(href);
  };

  return (
    <Wrapper>
      <div className="menu-btn" onClick={handleClick}>
        <span
          className={open ? 'menu-btn_burger open' : 'menu-btn_burger'}
        ></span>
      </div>
      <div>
        {open && (
          <div className={open ? 'aside' : 'aside open'}>
            <Links sidenav="true">
              <li
                onClick={() => {
                  ChangeRoute('/participation');
                }}
              >
                Participation
              </li>
              <li
                onClick={() => {
                  ChangeRoute('/events');
                }}
              >
                Events
              </li>
              <li
                onClick={() => {
                  ChangeRoute('/articles');
                }}
              >
                Articles
              </li>
              <li
                onClick={() => {
                  ChangeRoute('/press');
                }}
              >
                Press Release
              </li>
            </Links>
            <div
              className={show ? 'connect' : 'hide'}
              onMouseLeave={() => {
                setShow(!show);
              }}
            >
              <a href="mailto:query@theincubatoreality.com">Email us</a>
            </div>
            <div
              className="query"
              onClick={() => {
                setShow(!show);
              }}
            >
              <img src={query} alt="query" />
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0.8rem 3rem;
  color: #fff;
  font-size: 1.2em;
  @media only screen and (min-width: 690px) {
    display: none;
  }
  h2 {
    margin-left: 0.6rem;
    font-family: 'AvatarNormal';
  }
  .aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* opacity: 0.68; */
    height: 100vh;
    z-index: 2;
    background: rgb(1, 78, 166, 0.8);
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
    padding: 6rem 2rem;
  }
  .connect {
    position: absolute;
    right: 62px;
    top: 134px;
    background-color: ${colors.colorWhite};
    color: ${colors.colorBlack};
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
    color: ${colors.colorGreyDark};
    span {
      font-weight: bold;
    }
    a {
      text-decoration: none;
      background-color: ${colors.colorBlueLight};
      padding: 1rem;
      border-radius: 6px;
      color: ${colors.colorWhite};
      font-size: 0.8em;
      font-weight: bold;
    }
  }
  .hide {
    display: none;
  }
  .query {
    position: absolute;
    left: 30em;
    top: 200px;
    width: 60px;
    border: 1px solid ${colors.colorWhite};
    border-right: none;
    padding: 1rem;
    padding-bottom: 0;
    padding-right: 0;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  .menu-btn {
    position: absolute;
    z-index: 3;
    right: 1rem;
    top: 34px;
    height: 20px;
    width: 28px;
    cursor: pointer;

    .menu-btn_burger {
      position: absolute;
      right: 0;
      top: 0.5rem;
      width: 25px;
      height: 2px;
      background: #fff;
      transition: all 0.5s ease-in-out;

      &::before {
        content: '';
        position: absolute;
        top: -8px;
        width: 25px;
        height: 2px;
        background: #fff;
        transition: all 0.5s ease-in-out;
      }

      &::after {
        content: '';
        position: absolute;
        top: 8px;
        right: 0;
        width: 18px;
        height: 2px;
        background: #fff;
        transition: all 0.5s ease-in-out;
      }
      &.open {
        transform: rotate(360deg);
        background: transparent;

        &::before {
          transform: rotate(45deg) translate(5px, 8px);
        }

        &::after {
          width: 25px;
          transform: rotate(-45deg) translate(3px, -7px);
        }
      }
    }
  }
  @media (max-width: 305px) {
    .menu-btn {
      top: 10px;
    }
  }
`;
