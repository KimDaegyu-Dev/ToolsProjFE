import styled from '@emotion/styled';
import { color } from '../../utils/ColorMap';
export const Container = styled.div`
  font-size: 0.5rem;
  background: linear-gradient(rgb(164,124,240), #fff 30%);
`;
export const BannerTitle = styled.div`
  font-family:'Plaster';
  z-index: 10;
  color: ${color.primary.default};
  text-align: center;
  /* font-size: 18em; */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: 320px;
  left: 50vw;
  transform: translate(-50%);
  pointer-events: none;
`;

export const BannerSub = styled.div`
  z-index: 10;
  color: #000;
  text-align: center; 
  font-style: normal;
  font-weight: 400;
  line-height: 190%;
  letter-spacing: -0.72px;
  position: absolute;
  top: 480px;
  left: 50vw;
  transform: translate(-50%);
  pointer-events: none;
`;

export const BannerLoginBtn = styled.div`
  z-index: 3;
  width: 230px;
  height: 55px;
  border-radius: 25px;
  position: absolute;
  background-color: ${color.primary.default};
  top: 680px;
  left: 50vw;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BannerLogin = styled.div`
  color: #fff;
  text-align: center;
  /* Body H4 */
  font-family: Montserrat;
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.36px;
`;

export const ContentContainer = styled.div`
  display: block;
  width: 1230px;
  height: auto;
  margin: 0 auto;
  cursor: default;
  margin-bottom: 24px;
`;

export const ContentTitle = styled.div`
  color: #000;
  /* Body P Large */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 50px; /* 138.889% */
  letter-spacing: -0.54px;
  margin-bottom: 16px;
  margin-right: 1100px;
  border-bottom: 1px solid black;
`;
