import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../config/colors';

function Intro() {
  const [more, setMore] = useState(false);
  return (
    <Wrapper>
      <div className="head">
        <p>
          Sailing through extreme challenges to make the biggest impact-
          disrupting startups.
        </p>
        <p>
          Watch as we light up the biggest startup reality program in Nigeria.
        </p>
      </div>
      <div className="content">
        <p>
          <span>
            Lagos is considered to be the land of opportunity for Nigerians,
            Africans and the world and rightly so, one of the best business
            cities in the world.
          </span>
          <span>
            Since the economies of the states and Nigeria as a whole will be
            rewarded with the prosperity of start-ups, much has to be done to
            encourage startups and its growth, at both state and federal levels.
          </span>
          <span>
            An independent research revealed many brilliant individuals, teams
            and talents, especially the youths are hoping for a turnaround and
            better days to come where their thought-of innovation can become a
            reality.
          </span>
          <span className={more ? 'more' : 'less'}>
            <span>
              The challenges encountered by startups are enormous especially
              during the formation stage. These challenges send most startups to
              early extinction thereby discouraging the youths from engaging in
              startups. Instead, they will rather spend most of their time
              seeking employment than attempt to own a business. They find
              solace in questioning “what is the point?” when faced with the
              challenge of seed fund since securing investment proves an uphill
              task likewise access to business information and mentorship.
            </span>
            <span>Then, what is actually the point?</span>
            <span>
              Nigeria has what it takes to export innovation with its vast
              talented youths however a lack of collaboration between the
              government and private investors constitute a myopia of business
              insight and risk aversion invariably hindering startups from its
              launch.
            </span>
            <span>
              Seed fund, which is the basis and energy for startups is almost
              non-existentor rather, difficult to access for new business
              entrants. While seed funding is seen in other nations as a way to
              grow new business ideas, its success is showcased in the Western
              world where appetite for investment is huge; that is why many
              businesses and innovations emerge at every turn.
            </span>
          </span>
        </p>
      </div>
      <div
        className="read"
        onClick={() => {
          setMore(!more);
        }}
      >
        <p>{more ? 'Read Less...' : 'Read More...'}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 2rem;
  .head {
    padding: 2rem;
    background-color: ${colors.colorWhite};
    color: ${colors.colorBlue};
    border-bottom: 3px solid ${colors.colorGrey};
    p:first-of-type {
      font-weight: bold;
      margin-bottom: 0.8rem;
    }
  }

  .content {
    padding: 3rem 2rem 2rem;
    background-color: ${colors.colorWhite};
    font-size: 0.8em;
    span {
      margin-bottom: 1.5rem;
      display: block;
    }
  }
  span.more {
    display: inline-block;
  }
  span.less {
    display: none !important;
  }
  .read {
    padding: 0.5rem 2rem 2rem;
    cursor: pointer;
    background-color: ${colors.colorWhite};
    font-size: 0.8em;
  }
`;

export default Intro;
