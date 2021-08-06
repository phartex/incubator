import React from 'react';
import styled from 'styled-components';

import query from '../assets/img/1.png';
import colors from '../config/colors';
import { useRouter } from 'next/router';

function Hero() {
  const [show, setShow] = React.useState(false);
    const router = useRouter();

    const handleClick = (href) => {
    router.push(href);
  };

  return (
    <Wrapper>
      <section className="sectionOne">
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
        <h1>ACTIVATING</h1>
        <h1>TALENTS WITH GOALS</h1>
        <p className="yellow">Touching Lives With Great Impact</p>
        <div className="txt">
          <p>
            Vision meets passion and drives the compelling startup experience.
          </p>
          <p>
            The Incubator have decoded and created a deeper connection with
            startups
          </p>
        </div>
        <div className="button">
          <a className="btn" onClick={() => handleClick('/participation')}>Join the Game Changers</a>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${colors.colorBlue};
  font-size: 1.4em;
  color: ${colors.colorWhite};
  padding: 14rem 3rem 10rem 5rem;
  position: relative;
  top: -120px;
  margin-bottom: -120px;

  .sectionOne {
    padding-top: 6rem;
    padding-left: 10rem;
    h1 {
      font-size: 2.5em;
      line-height: 1.1;
    }
    p {
      font-size: 1.2em;
    }
    .yellow {
      color: ${colors.colorYellow};
    }
    .txt {
      margin-top: 1.5rem;
      width: 80%;
    }
    .button {
      margin-top: 2em;
      .btn {
        background: ${colors.colorYellow};
        padding: 1em 3.5em 1em 3.5em;
        border-radius: 0.5em;
        color: ${colors.colorMidnightBlue};
        font-weight: bolder;
        font-size: 0.8em;
        &:hover {
          background: #fdee00;
          color: #4b0082;
          cursor: pointer;
          font-size: 0.805em;
        }
      }
    }
    .connect {
      position: absolute;
      right: 81px;
      top: 150px;
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
        &:hover {
          background: mikadoyellow;
          cursor: pointer;
          font-size: 0.86em;
        }
      }
    }
    .hide {
      display: none;
    }
    .query {
      display: block;
      position: absolute;
      right: 0;
      top: 140px;
      width: 80px;
      border: 1px solid ${colors.colorWhite};
      border-right: none;
      padding: 1rem;
      padding-bottom: 0;
      padding-right: 0;
      cursor: pointer;
      width: 80px;
      &:hover {
        border: 1.8px solid whitesmoke;
        border-radius: 4px;
      }
      img {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 690px) {
    padding: 12rem 0rem 4rem 0rem;
    .sectionOne {
      padding-left: 2rem;
      h1,
      p {
        width: 100%;
      }
      h1 {
        font-size: 1.498em;
        line-height: 1.1;
        padding-left: 2rem;
      }
      .yellow{
        padding-left: 2rem;
        padding-top: 0.5rem;
        font-size: 1.04em;
      }
      p:first-child {
        padding-top: 2rem;
        white-space: nowrap;
      }
      p {
        font-size: 0.7em;
         @media only screen and (max-width: 390px) {
           font-size: 0.55em;
         }
      }
      .txt {
        width: 100%;
        padding-left: 2rem;
        word-spacing: -0.02em;
        letter-spacing: -0.02em;
      }
      .query {
        display: none;
      }
      .button {
        .btn {
          padding: 0.8em 1.5em 0.8em 1.5em;
          margin-left: 1.5em;
        }
      }
    }
  }
  
  @media screen and (min-width: 691px) and (max-width: 900px) {
    padding: 10rem 3rem 7rem 0rem;
    .sectionOne {
      h1 {
        font-size: 1.5em;
        line-height: 1.1;
      }
      .yellow{
        padding-top: 0.5rem;
        font-size: 1.2em;
      }
      p:first-child {
        padding-top: 2rem;
        white-space: nowrap;
      }
      p {
        font-size: 0.9em;
         }
      .button {
        margin-top: 1.2em;
        .btn {
          padding: 0.6em 1.7em 0.6em 1.7em;
          border-radius: 0.5em;
          font-size: 0.55em;
          &:hover {
            font-size: 0.5505em;
          }
        }
      }
    }
  }
  
  @media (min-width: 900px) and (max-width: 1100px) {

    .sectionOne {
      h1 {
        font-size: 2em;
        line-height: 1.1;
      }
      p {
        font-size: 1em;
      }
    
      .txt {
        width: 85%;
      }
      .button {
        margin-top: 1.8em;
        .btn {
          padding: 0.7em 3em 0.7em 3em;
          border-radius: 0.5em;
          font-size: 0.7em;
          &:hover {
            font-size: 0.705em;
          }
        }
      }
    }
  }
`;

export default Hero;
