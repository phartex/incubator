import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: -150px auto 0;
  background: #fff;
  height: 300px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  .row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 1rem;
    @media only screen and (min-width: 768px) {
      justify-content: space-around;
    }
    .col-1 {
      input {
        display: block;
        padding: 1rem;
        border-radius: 6px;
        border: 1px solid #000;
        width: 80%;
        &:focus {
          outline: none;
        }
        @media only screen and (min-width: 768px) {
          width: 35rem;
        }
      }
    }
    label {
      font-size: 0.8em;
      color: #999;
      margin-right: 1rem;
    }
    select {
      padding: 1rem;
      border-radius: 6px;
      border: 1px solid #000;
      @media only screen and (min-width: 768px) {
        width: 15rem;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 3rem;
  margin: 0 auto;
  display: block;
  width: 80%;
  margin-bottom: 3rem;
  cursor: pointer;
  background-color: #f17105;
  border-radius: 50px;
  border: none;
  color: #fff;
  @media only screen and (min-width: 768px) {
    width: 30%;
  }
  &:hover {
    background-color: #fa9e53;
  }
  &:focus {
    outline: none;
  }
`;

export const LinkButton = styled(Link)`
  padding: 1rem 3rem;
  margin: 0 auto;
  display: block;
  width: 80%;
  margin-bottom: 3rem;
  cursor: pointer;
  background-color: #f17105;
  border-radius: 50px;
  border: none;
  color: #fff;
  text-decoration: none;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 30%;
  }
  &:hover {
    background-color: #fa9e53;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.sidenav ? 'column' : 'row')};
  align-items: ${(props) => (props.sidenav ? 'flex-start' : 'center')};
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f17105;
    }
  }
  li {
    list-style: none;
    margin-right: 2rem;
    margin-bottom: ${(props) => (props.sidenav ? '2rem' : '0')};
    color: #fff;
    cursor: pointer;
  }
`;
