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
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .MuiBox-root {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  .MuiSelect-select {
    width: 160px;
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

  .MuiButton-text {
    width: 117.02px;
    color: black;

    text-transform: capitalize;
  }
`;
