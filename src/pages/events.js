import React, { useState } from 'react';
import styled from 'styled-components';

import Toolbar from '../globals/toolbar/Toolbar';
import SideNav from '../globals/sideBar/SideNav';
import colors from '../config/colors';
import Footer from '../globals/footer/Footer';
import { styled as MUIstyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import socialicons from '../contants/socialicons';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  specialBorder: {
    borderRight: '2px solid black',
    borderbottom: '2px solid black',
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentSpacing: {
    margin: '2em 2.5em 0em 2.5em',
  },
  firstHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dividerSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '7em',
  },
  lowerSocial: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '7em',
    paddingRight: '2em',
  },
  shareImage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '2.2em',
  },
  shareArrow: {
    width: '45%',
    height: '50%',
    margin: '3em 0.5em 0.5em 3em',
  },
  deadline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5em 2.5em 0em 0em',
  },
  socialMedia: {
    display: 'flex',
    flexDirection: 'row',
  },
  socialImage: {
    padding: 0,
    margin: '0em 0.5em',
  },
  imageLogo: {
    width: "100%",
    height: 30,
    paddingTop: 20,
  },
}));

export default function Events(props) {
  const classes = useStyles();
  return (
    <Wrapper>
      <div className="navbar">
        <div className="upper-nav">
          <SideNav />
          <Toolbar props={props} />
        </div>
      </div>
      <div className="main">
        <div className="image-events">
          <img className="meet" src={require('../assets/img/events-banner.png')} />
          <div className="blue-line"></div>
        </div>
        <div className="card-section">
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            IconComponent={() => (
              <ArrowDropDownIcon 
                sx={{
                  fontSize: "1.8em",
                  marginRight: 0.5,
                  fontWeight: "700",
                  cursor: "pointer",
                  pointerEvents: "all",
                }}
              />
              )}
            value={10}
            sx={{
                width: 200,
                height: "3em",
                fontSize: "1.5em",
                fontWeight: 700,
                margin: "2em 0em 0.3em 0em",
                '&:before': {
                    border: "1.5px solid black",
                },
                '&:after': {
                    border: "1.5px solid black",
                }
              }}
          >
            <MenuItem sx= {{fontSize: "1.4em"}} value={10}>Upcoming Events</MenuItem>
            <MenuItem sx= {{fontSize: "1.4em"}} value={20}>Past Events</MenuItem>
            <MenuItem sx= {{fontSize: "1.4em"}} value={30}>Trending Events</MenuItem>
          </Select>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '105em',
            }}
            container
          >
            <Grid
              item
              sx={{
                margin: '0em',
              }}
            >
              <Paper
                variant="outlined"
                sx={{
                  width: 500,
                  marginTop: '0.5em',
                  marginBottom: '1.5em',
                  color: 'midnightblue',
                }}
                elevation={20}
              >
                <div className={`${classes.content}`}>
                  <div
                    className={`${classes.contentSpacing} ${classes.firstHeader}`}
                  >
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.6em",
                       }}
                      gutterBottom
                    >
                      Coming Soon....
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.6em",
                       }}
                      gutterBottom
                    >
                      Upcoming Event
                    </Typography>
                  </div>
                  <div className={`${classes.contentSpacing}`}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: '2.4em',
                        fontWeight: 750,
                      }}
                    >
                    Entrepreneurial Mentorship for Students in Tech (EMSiT)
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: "Open sans",
                        fontSize: '1.5em',
                        letterSpacing: "-0.4px",
                       }}
                       variant="h5">
                      Mentorship program targeted at students in tech to encourage 
                      start-up growth and youth development for business ownership
                      and job creation.
                    </Typography>
                  </div>
                  <div
                    className={`${classes.buttonArea} ${classes.contentSpacing}`}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "7em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                    >
                      Business
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "11em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                      variant="contained"
                    >
                      Entrepreneurship
                    </Button>
                  </div>
                  <Divider />
                  <div className={`${classes.dividerSection}`}>
                    <div className={`${classes.shareImage}`}>
                      <img
                        className={`${classes.shareArrow}`}
                        src={require('../assets/img/share.png')}
                      />
                      <Typography
                        sx={{
                          margin: '1.4em 0em 0em 0.2em',
                          fontWeight: 700,
                          cursor: "pointer",
                          fontSize: "1.8em",
                        }}
                        variant="h4"
                      >
                        Share
                      </Typography>
                    </div>
                    <div className={`${classes.deadline}`}>
                      <Button
                        sx={{
                          textTransform: 'none',
                          padding: '0.2em 1.5em 0.2em 1.7em',
                          fontWeight: 'bolder',
                          fontSize: '1.6em',
                          backgroundColor: 'blue',
                          '&:hover': {
                            backgroundColor: 'darkblue',
                          },
                        }}
                        variant="contained"
                        disabled
                      >
                      Register
                      </Button>
                    </div>
                  </div>
                </div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  width: 500,
                  marginTop: '0.5em',
                  marginBottom: '1.5em',
                  color: 'midnightblue',
                }}
                square
              >
                <div className={`${classes.content}`}>
                     <div
                    className={`${classes.contentSpacing} ${classes.firstHeader}`}
                  >
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.8em",
                       }}
                      gutterBottom
                    >
                      Febuary 12, 2021
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.8em",
                       }}
                      gutterBottom
                    >
                      Past Event
                    </Typography>
                  </div>
                  <div className={`${classes.contentSpacing}`}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: '2.4em',
                        fontWeight: 750,
                      }}
                    >
                      Entrepreneurs' Meet: Discussing Prospects & Challenges of Entrepreneurship
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: "Open sans",
                        fontSize: '1.5em',
                        letterSpacing: "-0.4px",
                       }}
                       variant="h5">
                      A Virtual Open Forum encouraging entrepreneurs on how best
                       to navigate the hurdles of entrepreneurship.
                    </Typography>
                  </div>
                  <div
                    className={`${classes.buttonArea} ${classes.contentSpacing}`}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "7em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                    >
                      Business
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "11em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                      variant="contained"
                    >
                      Entrepreneurship
                    </Button>
                  </div>
                  <Divider />
                  <div className={`${classes.lowerSocial}`}>
                    <ul className={`${classes.socialMedia}`}>
                      {socialicons.map((social, i) => (
                        <li key={i} className={`${classes.socialImage}`}>
                          <a href={social.link}>
                            <img
                              src={social.icon}
                              className={`${classes.socialIcons}`}
                              alt="social media icons png"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  width: 500,
                  marginTop: '0.5em',
                  marginBottom: '1.5em',
                  color: 'midnightblue',
                }}
                elevation={20}
              >
                <div className={`${classes.content}`}>
                  <div
                    className={`${classes.contentSpacing} ${classes.firstHeader}`}
                  >
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.6em",
                       }}
                      gutterBottom
                    >
                      Coming Soon....
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.6em",
                       }}
                      gutterBottom
                    >
                      Upcoming Event
                    </Typography>
                  </div>
                  <div className={`${classes.contentSpacing}`}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: '2.4em',
                        fontWeight: 750,
                      }}
                    >
                      Business Plan Competition
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: "Open sans",
                        fontSize: '1.5em',
                        letterSpacing: "-0.4px",
                       }}
                       variant="h5">
                      Designed for youth and women in tech with innovative ideas 
                      that are original and tech-driven for accelerated growth and 
                      economic development.
                    </Typography>
                  </div>
                  <div
                    className={`${classes.buttonArea} ${classes.contentSpacing}`}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "7em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                    >
                      Business
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "11em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                      variant="contained"
                    >
                      Entrepreneurship
                    </Button>
                  </div>
                  <Divider />
                  <div className={`${classes.dividerSection}`}>
                    <div className={`${classes.shareImage}`}>
                      <img
                        className={`${classes.shareArrow}`}
                        src={require('../assets/img/share.png')}
                      />
                      <Typography
                        sx={{
                          margin: '1.4em 0em 0em 0.2em',
                          fontWeight: 700,
                          cursor: "pointer",
                          fontSize: "1.8em",
                        }}
                        variant="h4"
                      >
                        Share
                      </Typography>
                    </div>
                    <div className={`${classes.deadline}`}>
                      <Button
                        sx={{
                          textTransform: 'none',
                          padding: '0.2em 1.5em 0.2em 1.7em',
                          fontWeight: 'bolder',
                          fontSize: '1.6em',
                          backgroundColor: 'blue',
                          '&:hover': {
                            backgroundColor: 'darkblue',
                          },
                        }}
                        variant="contained"
                        disabled
                      >
                      Register
                      </Button>
                    </div>
                  </div>
                </div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  width: 500,
                  marginTop: '0.5em',
                  marginBottom: '1.5em',
                  color: 'midnightblue',
                }}
                square
              >
                <div className={`${classes.content}`}>
                     <div
                    className={`${classes.contentSpacing} ${classes.firstHeader}`}
                  >
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.8em",
                       }}
                      gutterBottom
                    >
                      July 12, 2021
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.8em",
                       }}
                      gutterBottom
                    >
                      Past Event
                    </Typography>
                  </div>
                  <div className={`${classes.contentSpacing}`}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: '2.4em',
                        fontWeight: 750,
                      }}
                    >
                      Female Entrepreneurs' Meet
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: "Open sans",
                        fontSize: '1.5em',
                        letterSpacing: "-0.4px",
                       }}
                       variant="h5">
                      A Virtual Open Forum where Mentors inspire aspiring entrepreneurs 
                      and share insight on opportunities & how to navigate challenges 
                      encountered as entrepreneurs.
                    </Typography>
                  </div>
                  <div
                    className={`${classes.buttonArea} ${classes.contentSpacing}`}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "7em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                    >
                      Business
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "11em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                      variant="contained"
                    >
                      Entrepreneurship
                    </Button>
                  </div>
                  <Divider />
                  <div className={`${classes.lowerSocial}`}>
                    <ul className={`${classes.socialMedia}`}>
                      {socialicons.map((social, i) => (
                        <li key={i} className={`${classes.socialImage}`}>
                          <a href={social.link}>
                            <img
                              src={social.icon}
                              className={`${classes.socialIcons}`}
                              alt="social media icons png"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  width: 500,
                  marginTop: '0.5em',
                  marginBottom: '1.5em',
                  color: 'midnightblue',
                }}
                elevation={20}
              >
                <div className={`${classes.content}`}>
                  <div
                    className={`${classes.contentSpacing} ${classes.firstHeader}`}
                  >
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.6em",
                       }}
                      gutterBottom
                    >
                      Coming Soon....
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.6em",
                       }}
                      gutterBottom
                    >
                      Upcoming Event
                    </Typography>
                  </div>
                  <div className={`${classes.contentSpacing}`}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: '2.4em',
                        fontWeight: 750,
                      }}
                    >
                      Business Plan Masterclass
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: "Open sans",
                        fontSize: '1.5em',
                        letterSpacing: "-0.4px",
                       }}
                       variant="h5">
                      Learn how to prepare a Business Plan for your commercially 
                      viable business idea that secures investors' interest 
                      and investment and closes the gap between dream & actualization.
                    </Typography>
                  </div>
                  <div
                    className={`${classes.buttonArea} ${classes.contentSpacing}`}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "7em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                    >
                      Business
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "11em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                      variant="contained"
                    >
                      Entrepreneurship
                    </Button>
                  </div>
                  <Divider />
                  <div className={`${classes.dividerSection}`}>
                    <div className={`${classes.shareImage}`}>
                      <img
                        className={`${classes.shareArrow}`}
                        src={require('../assets/img/share.png')}
                      />
                      <Typography
                        sx={{
                          margin: '1.4em 0em 0em 0.2em',
                          fontWeight: 700,
                          cursor: "pointer",
                          fontSize: "1.8em",
                        }}
                        variant="h4"
                      >
                        Share
                      </Typography>
                    </div>
                    <div className={`${classes.deadline}`}>
                      <Button
                        sx={{
                          textTransform: 'none',
                          padding: '0.2em 1.5em 0.2em 1.7em',
                          fontWeight: 'bolder',
                          fontSize: '1.6em',
                          backgroundColor: 'blue',
                          '&:hover': {
                            backgroundColor: 'darkblue',
                          },
                        }}
                        variant="contained"
                        disabled
                      >
                      Register
                      </Button>
                    </div>
                  </div>
                </div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  width: 500,
                  marginTop: '0.5em',
                  marginBottom: '1.5em',
                  color: 'midnightblue',
                }}
                square
              >
                <div className={`${classes.content}`}>
                     <div
                    className={`${classes.contentSpacing} ${classes.firstHeader}`}
                  >
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.8em",
                       }}
                      gutterBottom
                    >
                      April 12, 2021
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.8em",
                       }}
                      gutterBottom
                    >
                      Past Event
                    </Typography>
                  </div>
                  <div className={`${classes.contentSpacing}`}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: '2.4em',
                        fontWeight: 750,
                      }}
                    >
                      International Women's Day 2021
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: "Open sans",
                        fontSize: '1.5em',
                        letterSpacing: "-0.4px",
                       }}
                       variant="h5">
                      A Virtual Open Forum to celebrate, honour and recognize
                       passionate women who have chosen to #challengeforchange.
                    </Typography>
                  </div>
                  <div
                    className={`${classes.buttonArea} ${classes.contentSpacing}`}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "7em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                    >
                      Business
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "11em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                      variant="contained"
                    >
                      Entrepreneurship
                    </Button>
                  </div>
                  <Divider />
                  <div className={`${classes.lowerSocial}`}>
                    <ul className={`${classes.socialMedia}`}>
                      {socialicons.map((social, i) => (
                        <li key={i} className={`${classes.socialImage}`}>
                          <a href={social.link}>
                            <img
                              src={social.icon}
                              className={`${classes.socialIcons}`}
                              alt="social media icons png"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  width: 500,
                  marginTop: '0.5em',
                  marginBottom: '1.5em',
                  color: 'midnightblue',
                }}
                elevation={20}
              >
                <div className={`${classes.content}`}>
                  <div
                    className={`${classes.contentSpacing} ${classes.firstHeader}`}
                  >
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.6em",
                       }}
                      gutterBottom
                    >
                      Coming Soon....
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "Open sans",
                        fontSize: "1.6em",
                       }}
                      gutterBottom
                    >
                      Upcoming Event
                    </Typography>
                  </div>
                  <div className={`${classes.contentSpacing}`}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: '2.4em',
                        fontWeight: 750,
                      }}
                    >
                      Build, Grow & Dominate
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: "Open sans",
                        fontSize: '1.5em',
                        letterSpacing: "-0.4px",
                       }}
                       variant="h5">
                      A series program for entrepreneurs to give insight as well
                      as directives from an aerial viewpoint on how to build, grow 
                      and dominate in business.
                    </Typography>
                  </div>
                  <div
                    className={`${classes.buttonArea} ${classes.contentSpacing}`}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "7em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                    >
                      Business
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: '#FCCD0D',
                        margin: '1em 1em 1em 0em',
                        textTransform: 'none',
                        width: "11em",
                        fontWeight: 400,
                        fontSize: '1.1em',
                        '&:hover': {
                          backgroundColor: '#FCCD0D',
                        },
                      }}
                      variant="contained"
                    >
                      Entrepreneurship
                    </Button>
                  </div>
                  <Divider />
                  <div className={`${classes.dividerSection}`}>
                    <div className={`${classes.shareImage}`}>
                      <img
                        className={`${classes.shareArrow}`}
                        src={require('../assets/img/share.png')}
                      />
                      <Typography
                        sx={{
                          margin: '1.4em 0em 0em 0.2em',
                          fontWeight: 700,
                          cursor: "pointer",
                          fontSize: "1.8em",
                        }}
                        variant="h4"
                      >
                        Share
                      </Typography>
                    </div>
                    <div className={`${classes.deadline}`}>
                      <Button
                        sx={{
                          textTransform: 'none',
                          padding: '0.2em 1.5em 0.2em 1.7em',
                          fontWeight: 'bolder',
                          fontSize: '1.6em',
                          backgroundColor: 'blue',
                          '&:hover': {
                            backgroundColor: 'darkblue',
                          },
                        }}
                        variant="contained"
                        disabled
                      >
                      Register
                      </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid
              item
              sx={{
                margin: '0em 0em 0em 7em',
              }}
            >
              <Paper
                variant="outlined"
                sx={{
                  width: 450,
                  background: '#fafafa',
                  marginTop: '0.5em',
                  marginBottom: '1.5em',
                  border: "0px",
                }}
                square
              >
              <Typography 
              sx={{
                color: "midnightblue",
                fontFamily: "Open sans",
                fontWeight: 700,
                marginLeft: "2em",
                }} 
                variant="h5">
                Supported By
              </Typography>
                  <ImageListItem
                    sx={{
                      color: "midnightblue",
                      fontFamily: "Open sans",
                      fontWeight: 700,
                      width: "75%",
                      marginLeft: "2em",
                      }} 
                  >
                    <img className={`${classes.imageLogo}`} src={require('../assets/img/b_ecs.png')} />
                    <img className={`${classes.imageLogo}`}  src={require('../assets/img/b_keystone.png')} />
                    <img className={`${classes.imageLogo}`}  src={require('../assets/img/b_lirs.png')} />
                  </ImageListItem>
              </Paper>
            
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .navbar {
    background: ${process.browser && window.location.pathname === '/events'
      ? 'transparent'
      : `${colors.colorBlue}`};
    .upper-nav {
      font-size: 1.5em;
      letterSpacing: "-0.4px", 
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    background: #fafafa;
    .image-events {
      margin-bottom: 0.5em;
      padding: 0em;
      width: 100%;
      .meet {
        width: 100%;
        height: 100%;
        margin: 2em 0em;
      }
      .blue-line{
        height: 2em;
        background: blue;
      }
    }
    .card-section {
      width: 100%;
      padding-left: 20%;
    }
  }
  .footer {
    font-size: 1.4em;
  }
`;
