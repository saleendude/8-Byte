import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  background: url(${process.env.PUBLIC_URL}/assets/images/BGs/red_bg.png)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

// export const GridContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   height: 100%;
//   width: 100%;
// `;

// export const ARCodeContainer = styled.div`
//   display: flex;
//   flex-basis: calc(25%);
//   border: 1px solid green;
//   padding: 1rem;
// `;

// export const ARCodeWrapper = styled.div`
//   border: 1px solid black;
// `;

// export const GridContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

// export const ARCodeContainer = styled.div`
//   width: 25%;
//   height: 25vw;
//   //   border: green 1px solid;
// `;

// export const ARCodeWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   min-width: 100%;
//   min-height: 100%;

//   img {
//     max-width: 80%;
//     height: auto;
//     object-fit: contain;
//     border: 1px solid rgba(0, 0, 0, 0.1);
//     border-radius: 20px;

//     box-shadow: 30px 42px 32px -8px rgba(0, 0, 0, 0.5);
//     -webkit-box-shadow: 30px 42px 32px -8px rgba(0, 0, 0, 0.5);
//     -moz-box-shadow: 30px 42px 32px -8px rgba(0, 0, 0, 0.5);
//   }
// `;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid black;
`;

export const ARCodeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid black;
`;

export const ARCodeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  min-height: 100%;

  img {
    max-width: 80%;
    height: auto;
    object-fit: contain;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    box-shadow: 30px 42px 32px -8px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 30px 42px 32px -8px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 30px 42px 32px -8px rgba(0, 0, 0, 0.5);
  }
`;
