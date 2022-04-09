import styled from "styled-components";
import User from "../../assets/user2.png";

export const Container = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 760px) {
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 80px;

    background-color: aliceblue;

    display: flex;
    align-items: center;

    .user {
      width: 50px;
      height: 50px;

      border-radius: 50%;

      margin: 15px;

      background-image: url(${User});
      background-size: contain;
    }
  }
  .menu-dash {
    width: 100%;
    ul {
      margin-top: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li {
      display: table-cell;
      position: relative;
      padding: 10px 0;
    }
    a {
      color: black;
      text-transform: capitalize;
      text-decoration: none;

      display: inline-block;
      padding: 15px 10px;
      position: relative;
    }
    a:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: black;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    a:hover:after {
      width: 100%;
      left: 0;
    }
  }
`;
