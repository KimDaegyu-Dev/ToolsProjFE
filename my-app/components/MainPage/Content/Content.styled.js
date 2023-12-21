import styled from '@emotion/styled';
import { color } from '../../../utils/ColorMap';

// export const ContentContainer = styled.div`
//   display: inline;
//   width: 1230px;
//   height: auto;
//   margin: 0 auto;
// `;

export const Project = styled.div`
  display: inline-flex;
  white-space: pre-line;
  width: 390px;
  height: auto;
  margin-left: 20px;
  margin-bottom: 24px;
  /* margin-right: 3px; 1170 230 60 */
  overflow: hidden;
  padding-bottom: 0px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
`;

export const ProjectImg = styled.div`
  flex-shrink: 0;
  background-color: ${color.primary.default};
  transition: all 0.5s;
  cursor: pointer;
`;

export const ProjectName = styled.div`
  width: 302px;
  /* height: 36px; */
  height:auto;
  flex-shrink: 0;
  margin-top: 12px;
  color: #000;
  /* Body P Large */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 50px; /* 138.889% */
  letter-spacing: -0.54px;
  text-align: left;
`;

export const ProjectBtn = styled.input`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 40px;
  border: 0px;
  display: block;
  transform: scale(90%);
  cursor: pointer;
`;

// export const ProjectBtnPlus = styled.div`
// width: 20px;
// height: 20px;
// flex-shrink: 0;
// margin-left: 60px;
// background: url("/my-app/components/img/btnM.png") no-repeat;
// border: 0px;
// display: block;
// `;

// export const ProjectBtnMinus = styled.div`
// width: 20px;
// height: 20px;
// flex-shrink: 0;
// margin-left: 60px;
// background: url("/my-app/components/img/btnP.png") no-repeat;
// border: 0px;
// display: block;
// `;s

export const ProjectLeader = styled.div`
  width: 390px;
  height: 36px;
  flex-shrink: 0;
  color: #000;
  margin-top: 8px;
  /* Body P */
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  letter-spacing: -0.27px;
  text-align: left;
`;

export const ProjectContent = styled.div`
  width: 390px;
  white-space: pre-line;
  color: #000;
  margin-top: 4px;
  /* Body P */
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  letter-spacing: -0.27px;
  text-align: left;
`;
