import React, { useEffect } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

import PressImg from '../assets/img/incubator_reality.png';

function PressRelease() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="article">
        <div className="heading">
          <h1>
            The Incubator Reality set to disrupt Nigerian startups with over N1
            billion
          </h1>
        </div>

        <div className="text">
          <div className="txt">
            <p>
              The Incubator Reality has created a lifeline to leapfrog and
              disrupt Nigerian start-ups to increase their capacity and access
              to funding via a novelty incubation program.
            </p>
          </div>
          <div className="txt">
            <p>
              Start-ups encounter many challenges especially during the
              formation stage. These challenges range from seed funding,
              partnership and investment, business resourceand mentorship.
              Unfortunately, many brilliant individuals, teams, talents are out
              there hoping for a turnaround and better days to come where their
              thought-of innovation can become reality.
            </p>
          </div>
          <div className="img-container">
            <img src={PressImg} alt="incubator reality press release png" />
          </div>
          <div className="txt">
            <p>
              A statement by ECS Alliance, the Incubator’s architect, said the
              reality TV show, the biggest and first of its kind in the
              world,seeks to change the start-up narrative by creating a
              start-up hub where best brains are incubated to encourage product
              exposure, partnership and funding.
            </p>
          </div>
          <div className="txt">
            <p>
              The Incubator Reality will admit 25 contestants who will work in
              five different teams for an incubation period of 12 weeks and
              graduate with the seed fund for the winning team and first
              runner-up totaling $1.7 million.
            </p>
          </div>
          <div className="txt">
            <p>
              Start-ups, coined SMEs (Small Medium Enterprises) many decades
              ago, are confronted with challenges that cause their failure,
              sometimes before they even get started while some barely survive
              the first two years. There is a critical need to pay attention in
              this direction. Nigeria, a hub of raw talents, has what it takes
              to compete globally, however, the specific challenges that
              start-ups face make it near impossible.
            </p>
          </div>
          <div className="txt">
            <p>
              “Our local talents are blessed with ideas and innovation that can
              compete with their peers in other nations of the world, but our
              banks have low appetites to support these talents, their ideas and
              innovations. Angel investors and seed funding, which are the first
              business drivers, are almost non-existent hence the creation of
              The Incubator Reality.The show will focus on revolutionising the
              quondam challenges of start-ups,” the statement said.
            </p>
          </div>
          <div className="txt">
            <p>
              Angel investors and seed funding, which are the first business
              drivers, are almost non-existent hence the creation of The
              Incubator Reality.The show will focus on revolutionising the
              quondam challenges of start-ups,” the statement said.
            </p>
          </div>
          <div className="txt">
            <p>
              The Incubator’s architect further said "the winner and first
              runner-up of the programme will receive $1 million and $0.7
              million.
            </p>
          </div>
          <div className="txt">
            <p>
              “The Incubator Reality aims to address the most crucial challenges
              in Nigerian start-ups, which is – how to leverage knowledge,
              creativity and innovation – to leapfrog ahead of or at the very
              least, be at par with many of the developed economies within the
              shortest possible time, creating mega companies, more jobs and
              opportunities.”
            </p>
          </div>
          <div className="txt">
            <p>
              The Incubator Reality will minimize brain drain while fostering
              growth and development. Contestants will be able to showcase their
              brand and attract attention to their talent; their business is
              already a success before they graduate from the Incubator." the
              Incubator architect explained
            </p>
          </div>
          <div className="txt">
            <p>
              “The viewers will be inspired as well as the partner brand having
              maximum exposure with a projected 40 million views, and Nigeria
              benefits from growth in GDP and direct investment to business
              growth.
            </p>
          </div>
          <div className="txt">
            <p>
              To be eligible for the program, applicants must be between the
              ages of 25 and 40 years, and must have an entrepreneurial drive
              with originality, excellent communication skills (both oral and
              written), a good team player with sales and marketing skills, as
              well as good leadership and influencing skills.
            </p>
          </div>
          <div className="txt">
            <p>
              Auditions will be done in different cities across the country, the
              UK and New York, on dates to be announced soon.
            </p>
          </div>
        </div>
      </div>
      <div className="comment">
        <div className="author">
          {/* <p>By: Collins Nweze</p>
          <p>The Nation</p> */}
        </div>
        <ul>
          <li>Share</li>
          <li>
            <FacebookShareButton
              url={'https://theincubatoreality.com/press'}
              quote={'Incubator Reality: Startups to contest for N1b'}
            >
              <FacebookIcon size={36} />
            </FacebookShareButton>
          </li>
          <li>
            <LinkedinShareButton
              url={'https://theincubatoreality.com/press'}
              quote={'Incubator Reality: Startups to contest for N1b'}
            >
              <LinkedinIcon size={36} />
            </LinkedinShareButton>
          </li>
          <li>
            <TelegramShareButton
              url={'https://theincubatoreality.com/press'}
              quote={'Incubator Reality: Startups to contest for N1b'}
            >
              <TelegramIcon size={36} />
            </TelegramShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={'https://theincubatoreality.com/press'}
              quote={'Incubator Reality: Startups to contest for N1b'}
            >
              <TwitterIcon size={36} />
            </TwitterShareButton>
          </li>
          <li>
            <WhatsappShareButton
              url={'https://theincubatoreality.com/press'}
              quote={'Incubator Reality: Startups to contest for N1b'}
            >
              <WhatsappIcon size={36} />
            </WhatsappShareButton>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PressRelease;
