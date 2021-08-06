import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Hero from '../components/Hero';
import colors from '../config/colors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useRouter } from 'next/router';

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

  const router = useRouter();

    const handleClick = (href) => {
    router.push(href);
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
            <div className="bannerSection">
              <div className="caption">
                <span className="caption-text">
                    WATCH OUT FOR AUDITIONS AT THE FOLLOWING LOCATIONS &nbsp;&nbsp; Lagos 
                    &nbsp;• &nbsp;Ibadan &nbsp;• &nbsp;Abuja&nbsp; • &nbsp;
                    London &nbsp;• &nbsp;New-York&nbsp; •&nbsp; Toronto &nbsp; &nbsp;
                    THE INCUBATOR REALITY, &nbsp;THE RIGHT HATCHING AVENUE.
                </span>
              </div>
              <div className="caption caption-two">
                <span className="caption-text">
                    WATCH OUT FOR AUDITIONS AT THE FOLLOWING LOCATIONS &nbsp;&nbsp; Lagos 
                    &nbsp;• &nbsp;Ibadan &nbsp;• &nbsp;Abuja&nbsp; • &nbsp;
                    London &nbsp;• &nbsp;New-York&nbsp; •&nbsp; Toronto &nbsp; &nbsp;
                    THE INCUBATOR REALITY, &nbsp;THE RIGHT HATCHING AVENUE.
                </span>
              </div>
            </div>
          <video className="videoCoverOne" controls loop fullscreen>
            <source src={require('../assets/videos/vidOne.mp4')} type="video/mp4" />
          </video>
          <div className="startup">
            <div className="heading">
              <h1>Disrupting Startup</h1>
            </div>
            <div className="txt">
              <p>
                The biggest hatching program for the Game Changers. Don't limit
                your ability to lead, Come where your thought-of innovation can
                become reality.
              </p>
            </div>
            <div className="txt">
              <p>
                A social entrepreneurial platform where best brains will compete
                in partnership using their ideas, skills and passion.
              </p>
            </div>
          </div>
        </section>
        <section className="secondSection">
          <img className="web" src={require('../assets/img/web.png')} />
          <div className="dream">
            <YourDream />
          </div>
          <div className="secondContainer">
            <div id="cloud">
              <h2> The Incubator Reality is.... </h2>
              <p>
                Partnering to power the next generations of entrepreneur....
              </p>
            </div>
          </div>
        </section>

        <section className="thirdSection">
          <About />
          <video className="videoCoverTwo" controls loop fullscreen>
            <source src={require('../assets/videos/vidTwo.mp4')} type="video/mp4" />
          </video>
        </section>

        <section className="fourthSection">
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

        <section className="fifthSection">
          <article>
            <div className="text">
              <div className="head">
                <h1>The Incubator Reality</h1>
              </div>
              <div className="txt">
                <p>
                  Focused on revolutionizing the erstwhile challenges <br />
                  of start-ups...
                </p>
              </div>
              <div className="txt">
                <p>
                  ...While creating a catalyst for empowerment of youth
                  <br /> and women to foster economic growth and development.
                </p>
                <a onClick={() => handleClick('/participation')}>Join the Game Changers</a>
              </div>
            </div>

            <div className="img-container">
              <img src={roll} alt="incubator reality" />
            </div>
          </article>
        </section>

        <section className="sixthSection">
          <div className="heading">
            <h1>Why be a part of The Incubator Reality?</h1>
            <p>Because everyone is a winner</p>
          </div>
          <div className="txt">
            <p>
              The uniqueness of the Incubator gives all contestants the
              opportunity to be <br />
              winners. Contestants will have gained tremendous value and
              entrepreneurial <br /> experience. Additionally, cash prices are
              awarded to individual and teams that <br /> excel during sponsored
              task activities.
            </p>
          </div>
          <div className="txt">
            <p>
              Furthermore, a contestant might even have a job contract or
              consultancy <br /> project awaiting them at the end of the program
              from viewer or companies who <br /> admire or need their skills
              and competence.
            </p>
          </div>
        </section>

        <section className="seventhSection">
          <Slider {...settings}>
            <div className="img-container">
              <div className="text">
                <div className="heading-one">
                  <p>We navigate you to survive </p>
                  <p>In this fierce terrain</p>
                </div>
                <div className="txt-one">
                  <p>
                    The business terrain in Nigeria constitute lesser
                    opportunities for start-ups, however the brave is rewarded
                    in this fierce competition for the best to rise to the top.{' '}
                  </p>
                </div>
              </div>
              <img src={bg} alt="bg pmg" />
            </div>
            <div className="img-container idea">
              <div className="text">
                <div className="heading-two">
                  <p>Idea Conception</p>
                  <p>Births Innovative Transformation</p>
                </div>
                <div className="txt-two">
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
  background-color: ${colors.colorWhite};
  main {
    background-image: linear-gradient(to center, #fff, #fafafa);
    .indexSection {
      display: flex;
      flex-flow: column;
      padding: 0em;
      .bannerSection {
        height: 3em;
        margin-bottom: 6em;
        background-color: ${colors.colorYellow};
        color: ${colors.colorWhite};
        display: flex;
        font-family: "Open sans";
        align-items: center;
        font-size: 1.4em;
        font-weight: 700;
        .caption {
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;
          position: absolute;
          width: 100%;
          span {
              display: inline-block;
              padding-left: 100%;
              animation: marquee 20s linear infinite;
          }
        }
        .caption-two {
          span {
            animation-delay: 10s;
          }
        }
        @keyframes marquee {
          0% {
              transform: translate(0, 0);
          }
          100% {
              transform: translate(-150%, 0);
          }
        }
      }
      .videoCoverOne {
        padding: 0%;
        background: #f0f0f0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0em 20em 0em 20em;
      }
      .startup {
        top: 0px;
        background-color: white;
        color: ${colors.colorBlue};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0em 0em 1.2em 0em;
        margin: 0em 20em 0em 20em;
        width: 78%;
        .heading {
          h1 {
            font-size: 2.6em;
            font-weight: 400;
            margin-bottom: 0.2em;
            margin-top: 1.5em;
          }
        }
        .txt:not(:last-child) {
          margin-bottom: 1.2rem;
          font-weight: 500;
          font-size: 1.4em;
          width: 32em;
        }
        .txt:last-child {
          margin: 0;
          font-weight: 500;
          width: 45em;
          p {
            font-size: 1.4em;
          }
        }
      }
    }
    .secondSection {
      font-size: 1.2em;
      margin-top: 9%;

      .web {
        z-index: 1;
        position: absolute;
        margin-left: 69.5%;
        width: 30%;
        height: 72%;
        top: 86em;
      }

      .dream {
        z-index: 1;
        position: absolute;
        margin-left: 9%;
        width: 32%;
        top: 89em;
      }

      .secondContainer {
        height: 400px;
        background-color: ${colors.colorYellow};
        color: ${colors.colorWhite};
        font-size: 1.2em;
        font-weight: bold;
        z-index: -1;
        display: flex;
        flex-flow: column;
        justify-content: center;

        #cloud {
          z-index: 1;
          width: 40%;
          margin: 2% 0% 0% 53%;
          position: relative;
          color: ${colors.colorMidnightBlue};
          h2 {
            font-size: 1.8em;
            font-weight: 600;
          }
          p {
            font-weight: lighter;
            font-size: 1.2em;
            margin-top: 0em;
          }
        }
      }
    }

    .thirdSection {
      width: 100%;
      position: relative;
      top: 7em;
      display: flex;
      flex-flow: row;
      background: ${colors.colorWhite};
      touch-action: manipulation;
      padding-left: 4em;
      padding-top: 10rem;
      padding-bottom: 5rem;
      &::-webkit-scrollbar {
        width: 0;
      }
      p {
        font-size: 1.2em;
        color: ${colors.colorMidnightBlue};
      }
      .videoCoverTwo {
        margin: 3em 6em 0em 0em;
        width: 40em;
        height: 22.5em;
        background: #f0f0f0;
      }
    }

    .fourthSection {
      padding: 5rem;
      padding-bottom: 0;
      padding-top: 0;
      margin-top: 10em;
      display: flex;
      background-color: ${colors.colorWhite};

      justify-content: center;

      .card-section {
        position: relative;
        display: flex;
        flex-flow: row;
        scroll-padding: 2.4rem;
        grid-auto-columns: 80%;
        justify-content: flex-start;
        bottom: -60px;
        z-index: 100;
        width: 80%;
        .card {
          background-color: ${colors.colorWhite};
          border: 16px solid ${colors.colorGreyLighter};
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 35em;
          padding: 2em 2em 2em 2em;
          margin: 0em 0.5em;
          text-align: center;
          color: ${colors.colorBlue};
          height: 15em;
          .img-container {
            margin-bottom: 1.2rem;
          }
          .title {
            margin-bottom: 0.6rem;
          }
        }
      }
    }

    .fifthSection {
      padding: 10rem 0 0;
      background-color: ${colors.colorYellow};
      article {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: justify;
        justify-content: center;
        .img-container {
          width: 40%;
          position: relative;
          z-index: 100;
          padding: 2em 0em 2em 4em;
          img {
            width: 70%;
          }
        }
        .text {
          width: 60%;
          padding: 0em 2em 0em 15em;
          p {
            font-size: 1.4em;
          }
          .head {
            h1 {
              font-size: 3em;
              font-weight: 300;
              margin-bottom: 0.7rem;
            }
          }
          .txt:nth-child(2) {
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .txt:last-child {
            display: flex;
            flex-direction: column;
            a {
              color: ${colors.colorWhite};
              padding: 1em 1.5em;
              margin-top: 2.5em;
              font-size: 1.2em;
              font-weight: bold;
              border-radius: 0.5em;
              background: ${colors.colorBlue};
              width: 20em;
              text-align: center;
              &:hover {
                background: midnightblue;
                font-size: 1.206em;
                color: whitesmoke;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .sixthSection {
      display: flex;
      flex-flow: column;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
      padding: 6em 10em 6em 10em;
      .heading {
        margin-bottom: 2rem;
        color: ${colors.colorRed};
        line-height: 1.2;
        h1 {
          font-size: 2.5em;
          margin-bottom: 0.4rem;
          font-weight: 300;
          font-family: 'LeagueSpartan-Bold';
        }
        p {
          font-size: 2em;
          font-weight: 500;
        }
      }
      .txt {
        line-height: 1.6;
        font-weight: 500;
        p {
          font-size: 1.2em;
        }
      }
      .txt:nth-child(2) {
        margin-bottom: 2rem;
        font-weight: 500;
      }
    }

    .seventhSection {
      margin-bottom: -4px;
      .img-container {
        position: relative;
        img {
          width: 100%;
        }
        .text {
          position: absolute;
          top: 30%;
          left: 20%;
          .heading-one {
            font-size: 2.6em;
            font-weight: bolder;
            margin-bottom: 1rem;
          }
          .txt-one {
            width: 65%;
            font-size: 1.6em;
          }
        }
      }
      .idea {
        color: ${colors.colorWhite};
        .text {
          font-size: 1.3em;
          left: 30%;
          top: 32%;
          .heading-two {
            font-size: 2em;
            font-weight: bolder;
            margin-bottom: 1rem;
          }
          .txt-two {
            width: 65%;
            font-size: 1.3em;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 690px) {

    .indexSection {
      width: 100%;
      padding: 0em !important;
      border: 2px solid red;
      .bannerSection {
        margin-bottom: 2em !important;
      }
      .videoCoverOne {
        padding: 0%;
        width: 95%;
        background: #f0f0f0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 0em 1em !important;
        border: 2px solid red;
      }
      .startup {
        border: 2px solid red;
        display: flex;
        flex-direction: column;
        padding: 0em 0em 1.2em 0em;
        margin: 0em auto !important;
        width: 95% !important;
        .heading {
          h1 {
            font-size: 1.6em;
            font-weight: 400;
            border: 2px solid green;
            margin-bottom: 0.2em;
            margin-top: 1.5em;
          }
        }
        .txt:not(:last-child) {
          margin-bottom: 1.2rem;
          font-weight: 500;
          border: 2px solid green;
          font-size: 1.4em;
        }
        .txt:last-child {
          margin: 0;
          font-weight: 500;
          border: 2px solid green;
          p {
            font-size: 1.4em;
            width: 100% !important;
          }
        }
      }
    }

    .seventhSection {
      display: none;
    }
  }

  @media screen and (min-width: 690px) and (max-width: 900px) {
    main {    
      .indexSection {
        .videoCoverOne {
          margin: 0em 5em 0em 5em;
        }
        .startup {
          padding: 0em;
          margin: 0em 5em 0em 5em;
          width: 78%;
          .heading {
            h1 {
              font-size: 2.6em;
              font-weight: 400;
              margin-bottom: 0.2em;
              margin-top: 1.5em;
            }
          }
          .txt:not(:last-child) {
            margin-bottom: 1.2rem;
            font-weight: 500;
            font-size: 1.4em;
            width: 30em;
          }
          .txt:last-child {
            margin: 0;
            font-weight: 500;
            width: 40em;
            p {
              font-size: 1.4em;
            }
          }
        }
      }
      .secondSection {
        .web {
          margin-left: 60%;
          width: 40%;
          height: 40%;
          top: 65em;
        }

        .dream {
          margin-left: 5%;
          width: 50%;
          top: 70em;
        }
      .secondContainer {

        #cloud {
          width: 45%;
          margin: 2% 0% 0% 57%;
          h2 {
            font-size: 1.3em;
            font-weight: 500;
          }
          p {
            font-size: 1em;
          }
        }
      }
    }
      
    .thirdSection {
      padding-left: 2em;
      padding-top: 7rem;
      padding-bottom: 5rem;
      p {
        font-size: 1.1em;
      }
      .videoCoverTwo {
        margin: 3em 0em 0em 0em;
        width: 26em;
        height: 14.5em;
      }
    }
      .fourthSection {
        padding: 5rem;
        padding-bottom: 0;
        padding-top: 0;
        margin-top: 3em;
        display: flex;
        background-color: ${colors.colorWhite};
        justify-content: center;

        .card-section {
          width: 110%;
          .card {
            padding: 2em 0em;
            margin: 0em 0.5em;
            font-size: 1em;
            height: 15em;
          }
        }
      }
      .fifthSection {
        padding: 8rem 0 0;
        article {
        text-align: initial;
          .img-container {
            padding: 2em 0em 2em 2em;
            img {
              width: 65%;
            }
          }
          .text {
            width: 65%;
            padding: 0em 1em 0em 5em;
            p {
              font-size: 1.1em;
            }
            .head {
              h1 {
                font-size: 1.8em;
                margin-bottom: 0.7rem;
              }
            }
            .txt:last-child {
              a {
                margin-top: 1em;
                font-size: 0.8em;
                &:hover {
                  font-size: 0.806em;
                }
              }
            }
          }
        }
      }
      .sixthSection {
        width: 95%;
        padding: 4em 4em 4em 5em;
        .heading {
          margin-bottom: 2rem;
          h1 {
            font-size: 2em;
            margin-bottom: 0.4rem;
          }
          p {
            font-size: 1.8em;
          }
        }
        .txt {
          line-height: 1.5;
          p {
            font-size: 1em;
            letter-spacing: -0.02em;
          }
        }
        .txt:nth-child(2) {
          margin-bottom: 2rem;
        }
      }
      .seventhSection {
        .img-container {
          .text {
            top: 23%;
            .heading-one {
              font-size: 2em;
            }
            .txt-one {
              width: 65%;
              font-size: 1.2em;
            }
          }
        }
        .idea {
          .text {
            font-size: 1.2em;
            .heading-two {
              font-size: 1.6em;
            }
            .txt-two {
              font-size: 1.3em;
            }
          }
        }
      }
    }
  }  
  @media (min-width: 900px) and (max-width: 1100px) {
    main {    
      .indexSection {
        .videoCoverOne {
          margin: 0em 15em 0em 15em;
        }
        .startup {
          padding: 0em 0em 1.2em 0em;
          margin: 0em 15em 0em 15em;
          width: 78%;
          .heading {
            h1 {
              font-size: 2.6em;
              font-weight: 400;
              margin-bottom: 0.2em;
              margin-top: 1.5em;
            }
          }
          .txt:not(:last-child) {
            margin-bottom: 1.2rem;
            font-weight: 500;
            font-size: 1.4em;
            width: 30em;
          }
          .txt:last-child {
            margin: 0;
            font-weight: 500;
            width: 40em;
            p {
              font-size: 1.4em;
            }
          }
        }
      }
      .secondSection {
        .web {
          margin-left: 67%;
          width: 31%;
          height: 65%;
          top: 75em;
        }

        .dream {
          margin-left: 7%;
          width: 40%;
          top: 79em;
        }
      .secondContainer {

        #cloud {
          h2 {
            font-size: 1.4em;
            font-weight: 600;
          }
          p {
            font-size: 1.1em;
          }
        }
      }
      }
      
    .thirdSection {
      padding-left: 2em;
      padding-top: 10rem;
      padding-bottom: 5rem;
      p {
        font-size: 1.1em;
      }
      .videoCoverTwo {
        margin: 3em 1em 0em 0em;
        width: 32em;
        height: 18em;
      }
    }
      .fourthSection {
        padding: 5rem;
        padding-bottom: 0;
        padding-top: 0;
        margin-top: 10em;
        display: flex;
        background-color: ${colors.colorWhite};
        justify-content: center;

        .card-section {
          width: 100%;
          .card {
            padding: 2em 1em 2em 1em;
            margin: 0em 0.5em;
            font-size: 1em;
            height: 15em;
            width: 35em;
            .img-container {
              margin-bottom: 1.2rem;
            }
            .title {
              margin-bottom: 0.6rem;
            }
          }
        }
      }
      .fifthSection {
        padding: 10rem 0 0;
        article {
          .img-container {
            padding: 2em 0em 2em 2em;
            img {
              width: 65%;
            }
          }
          .text {
            width: 65%;
            padding: 0em 1em 0em 10em;
            p {
              font-size: 1.2em;
            }
            .head {
              h1 {
                font-size: 2em;
                margin-bottom: 0.7rem;
              }
            }
            .txt:last-child {
              a {
                margin-top: 1em;
                font-size: 1em;
                &:hover {
                  font-size: 1.06em;
                }
              }
            }
          }
        }
      }
      .sixthSection {
        width: 85%;
        padding: 4em 8em 4em 10em;
        .heading {
          margin-bottom: 2rem;
          h1 {
            font-size: 2em;
            margin-bottom: 0.4rem;
          }
          p {
            font-size: 1.8em;
          }
        }
        .txt {
          line-height: 1.5;
          p {
            font-size: 1.1em;
          }
        }
        .txt:nth-child(2) {
          margin-bottom: 2rem;
        }
      }
      .seventhSection {
        .img-container {
          .text {
            .heading-one {
              font-size: 2em;
            }
            .txt-one {
              width: 65%;
              font-size: 1.3em;
            }
          }
        }
        .idea {
          .text {
            font-size: 1.2em;
            .heading-two {
              font-size: 1.7em;
            }
            .txt-two {
              font-size: 1.3em;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1100px) and (max-width: 1210px) {
    
    main {
      .secondSection {
        .web {
          margin-left: 68%;
          width: 32%;
          height: 65%;
          top: 80em;
        }

        .dream {
          margin-left: 7%;
          width: 37%;
          top: 84em;
        }
      }
      .fifthSection {
        padding: 10rem 0 0;
        article {
          text-align: initial;
          justify-content: center;
          .img-container {
            padding: 2em 0em 2em 4em;
            img {
              width: 70%;
            }
          }
          .text {
            width: 60%;
            padding: 0em 2em 0em 10em;
            p {
              font-size: 1.4em;
            }
            .head {
              h1 {
                font-size: 3em;
                font-weight: 300;
                margin-bottom: 0.7rem;
              }
            }
            .txt:nth-child(2) {
              margin-bottom: 1rem;
            }
            .txt:last-child {
              a {
                margin-top: 1em;
                font-size: 1.2em;
                &:hover {
                  font-size: 1.26em;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1210px) and (max-width: 1300px) {
    
    main {
      .secondSection {
        .web {
          margin-left: 68%;
          width: 32%;
          height: 65%;
          top: 80em;
        }

        .dream {
          margin-left: 7%;
          width: 32%;
          top: 89em;
        }

        .secondContainer {

          #cloud {
            width: 28%;
            margin-left: 57%;
            h2 {
              font-size: 1em;
              font-weight: bolder;
            }
            p {
              font-weight: lighter;
              font-size: 1.2em;
              margin-top: 0.5em;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1500px){
    main {
      .secondSection {
        .dream {
          top: 99em;
          width: 27%;
        }
        .web {
          margin-left: 69.5%;
          width: 30%;
          height: 72%;
          top: 90em;
        }
      .secondContainer {
        font-size: 1.3em;

        #cloud {
          margin: 2% 0% 0% 55%;
          h2 {
            font-size: 1.9em;
          }
          p {
            font-size: 1.3em;
          }
        }
      }
    }
      .thirdSection {
        padding-left: 7em;
        padding-top: 9rem;
        padding-bottom: 5rem;
        p {
          font-size: 1.4em;
        }
        .videoCoverTwo {
          margin: 3em 4em 0em 0em;
          width: 42em;
          height: 24em;
        }
      }
      .sixthSection {
        .heading {
          margin-bottom: 2rem;
          line-height: 1.4;
          h1 {
            font-size: 2.7em;
            font-weight: 200;
          }
          p {
            font-size: 2.2em;
          }
        }
        .txt {
          line-height: 1.7;
          p {
            font-size: 1.4em;
          }
        }
      }
      .seventhSection {
        .img-container {
          .text {
            .heading-one {
              font-size: 2.8em;
            }
            .txt-one {
              width: 65%;
              font-size: 1.7em;
            }
          }
        }
        .idea {
          .text {
            font-size: 1.4em;
            .heading-two {
              font-size: 2.1em;
            }
            .txt-two {
              font-size: 1.4em;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1700px){
    main {
      .secondSection {
        .dream {
          top: 111em;
          width: 25%;
        }
        .web {
          margin-left: 69.5%;
          width: 30%;
          height: 72%;
          top: 95em;
        }
        .secondContainer {
          font-size: 1.5em;

          #cloud {
            margin: 2% 0% 0% 55%;
            h2 {
              font-size: 2em;
            }
            p {
              font-size: 1.5em;
            }
          }
        }
      }
      .thirdSection {
        padding-left: 8em;
        padding-top: 9rem;
        padding-bottom: 5rem;
        p {
          font-size: 1.75em;
        }
        .videoCoverTwo {
          margin: 3em 6em 0em 0em;
          width: 45em;
          height: 26em;
        }
      }
      .fourthSection {
        padding: 5rem;
        margin-top: 10em;

        .card-section {
          .card {
            padding: 2em 1em 2em 1em;
            margin: 0em 0.5em;
            font-size: 1.6em;
            text-align: center;
            height: 15em;
            .img-container {
              margin-bottom: 1.2rem;
            }
            .title {
              margin-bottom: 0.6rem;
            }
          }
        }
      }
      .fifthSection {
        padding: 10rem 0 0;
        article {
          .img-container {
            padding: 2em 0em 2em 4em;
            img {
              width: 70%;
            }
          }
          .text {
            width: 60%;
            padding: 0em 2em 0em 18em;
            p {
              font-size: 2.2em;
            }
            .head {
              h1 {
                font-size: 4em;
                margin-bottom: 0.8rem;
              }
            }
            .txt:nth-child(2) {
              margin-bottom: 1rem;
            }
            .txt:last-child {
              a {
                margin-top: 2.5em;
                font-size: 1.5em;
                &:hover {
                  font-size: 1.506em;
                }
              }
            }
          }
        }
      }
      .sixthSection {
        padding: 7em 0em 7em 15em;
        .heading {
          margin-bottom: 2rem;
          line-height: 1.6;
          h1 {
            font-size: 3em;
            font-weight: 200;
          }
          p {
            font-size: 2.5em;
          }
        }
        .txt {
          line-height: 1.8;
          p {
            font-size: 1.8em;
          }
        }
      }
      .seventhSection {
        .img-container {
          .text {
            .heading-one {
              font-size: 2.85em;
            }
            .txt-one {
              width: 65%;
              font-size: 1.85em;
            }
          }
        }
        .idea {
          .text {
            font-size: 1.6em;
            .heading-two {
              font-size: 2.2em;
            }
            .txt-two {
              font-size: 1.5em;
            }
          }
        }
      }
    }
  }
`;
