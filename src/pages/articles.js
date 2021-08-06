import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Toolbar from '../globals/toolbar/Toolbar';
import SideNav from '../globals/sideBar/SideNav';
import colors from '../config/colors';
import Sailing from '../components/Sailing';
import img1 from '../assets/img/article1.png';
import img2 from '../assets/img/article2.png';
import img3 from '../assets/img/article3.png';
import Collaborating from '../components/Collaborating';
import Footer from '../globals/footer/Footer';

function Articles(props) {
  const [article, setArticle] = useState('sailing');
  const router = useRouter();

  const changeArticle = (article) => {
    setArticle(article);
  };

  useEffect(() => {
    const { article } = router.query;
    if (article?.length > 0) {
      article === 'sailing' ? setArticle('sailing') : setArticle('collaborate');
    }
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The Incubator Reality - a social-entrepreneurial program where the best brains are made to compete with their skills, ideas and passion during incubation. The Incubator Reality as a vehicle, aims to disrupt start-up and elevate the thoughts of innovation."
        />
        <meta
          name="keywords"
          content="innovation, startups, realty tv show, the incubator reality, theincubatoreality, incubator reality, entertainment, transformation, entrepreneurship, gamechangers, creativity, partnership, incubationreality, startup, "
        />
        <meta name="author" content="The Incubator Reality" />
      </Head>
      <div className="navbar">
        <div className="upper-nav">
          <SideNav />
          <Toolbar props={props} />
        </div>
      </div>
      <main>
        <article className="box">
          {article === 'sailing' ? <Sailing /> : <Collaborating />}
        </article>
        <aside className="box two">
          <div className="heading">
            <p>View Current Articles</p>
          </div>
          <div className="others">
            <div className="pack" onClick={() => changeArticle('sailing')}>
              <h3>
                SAILING THROUGH EXTREME CHALLENGES TO MAKE THE BIGGEST IMPACT-
                DISRUPTING STARTUPS.
              </h3>
              <p>
                An independent research revealed many brilliant individuals,
                teams and talents
              </p>
            </div>
            <div className="pack" onClick={() => changeArticle('collaborate')}>
              <h3>
                COLLABORATING OUR NATION’S SKILLS TO BE THE PACESETTER IN
                INNOVATION AND INTELLECTUALLY PROPERTIES
              </h3>
              <p>
                With reference and acknowledgement to the great city of the old
                western region – Ibadan
              </p>
            </div>
          </div>
          <div className="gallery">
            <div className="cont">
              <div className="img-container">
                <img src={img1} alt="the incubator reality" />
              </div>
            </div>
            <div className="cont">
              <div className="img-container">
                <img src={img2} alt="the incubator reality" />
              </div>
            </div>
            <div className="cont">
              <div className="img-container">
                <img src={img3} alt="the incubator reality" />
              </div>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .navbar {
    background: ${process.browser && window.location.pathname === '/articles'
      ? 'transparent'
      : `${colors.colorBlue}`};
    font-weight: 2em;
  }
  font-size: 1.5em;
  background-color: ${colors.colorWhite};
  main {
  img {
    width: 100%;
  }
    width: 85%;
    margin: 0 auto;
    padding: 4rem 0;
    .heading {
      h1 {
        color: ${colors.colorBlack};
        font-size: 1.7em;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
    .sub-heading {
      margin-top: 1rem;
      padding-bottom: 1rem;
      color: ${colors.colorBlack};
      border-bottom: 1px solid ${colors.colorGrey2};
      p {
        font-size: 0.9em;
      }
    }
    .img-container {
      margin: 2rem 0 1rem;
    }
    .text {
      .txt {
        margin-top: 2rem;
        line-height: 25px;
        font-family: 'Georgia', 'Open sans', sans-serif;
        p {
          font-size: 18px;
          font-weight: 300;
          em {
            margin-right: 0.3em;
          }
        }
        .header {
          font-weight: bold;
        }
      }
    }
    .article {
      padding-bottom: 2rem;
      border-bottom: 2px solid ${colors.colorGrey2};
    }
    .comment {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      background-color: ${colors.colorGrey2};
      p {
        font-weight: bold;
      }
      ul {
        display: flex;
        li:not(:last-child) {
          margin-right: 0.6rem;
        }
      }
    }
    .two {
      margin-top: 2rem;
      border-top: 2px solid ${colors.colorGrey2};
      padding: 2rem 0;
      .heading {
        margin-bottom: 2rem;
        p {
          font-size: 1.2em;
        }
      }
      .others {
        margin-bottom: 3rem;
        .pack {
          h3 {
            margin-bottom: 1rem;
            text-transform: uppercase;
            cursor: pointer;
          }
          p {
            width: 90%;
          }
        }
        .pack:not(:last-child) {
          margin-bottom: 4rem;
        }
      }
      .gallery {
        .cont {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
          /* align-items: center; */
          p {
            font-weight: bold;
            width: 80%;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    main {
      display: grid;
      grid-template-columns: 60% 35%;
      grid-gap: 8rem;
      .two {
        margin-top: 20rem;
        padding: 1rem 0 !important;
      }
    }
  }
`;

export default Articles;
