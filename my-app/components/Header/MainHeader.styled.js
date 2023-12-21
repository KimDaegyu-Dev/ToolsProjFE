import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  z-index: 99;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  /* width: 100%; */
  height: 80px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  /* backdrop-filter: blur(10px); */
  background-color: ${(props) => props.show ? `rgb(255,255,255,0.7)` : `rgb(164,124,240, 0.2)`};
  transition-duration: 0.7s;
  transition-timing-function: ease;
`;
export const HeaderImg = styled.div`
  /* margin-right: 30.75rem; */
  margin-left:30px;
  cursor: pointer;
`;

export const HeaderItems = styled.div`
  font-family: 'Medium', Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 1.5rem;
  display: flex;
  /* margin-left:auto; */
  align-items: right;
  justify-content: space-evenly;
  width: 540px;
  transition-duration: 0.7s;
  transition-timing-function: ease;
  flex-direction: row;
`;
