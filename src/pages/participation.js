import React, { useState } from 'react';
import styled from 'styled-components';

import Toolbar from '../globals/toolbar/Toolbar';
import SideNav from '../globals/sideBar/SideNav';
import colors from '../config/colors';
import Form from '../components/Form';
import Footer from '../globals/footer/Footer';

export default function Participation(props) {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="upper-nav">
          <SideNav />
          <Toolbar props={props} />
        </div>
        <div className="lower-nav">
          <div className="headline">
            <p>limitless you</p>
            <div className="dotted-lines">
              <hr className="line-one" />
              <hr className="line-two" />
              <hr className="line-three" />
              <hr className="line-four" />
            </div>
            <h2>Do You Have What It Takes</h2>
          </div>
          <img src={require('../assets/img/hands.jpg')} />
        </div>
      </div>
      <div className="section-one">
        <p>
          Join the many aspiring entrepreneurs <br/>aged 23-45, and compete for a
          seedfund of $1.7 million. This is where ideas meet collaboration
          supported with mentorship.
        </p>
      </div>
      <div className="section-two">
        <div className="form-section">
          <div className="signup">
            <p>Sign Up for Free</p>
            <p>...and be the first to hear</p>
          </div>
          <img className="form-image" src={require('../assets/img/coming_soon.png')} />
          <Form />
        </div>
        <div className="side-text">
          <div className="upper-text">
            <h2>The Incubator Reality</h2>
            <p className="first-text">
              A social entrepreneurial platform where best brains will compete
              in partnership using their skills ideas and passion. Do you have
              what it takes to be part of The Incubator Reality? Do you see
              yourself as a game changer?
            </p>
            <p className="second-text">
              Why not join the biggest start-up disruption program. 12 weeks of
              reality show, full of{' '}
              <span className="examples">
                Entertainment, Diversity, Politics & Wits.
              </span>
            </p>
          </div>
          <div className="lower-text">
            <h1>Prerequisite to Being a Game Changer</h1>
            <ul>
              <li>Entrepreneurial skill with originality</li>
              <li>Confidence & assertive</li>
              <li>Determined & self-driven</li>
              <li>Positive influencing skills</li>
              <li>Critical thinking with ability to perform</li>
              <li>Excellent communication skills</li>
              <li>Good team player</li>
              <li>Sales & marketing skills</li>
              <li>From Ages 23-45</li>
            </ul>
            <p>
              Flights will be paid for successful & invited applicants from the
              UK, US and Canada.
            </p>
          </div>
          <div className="steps">
            <h1>Steps to Register</h1>
            <p>
              <span>
                <img src={require('../assets/img/notepad.jpg')} />
              </span>
              <span>
                Fill out the application form with valid details. Registration
                is FREE.
              </span>
            </p>
            <p>
              <span>
                <img src={require('../assets/img/messenger.jpg')} />
              </span>
              <span>
                Upload a short video containing a pitch of your idea, how it
                would disrupt startups and why you should be chosen as a game
                changer.
              </span>
            </p>
            <p>
              <span>
                <img src={require('../assets/img/video-icon.jpg')} />
              </span>
              <span>
                If you qualify for the next phase of the selection process, then
                you will be notified.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="section-three">
        <div className="text">
          <h2 className="header">
            Auditions <br />
            <span> Coming Soon in These Locations</span>
          </h2>
          <div className="list">
            <hr />
            <ul>
              <li>Lagos</li>
              <li>Ibadan</li>
              <li>Abuja</li>
            </ul>
            <ul>
              <li>New-York</li>
              <li>Canada</li>
              <li>London</li>
            </ul>
          </div>
        </div>
        <div className="img">
          <img src={require('../assets/img/strange-ground.jpg')} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #FAFAFA;
  .navbar {
    background: ${process.browser &&
    window.location.pathname === '/participation'
      ? 'transparent'
      : `${colors.colorBlue}`};
    height: 40em;
    font-weight: 2em;
  }
    .upper-nav {
      z-index: 100;
      position: relative;
      font-size: 1.3em;
    }
    .lower-nav {
      display: flex;
      flex-flow: row;
      .headline {
        width: 100%;
        position: relative;
        z-index: 50;
        margin-top: 1.5%;
        display: flex;
        flex-flow: column;
        padding-left: 0em;
        @media (max-width: 768px) {
          display:block;
          text-align:center;
          margin-top:5em;
        }
        p {
          font-size: 11em;
          font-weight: 400;
          font-family: 'chiller';
          color: #fbca02;
          margin-left: 1.2em;
          margin-bottom: 0em;
          padding-bottom: 0em;
          @media (max-width: 768px) {
            margin:0 auto;
            font-size:6em;
          }
        }
        h2 {
          font-size: 3em;
          margin-left: 3.5em;
          font-weight: 100;
          font-family: "OratorStd";
          color: ${colors.colorWhite};
          @media (max-width: 768px) {
            margin:0 auto;
            font-size:3em;
          }
        }
        .dotted-lines {
          display: flex;
          flex-flow: row;
          @media (max-width: 768px) {
            display:none;
          }
          .line-one {
            height: 0.2em;
            width: 50em;
            background: #fbca02;
            margin: 0em 2em 0em 0em;
          }
          .line-two {
            height: 0.2em;
            width: 10em;
            background: #fbca02;
            margin: 0em 2em 0em 2em;
          }
          .line-three {
            height: 0.2em;
            width: 5em;
            background: #fbca02;
            margin: 0em 2em 0em 2em;
          }
          .line-four {
            height: 0.2em;
            width: 3em;
            background: #fbca02;
            margin: 0em 2em 0em 2em;
          }
        }
      }
      img {
        position: absolute;
        z-index: 1;
        height: 40em;
        width: 100%;
        top: 0em;
      }
    }
  
  .section-one {
    display: flex;
    padding: 7% 16% 7% 15%;
    @media (max-width: 768px) {
      width:100%;
      display:block;
      margin:0 auto;
    }
    p {
      font-size: 4em;
      font-weight: 700;
      font-family: "Open sans";
      margin: 0em 2.1em 0em 1.5em;
      color: #BD9907;
      @media (max-width: 768px) {
      font-size:2.8em;
      width:100%;
      padding:0;
      margin:0 auto;
      text-align:center;
      }
      letter-spacing: -1.8px;
    }
  }
  .section-two {
    display: flex;
    flex-flow: row;
    margin: 2em 10em 10em 10em;
    color: #354054;
    @media (max-width: 768px) {
      display:block;
      width:100%;
    }
    .form-section {
      background: white;
      width: 39%;
      padding-top: 3em;
      padding-bottom: 3em;
      @media (max-width: 768px) {
        justify-content:center;
        align-items:center;

        width:100%;
      }
      .signup {
        margin-bottom: 2em;
        margin-left: 7em;
        @media (max-width: 768px) {
          width:100%;
        }
        p:not(:last-child) {
          font-size: 3em;
          margin-bottom: 0.35em;
          font-weight: 300;
          
        }
        p:last-child {
          font-size: 2em;
          font-weight: 700;
        }
      }
      .form-image{
        width: 40%;
        position: absolute;
        left: 40px;
        @media (max-width: 768px) {
          display:none;
        }
      }
    }
    .side-text {
      display: flex;
      flex-flow: column;
      width: 65%;
      margin: 0em 5em 0em 2em;
      @media (max-width: 768px) {
        display:block;
        width:100%;
        margin:0 auto;
      }
     
     
      .upper-text {
        font-size: 2em;
        margin: 0em 1em 0em 2.5em;
        
        h2 {
          font-size: 1.5em;
        }
        .second-text {
          margin-top: 1.8em;
          .examples {
            font-weight: bolder;
          }
        }
      }
      .lower-text {
        font-size: 2em;
        margin: 1.5em 1em 0em 2.5em;
        ul {
          list-style-type: initial;
          margin-left: 1.1em;
          margin-bottom: 1.2em;
          li {
            font-size: 1em;
          }
        }
        p {
          margin-top: 1em;
          font-size: 1em;
        }
      }
      .steps {
        border: 1px solid #354054;
        padding: 2.5em 2em 7em 2.5em;
        margin-top: 3em;
        h1 {
          font-size: 3em;
          margin: 0em 0em 1em 0.8em;
        }
        p {
          font-size: 1.5em;
          margin-top: 1em;
          display: flex;
          flex-direction: row;
          span {
            margin: 0em 1em;
          }
          span:not(:last-child) {
            position: relative;
            top: 0.2em;
          }
        }
      }
    }
  }
  .section-three {
    margin-bottom: 0.5em;
    .text {
      position: relative;
      z-index: 100;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      color: white;
      h2 {
        font-size: 4em;
        font-weight: 700;
        span {
          font-weight: 300;
        }
      }
      .list {
        width: 59em;
        hr {
          width: 49em;
          height: 0.3em;
          background: white;
          margin: 1.5em 0em 1.5em 0.5em;
        }
        ul {
          display: flex;
          flex-direction: row;
          list-style-type: none;
          li {
            margin: 0em 1em 0em 0.3em;
            font-size: 2.5em;
            font-weight: bolder;
          }
        }
      }
    }
    .img {
      img {
        position: absolute;
        z-index: 1;
        top: 195em;
        height: 35em;
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      display:none;
    }
  }
  .footer {
    font-size: 1.4em;
    z-index: -1;
  }
`;
