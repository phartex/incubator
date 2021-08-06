import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';

function About() {
  return (
    <Wrapper>
      <article>
        <div className="heading">
          <h1>The Hatching Avenue</h1>
        </div>
        <div className="txt">
          <p>
            The Incubator Reality is a start-up reality TV show designed to
            disrupt start-ups with the best brains contesting against each other
            in a team, while encouraging partnership, innovation, creativity and
            growth among youths and visionaries to bring their entrepreneurial
            dreams to reality.
          </p>
        </div>
        <div className="txt">
          <p>
            Disrupting the start-up narrative by creating a start-up hub where
            best brains are incubated to encourage product exposure, partnership
            and funding.
          </p>
        </div>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 1em 3em 0em 3em;
  background-color: ${colors.colorWhite};
  color: ${colors.colorMidnightBlue};
  line-height: 1.7;
  flex: 0 0 50%;
  .heading {
    margin-bottom: 2rem;
    h1 {
      font-size: 2.5em;
      font-weight: 400;
      color: ${colors.colorBlue};
    }
  }
  .txt {
    letter-spacing: -0.2px;
    font-size: 1em;
    p {
      color: ${colors.colorMidnightBlue};
    }
  }
  .txt:nth-child(2) {
    margin-bottom: 2.5rem;
  }

  @media screen and (min-width: 690px) and (max-width: 900px) {
    
    flex: 0 0 50%;
    line-height: 1.5;
    .heading {
      margin-bottom: 1rem;
      h1 {
        font-size: 2em;
        font-weight: 400;
        color: ${colors.colorBlue};
      }
    }
    .txt {
      letter-spacing: 0.2px;
      font-size: 0.75em;
      p {
        color: ${colors.colorMidnightBlue};
      }
    }
  .txt:nth-child(2) {
    margin-bottom: 1.5rem;
  }
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    padding: 1em 2em 0em 3em;
  }
  @media (min-width: 1500px){
    article {
        .web {
          margin-left: 69.5%;
          width: 30%;
          height: 72%;
          top: 90em;
        }
      }
    }
  }
`;

export default About;
