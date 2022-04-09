import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 760px) {
  }
`;

export const Content = styled.div`
  width: 375px;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  .categories {
    width: 150px;
    height: 150px;
    border: 2px solid gray;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    img {
      width: 50px;
      height: 5 0px;
    }
    svg {
      font-size: 3rem;
    }

    margin-top: -50px;

    :nth-child(3) {
      margin-top: -150px;
    }
    :nth-child(4) {
      margin-top: -150px;
    }
  }
`;
