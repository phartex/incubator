import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import { useRouter } from 'next/router';

function YourDream() {
  
    const router = useRouter();

    const handleClick = (href) => {
    router.push(href);
  };

  return (
    <Wrapper>
      <div className="heading">
        <div className="header">
          <span className="second-header">Start Your Dream</span>
        </div>
      </div>
      <div className="txt">
        <p>
          Your dream, thoughts & vision emanates from your strong passion or
          idea unique to you, taking it further brings it to reality.
        </p>
      </div>
      <div className="txt">
        <p>
          What do you need for your startup? People, process, structure, seed
          fund, mentorship, partnership and investment. The Incubator offers
          these and more.
        </p>
      </div>
      <div className="txt">
        <p>
          Join the best brain - game changers who have what it takes to turn
          thoughts to reality.
        </p>
      </div>
      <div className="txt">
        <strong>The Incubator Reality is waiting for You</strong>
      </div>
      <div className="end">
        <hr />
        <a onClick={() => handleClick('/participation')}>Join the Game Changers</a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  z-index: 1;
  padding: 2.7em;
  background-color: ${colors.colorGreyLight};
  flex: 0 0 50%;
  .heading {
    margin: 0em 0em 0.7em 0em;
    .header {
      font-weight: 400;
      color: #354054;
      margin: 0em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .second-header {
        font-size: 2.2em;
        color: ${colors.colorBlue};
        position: relative;
        bottom: 0em;
      }
    }
  }
  .txt {
    color: #000031;
    font-size: 1em;
    letter-spacing: -0.2px;
  }
  .txt:not(:last-child) {
    margin-bottom: 2rem;
  }
  .end {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    hr {
      margin-bottom: 1.5em;
      height: 0.2em;
      width: 16em;
      background: ${colors.colorMidnightBlue};
    }
    a {
      color: ${colors.colorWhite};
      text-align: center;
      padding-top: 0.8em;
      width: 90%;
      height: 3em;
      margin: 0.5em 0em 0.5em 0em;
      font-size: 1em;
      border-radius: 0.5em;
      background: ${colors.colorBlue};
      &:hover {
        background: blue;
        color: lightyellow;
        cursor: pointer;
        font-size: 1.06em;
      }
    }
  }

  
  @media (min-width: 900px) and (max-width: 1100px) {
      padding: 2.4em;
      .txt {
        strong {
        font-size: 0.9em;
        }
      }
    }
      @media screen and (min-width: 690px) and (max-width: 900px) {
      padding: 2em;
      .txt {
        strong {
        font-size: 0.9em;
        }
      }
      .end {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        hr {
          margin-bottom: 1.5em;
          height: 0.2em;
          width: 16em;
          background: ${colors.colorMidnightBlue};
        }
        a {
          width: 88%;
          height: 2.9em;
          font-size: 0.95em;
          &:hover {
            font-size: 0.9506em;
          }
        }
      }
    }
`;

export default YourDream;
