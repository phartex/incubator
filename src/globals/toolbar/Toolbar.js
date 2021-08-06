import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import logo from '../../assets/img/logo-header.png';

import colors from '../../config/colors';

function Toolbar() {
  const [path, setPath] = useState('');
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
  };

  useEffect(() => {
    router.pathname === '/participation'
      ? setPath('participation')
      : router.pathname === '/events'
      ? setPath('events')
      : router.pathname === '/articles'
      ? setPath('articles')
      : router.pathname === '/press'
      ? setPath('press')
      : setPath('');
  }, []);

  return (
    <Wrapper>
      <nav>
        <div className="logo" onClick={() => handleClick('/')}>
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li
            className={path === 'participation' ? 'active' : ''}
            onClick={() => handleClick('/participation')}
          >
            Participation
          </li>
          <li
            className={path === 'events' ? 'active' : ''}
            onClick={() => handleClick('/events')}
          >
            Events
          </li>
          <li
            className={path === 'articles' ? 'active' : ''}
            onClick={() => handleClick('/articles')}
          >
            Articles
          </li>
          <li
            className={path === 'press' ? 'active' : ''}
            onClick={() => handleClick('/press')}
          >
            Press Release
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 0.5rem 0;
  color: ${colors.colorWhite};
  font-size: 1.4em;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .logo {
      cursor: pointer;
      img {
        width: 70%;
        &:hover {
          width: 71%;
        }
      }
    }
    .nav-links {
      display: flex;
      flex-flow: row;
      li:last-child {
        margin-right: 0em;
      }
      li {
        font-size: 0.8em;
        margin: 0em 4em 0em 0em;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          font-size: 0.802em;
        }
      }
    }
  }
  @media only screen and (max-width: 690px) {
      nav {
        display: inline;
        .logo {
          cursor: pointer;
          width: 25%;
          margin-left: 4rem;
          img {
            width: 100%;
            &:hover {
              width: 31%;
            }
          }
        }
        .nav-links {
          display: none;
        }
      }
    }
  @media only screen and (min-width: 900px) {
    nav {
      flex-direction: row;
      
      justify-content: space-between;
      padding: 1.5rem 6rem;
      padding-right: 20rem;
      .nav-links {
        display: flex;
      }
      .active {
        font-weight: bold;
        border-bottom: 1px solid ${colors.colorWhite};
        padding-bottom: 0.2rem;
        &:hover {
          text-decoration: none !important;
        }
      }
    }
  }
  @media screen and (min-width: 690px) and (max-width: 900px) {
    
    nav {
      display: flex;

      flex-direction: row;
      .logo {
        margin-right: 7em;
        img {
          width: 55%;
          &:hover {
            width: 55.5%;
          }
        }
      }
      .nav-links {
        li {
          margin: 0em 3em 0em 0em;
          font-size: 0.7em;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            font-size: 0.802em;
          }
        }
      }
    }
  }
`;

export default Toolbar;
