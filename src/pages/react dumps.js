import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Hero from '../components/Hero';
import colors from '../config/colors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Footer from '../globals/footer/Footer';
import bg from '../assets/img/19.png';
import bg2 from '../assets/img/20.png';

import About from '../components/About';
import impactBig from '../assets/img/12.png';
import impact from '../assets/img/12a.png';
import creative from '../assets/img/12c.png';
import creativeBig from '../assets/img/12cb.png';
import Navbar from '../globals/navbar/Navbar';
import YourDream from '../components/YourDream';
import mentor from '../assets/img/34.png';
import mentorBig from '../assets/img/34a.png';
import driven from '../assets/img/37.png';
import drivenBig from '../assets/img/37a.png';
import evolution from '../assets/img/14.png';
import impactNg from '../assets/img/16.png';
import partnership from '../assets/img/28a.png';
import idea from '../assets/img/28b.png';
import investment from '../assets/img/28c.png';
import roll from '../assets/img/29a.png';
import Modal from '../components/Modal';

const Card = ({ img, title, txt }) => {
  return (
    <article className="card">
      <div className="img-container">
        <img src={img} alt="incubator reality" />
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="txt">
        <p>{txt}</p>
      </div>
    </article>
  );
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState({
    impact: false,
    creative: false,
    driven: false,
    evolution: false,
    mentor: false,
    impactNg: false,
  });

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleShowModal = (data) => {
    setShowModal(!showModal);
    switch (data) {
      case 'impact':
        return setShow({
          impact: true,
          creative: false,
          driven: false,
          evolution: false,
          mentor: false,
          impactNg: false,
        });
      case 'creative':
        return setShow({
          impact: false,
          creative: true,
          driven: false,
          evolution: false,
          mentor: false,
          impactNg: false,
        });
      case 'driven':
        return setShow({
          impact: false,
          creative: false,
          driven: true,
          evolution: false,
          mentor: false,
          impactNg: false,
        });
      case 'evolution':
        return setShow({
          impact: false,
          creative: false,
          driven: false,
          evolution: true,
          mentor: false,
          impactNg: false,
        });
      case 'mentor':
        return setShow({
          impact: false,
          creative: false,
          driven: false,
          evolution: false,
          mentor: true,
          impactNg: false,
        });
      case 'impactNg':
        return setShow({
          impact: false,
          creative: false,
          driven: false,
          evolution: false,
          mentor: false,
          impactNg: true,
        });
      default:
        return setShow({
          impact: false,
          creative: false,
          driven: false,
          evolution: false,
          mentor: false,
          impactNg: false,
        });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <Head>
        <title>The Incubator Reality</title>
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
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <section className="indexSection">
          <div className="videoCover">
            {/* <video
              autoPlay
              loop
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                top: '0',
                padding: '0',
              }}
              className="vid"
            >
              <source
                src={require('../assets/videos/countdown.webm')}
                type="video/webm"
              />
              <source
                src={require('../assets/videos/Get Your Idea Working2.mp4')}
                type="video/mp4"
              />
            </video> */}
            <img src={require('../assets/img/player.png')}/>
          </div>
          <div className="startup">
            <div className="heading">
              <h1>Distrupting Startup</h1>
            </div>
            <div className="txt">
              <p>
                The biggest hatching program for the Game Changers Don't limit your ability to lead, Come where your thought-of
                innovation can become reality
              </p>
            </div>
            <div className="txt">
              <p>
                A social entrepreneurial platform where best brains will compete in partnership using their ideas, skills
                and passion.
              </p>
            </div>
          </div>
        </section>
        <section className="secondSection">
          <div id="cloud">
            <span> WATCH OUT FOR THE AUDITIONS!!! </span> <li> Lagos</li>{' '}
            <li>Ibadan </li>
            <li>Port-Harcourt </li>
            <li>Abuja </li> <li>New-York </li>
            <li>London</li>
          </div>
        </section>

        <section className="thirdSection">
          <About />
          <YourDream />
        </section>

        <section className="fourthSection">
          <div className="slide">
            <Slider {...settings}>
              <div
                className="img-container"
                onClick={() => {
                  handleShowModal('impact');
                }}
              >
                <img src={impact} alt="incubator reality" />
              </div>
              <div
                className="img-container"
                onClick={() => {
                  handleShowModal('creative');
                }}
              >
                <img src={creative} alt="incubator reality" />
              </div>
            </Slider>
            <div className="cover"></div>
            <div className="cover-two"></div>
          </div>
          <article>
            <div className="cover-two"></div>
            <div
              className="img-box"
              onClick={() => {
                handleShowModal('mentor');
              }}
            >
              <img src={mentor} alt="incubator reality" />
            </div>
            <div
              className="img-box"
              onClick={() => {
                handleShowModal('driven');
              }}
            >
              <img src={driven} alt="incubator reality" />
            </div>
            <div
              className="img-box"
              onClick={() => {
                handleShowModal('impactNg');
              }}
            >
              <img src={impactNg} alt="incubator reality" />
            </div>
            <div
              className="img-box"
              onClick={() => {
                handleShowModal('evolution');
              }}
            >
              <img src={evolution} alt="incubator reality" />
            </div>
          </article>
          <Modal showModal={showModal} closeModal={closeModal}>
            {show.creative ? (
              <img src={creativeBig} alt="incubator reality" />
            ) : show.impact ? (
              <img src={impactBig} alt="incubator reality" />
            ) : show.mentor ? (
              <img src={mentorBig} alt="incubator reality" />
            ) : show.driven ? (
              <img
                src={drivenBig}
                alt="incubator reality"
                style={{ width: '82%' }}
              />
            ) : show.evolution ? (
              <div className="videoContainer">
                <video controls poster={evolution} className="vid" autoPlay>
                  <source
                    src={require('../assets/videos/Navigation.mp4')}
                    type="video/mp4"
                  />
                </video>
              </div>
            ) : (
              <div className="videoContainer">
                <video controls poster={impactNg} className="vid" autoPlay>
                  <source
                    src={require('../assets/videos/Get Your Idea Working2.webm')}
                    type="video/webm"
                  />
                  <source
                    src={require('../assets/videos/Get Your Idea Working2.mp4')}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </Modal>
        </section>

        <section className="fifthSection">
          <article className="header">
            <h1>The Incubator Reality is...</h1>
            <p>Partnering to power the next generations of entrepreneur</p>
          </article>
          <div className="card-section">
            <Card
              img={partnership}
              title="Partnership"
              txt="We continually give you assurance on our service"
            />
            <Card
              img={idea}
              title="Idea Exposure"
              txt="We committed to our high standards which is why we stick to them, even in difficult situations"
            />
            <Card
              img={investment}
              title="Investment"
              txt="We have a trademark of astonishing performance, beating our own records"
            />
          </div>
        </section>

        <section className="sixthSection">
          <article>
            <div className="text">
              <div className="head">
                <h1>The Incubator Reality</h1>
              </div>
              <div className="txt">
                <p>
                  Focused on revolutionizing the erstwhile challenges of
                  start-ups.
                </p>
              </div>
              <div className="txt">
                <p>
                  while creating a catalyst for empowerment of youth and women
                  to foster economic growth and development.
                </p>
              </div>
            </div>

            <div className="img-container">
              <img src={roll} alt="incubator reality" />
            </div>
          </article>
        </section>

        <section className="seventhSection">
          <div className="heading">
            <h1>Why be a part of The Incubator Reality?</h1>
            <h3>Because everyone is a winner</h3>
          </div>
          <div className="txt">
            <p>
              The uniqueness of the Incubator gives all contestants the
              opportunity to be winners. Contestants will have gained tremendous
              value and entrepreneurial experience. Additionally, cash prices
              are awarded to individual and teams that excel during sponsored
              task activities.
            </p>
          </div>
          <div className="txt">
            <p>
              Furthermore, a contestant might even have a job contract or
              consultancy project awaiting them at the end of the program from
              viewer or companies who admire or need their skills and
              competence.
            </p>
          </div>
        </section>

        <section className="eighthSection">
          <Slider {...settings}>
            <div className="img-container">
              <div className="text">
                <div className="heading">
                  <p>We help you navigate through </p>
                  <p>the fierce terrain</p>
                </div>
                <div className="txt">
                  <p>
                    The Nigerian business terrain echoes lesser opportunities
                    for start-ups, however the brave is rewarded for thinking
                    beyond the box by rising to the top. This is the Business of
                    Creativity
                  </p>
                </div>
              </div>
              <img src={bg} alt="bg pmg" />
            </div>
            <div className="img-container idea">
              <div className="text">
                <div className="heading">
                  <p>Idea Conception</p>
                  <p>Births Innovative Transformation</p>
                </div>
                <div className="txt">
                  <p>
                    Kick start your journey to success with a new sense of
                    purpose
                  </p>
                </div>
              </div>
              <img src={bg2} alt="bg pmg" />
            </div>
          </Slider>
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  background-color: ${colors.colorGreyLight};
  .indexSection {
    display: flex;
    flex-flow: column;
    .videoCover {
      padding: 10%;
      margin: 5% 5% 0% 5%;
      background: #F0F0F0;
      display: flex;
      justify-content: center;
      img {
        width: 50%;
      }
    }
    .startup {
      top: 0px;
      background-color: white;
      color: ${colors.colorMidnightBlue};
      height: 100% ;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .heading {
        margin: 0 auto;
        width: 60%;
        h1 {
          font-size: 1.8em;
          font-weight: lighter;
          margin-bottom: 1rem;
        }
      }
      .txt:not(:last-child) {
        margin-bottom: 1rem;
        font-weight: bolder;
        font-size: 0.8em;
      }
      .txt:last-child {
        margin: 0 auto;
        p {
          font-size: 1.4em;
        }
      }
    }
  }

  .secondSection {
    height: 300px;
    background-color: ${colors.colorYellow};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.colorWhite};
    font-size: 1.2em;
    font-weight: bold;
    overflow: hidden;
    z-index: '0';

    #cloud {
      min-width: 950px;
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      animation: slide 15s infinite linear;
      -moz-animation: slide 15s infinite linear; //Firefox
      -webkit-animation: slide 15s infinite linear; //chrome and safari
      -o-animation: slide 15s infinite linear; //Opera

      span:not(:last-child) {
        margin-right: 3rem;
      }
      li {
        margin-right: 3rem;
      }
    }

    @keyframes slide {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    @-webkit-keyframes slide {
      0% {
        -webkit-transform: translateX(100%);
      }
      100% {
        -webkit-transform: translateX(-100%);
      }
    }

    @-o-keyframes slide {
      0% {
        -o-transform: translateX(100%);
      }
      100% {
        -o-transform: translateX(-100%);
      }
    }
  }

  .thirdSection {
    width: 100%;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50%;
    margin-right: -50%;
    touch-action: manipulation;
    scroll-snap-type: x mandatory;
    overflow: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1.6rem;
    padding-left: 2.4rem;
    scroll-padding: 2.4rem;
    grid-auto-columns: 70%;
    justify-content: flex-start;
    grid-template-columns: none;
    padding-top: 5rem;
    padding-bottom: 5rem;
    &::-webkit-scrollbar {
      width: 0;
    }
    h1 {
      font-size: 1.4em;
    }
    p {
      font-size: 1.2em;
    }
  }

  .fourthSection {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    border-top: 7px solid rgba(0, 0, 0, 0.6);
    border-bottom: 7px solid rgba(0, 0, 0, 0.6);
    .img-container {
      width: 100%;
      cursor: pointer;
    }
    article {
      .img-box {
        cursor: pointer;
        width: 100%;
      }
    }
    .videoContainer {
      width: 100%;
      margin: 0;
      padding: 0;
      cursor: pointer;
      .vid {
        object-fit: fill;
        width: 100%;
      }
    }
  }

  .fifthSection {
    padding: 5rem;
    padding-bottom: 0;

    .header {
      width: 80%;
      margin: 0 auto;
      h1 {
        text-align: left;
        font-size: 1.9em;
        color: ${colors.colorBlue};
        font-weight: 300;
        margin-bottom: 0.6rem;
      }
      p {
        font-size: 1.1em;
        font-weight: bold;
        color: ${colors.colorBlue};
      }
    }
    .card-section {
      width: 100%;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50%;
      margin-right: -50%;
      touch-action: manipulation;
      scroll-snap-type: x mandatory;
      overflow: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      display: grid;
      grid-auto-flow: column;
      grid-gap: 1.6rem;
      row-gap: 0;
      padding-left: 2.4rem;
      scroll-padding: 2.4rem;
      grid-auto-columns: 80%;
      justify-content: flex-start;
      grid-template-columns: none;
      padding-top: 3rem;
      bottom: -60px;
      z-index: 100;
      &::-webkit-scrollbar {
        width: 0;
      }
      .card {
        background-color: ${colors.colorGreyLight};
        border: 16px solid ${colors.colorWhite};
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 3rem 4rem;
        text-align: center;
        color: ${colors.colorBlue};
        height: 28rem;
        .img-container {
          margin-bottom: 1.2rem;
        }
        .title {
          margin-bottom: 0.6rem;
        }
      }
    }
  }

  .sixthSection {
    padding: 10rem 0 0;
    background-color: ${colors.colorYellow};
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-container {
        width: 25rem;
        position: relative;
        /* bottom: -60px; */
        margin-bottom: -100px;
        z-index: 100;
        img {
          width: 100%;
        }
      }
      .text {
        width: 60%;
        text-align: center;
        margin: 0 auto 4rem;
        p {
          font-size: 1.1em;
        }
        .head {
          h1 {
            font-size: 3rem;
            font-weight: 300;
            margin-bottom: 0.7rem;
          }
        }
        .txt:nth-child(2) {
          font-weight: bold;
          margin-bottom: 1rem;
        }
      }
    }
  }

  .seventhSection {
    padding: 14rem 0 10rem;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    .heading {
      margin-bottom: 2rem;
      color: ${colors.colorRed};
      line-height: 1.2;
      font-family: 'LeagueSpartan-Bold';
      h1 {
        font-size: 2.4rem;
        margin-bottom: 0.4rem;
        font-weight: 300;
      }
      h3 {
        font-size: 1.8rem;
        font-weight: lighter;
      }
    }
    .txt {
      line-height: 1.6;
      p {
        font-size: 1.1em;
      }
    }
    .txt:nth-child(2) {
      margin-bottom: 2rem;
    }
  }

  .eighthSection {
    margin-bottom: -4px;
    .img-container {
      position: relative;
      img {
        width: 100%;
      }
      .text {
        position: absolute;
        top: 3%;
        left: 10%;
        .heading {
          font-size: 1.2em;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .txt {
          width: 75%;
        }
      }
    }
    .idea {
      color: ${colors.colorWhite};
      .text {
        left: 30%;
        top: 13%;
      }
    }
  }

  @media (max-width: 307px) {
    .indexSection {
      .startup {
        .heading {
          width: 90%;
          h1 {
            font-size: 1.5em;
            text-align: center;
          }
        }
        .txt {
          width: 90%;
          text-align: center;
        }
      }
    }

    .eighthSection {
      display: none;
    }
  }

  @media (min-width: 580px) {
    .indexSection {
      .videoContainer {
        height: 350px;
      }
    }
  }
  @media (min-width: 768px) {
    .indexSection {
      .videoContainer {
        height: 450px;
      }
      .startup {
        width: 50%;
        .heading {
          margin: 0 auto;
        }
        .txt {
          margin: 0 auto;
        }
        .heading {
          width: 80%;
          h1 {
            font-size: 3.5em;
          }
        }
        .txt {
          width: 80%;
          p {
            font-size: 1.6em;
          }
        }
      }
    }
    .secondSection {
      height: 300px;
      font-size: 1.5em;
      #cloud {
        min-width: 1300px;
      }
    }
    .thirdSection {
      width: 85%;
      position: static;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 50% 50%;
      padding-left: 0;
      grid-gap: 4rem;
      overflow-y: visible;
    }

    .fourthSection {
      display: grid;
      grid-template-columns: 50% 50%;
      height: 55.9rem;
      .img-container {
        height: 54.6rem;
      }

      .slide {
        height: 54.6rem;
      }
      & article {
        display: grid;
        grid-template-columns: 50% 50%;
        height: 54.6rem;
        overflow: hidden;
        position: relative;
        .img-box {
          margin-top: -1px;
          img {
            width: 100%;
          }
        }
        .img-box:nth-child(2),
        .img-box:nth-child(4) {
          margin-left: -1px;
        }
        .cover-two {
          right: 49.8% !important;
          width: 3px;
        }
      }
      .cover {
        position: absolute;
        width: 50%;
        height: 5px;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        display: none;
      }
      .cover-two {
        position: absolute;
        width: 3px;
        top: 0;
        height: 100%;
        right: 49.9%;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
    .fifthSection {
      padding: 8rem 0 0;
      z-index: 100;
      .header {
        width: 40%;
        h1 {
          font-size: 2.2em;
        }
        p {
          font-size: 1.2em;
        }
      }
      .card-section {
        width: 80%;
        position: static;
        margin: 0 auto;
        display: flex;
        grid-gap: 2rem;
        padding-left: 0;
        justify-content: center;
        padding-top: 5rem;
        margin-bottom: -60px;
        z-index: 100;
        .card {
          width: 50%;
          height: 22rem;
          z-index: 100;
        }
      }
    }
    .sixthSection {
      padding-bottom: 10rem;
      article {
        width: 75%;
        margin: 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .img-container {
          width: 40rem;
          margin-bottom: 0px;
        }
        .text {
          text-align: left;
          margin-bottom: 0;
          width: 50%;
          /* margin-right: 8rem; */
          p {
            font-size: 1.3em;
          }
          .head {
            h1 {
              font-size: 3.5rem;
            }
          }
        }
      }
    }
    .seventhSection {
      width: 55%;
      padding: 10rem 0;
      text-align: left;
      .heading {
        h1 {
          font-size: 2.5em;
          margin-bottom: 0;
        }
        h3 {
          font-size: 1.6em;
        }
      }
      .txt {
        p {
          font-size: 1.3em;
        }
      }
    }

    .eighthSection {
      .img-container {
        .text {
          top: 6%;
          left: 20%;
          .heading {
            font-size: 2.5em;
          }
          .txt {
            width: 70%;
            font-size: 1.4em;
          }
        }
      }
      .idea {
        color: ${colors.colorWhite};
        .text {
          left: 30%;
          top: 20%;
        }
      }
    }
  }
  @media (min-width: 1025px) {
    .indexSection {
      .videoContainer {
        height: 700px;
      }
    }
    .eighthSection {
      .img-container {
        .text {
          top: 20%;
          .txt {
            width: 60%;
          }
        }
      }
      .idea {
        .text {
          top: 25%;
        }
      }
    }
  }
`;
