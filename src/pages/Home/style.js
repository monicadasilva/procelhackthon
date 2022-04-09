import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 760px) {
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  color: black;

  h1 {
    font-weight: bold;
  }

  .MuiPaper-outlined {
    width: 100px;
    height: 100px;
  }

  .MuiButton-contained {
    width: 117.02px;
    background-color: antiquewhite;
    color: black;

    text-transform: capitalize;

    :hover {
      background-color: antiquewhite;
    }
  }

  .MuiButton-outlined {
    width: 117.02px;
    color: violet;
    border-color: violet;

    text-transform: capitalize;

    :hover {
      border-color: violet;
    }
  }
`;
