import React from 'react';
import styled from 'styled-components';

import query from '../../assets/img/1.png';
import logo from '../../assets/img/logo-image.png';
import colors from '../../config/colors';
import { useRouter } from 'next/router';
import footersocialicons from '../../contants/footersocialicons';

function Footer() {
  const [show, setShow] = React.useState(false);
  const router = useRouter();

  return (
    <Wrapper>
      <section className="sectionOne">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
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
      </section>
      <section className="sectionTwo">
        <h1>The Best Brains Hub</h1>
        <div className="box">
          <div className="follow">
            <p>Follow us</p>
          </div>
          <ul className="row">
            {footersocialicons.map((social, i) => (
              <li key={i}>
                <a href={social.link}>
                  <img src={social.icon} alt="social media icons png" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="right">
          Copyright &copy; {new Date().getFullYear()} The Incubator Reality. All
          Right Reserved
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color:  #354054;
  color: ${colors.colorWhite};
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 11rem 4rem;
  padding-right: 0;
  position: relative;
  .sectionOne {
    padding-right: 0;
    .logo {
      img {
        &:hover {
          cursor: pointer;
          width: 11.5em;
        }
      }
    }
    .connect {
      position: absolute;
      right: 70px;
      top: 60px;
      background-color: ${colors.colorWhite};
      color: ${colors.colorBlack};
      display: flex;
      flex-direction: column;
      padding: 2rem 2rem;
      align-items: center;
      justify-content: center;
      font-size: 0.9em;
      color: ${colors.colorGreyDark};
      font-size: 1.2em;
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
        /* margin-top: 1rem; */
        font-weight: bold;
      }
    }
    .hide {
      display: none;
    }
    .query {
      position: absolute;
      right: 0;
      top: 26%;
      width: 60px;
      border: 1px solid ${colors.colorWhite};
      /* border-right: none; */
      padding: 1rem;
      padding-bottom: 0;
      padding-right: 0.5em;
      margin-right: 0.5em;
      cursor: pointer;
      &:hover {
        border: 1.8px solid whitesmoke;
        border-radius: 4px;
      }
      img {
        width: 100%;
      }
    }
  }

  .sectionTwo {
    h1 {
      font-size: 1.7em;
      margin-bottom: 5rem;
    }
    .box {
      .follow {
        margin-bottom: 1rem;
        p {
          font-weight: bold;
        }
      }
      .row {
        li:not(:last-child) {
          margin-right: 1.2rem;
        }
      }
    }
    .right {
      font-size: 0.8em;
      margin-top: 2rem;
    }
  }

  @media (min-width: 690px) and (max-width: 900px) {
    
  .sectionOne {
    .logo {
      img {
        margin-top: 3rem;
        width: 11em;
        &:hover {
          cursor: pointer;
          width: 11.5em;
        }
      }
    }
  }
    flex-direction: row;
    .sectionOne {
      width: 32%;
      p {
        margin-top: 1rem;
      }

      .query {
        width: 80px;
      }
    }
    .sectionTwo {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        margin-top: 4rem;
        margin-bottom: 8rem;
        font-size: 1.5em;
      }
      .box {
        .follow {
          margin-bottom: 1rem;
          p {
            font-weight: bold;
          }
        }
        .row {
          li:not(:last-child) {
            margin-right: 1.2rem;
          }
        }
      }
    }
  }

    @media (min-width: 900px) {
    flex-direction: row;
    .sectionOne {
      width: 34%;
      p {
        margin-top: 1rem;
      }

      .query {
        width: 80px;
      }
    }
    .sectionTwo {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        margin-bottom: 6rem;
        font-size: 2em;
      }
    }
  }
  @media (max-width: 350px) {
    .query {
      display: none;
    }
  }
`;

export default Footer;
