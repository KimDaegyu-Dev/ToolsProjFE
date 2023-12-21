import styled from '@emotion/styled';

import { color } from '../../../utils/ColorMap';

export const BannerImg = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const CircleContainer = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1185px;
  height: 675px;
  margin: 0 auto;
  margin-bottom: 200px;
`;

export const CirclePadding = styled.div`
  padding: 32.5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transition: all 5s;

  &:hover {
    width: 15px;
    height: 15px;
    border-radius: 50%;

    background-color: ${color.primary.deep};
    filter: blur(50px);
    transition: all 0.1s;
  }
`;

export const Circleinside = styled.div`
  width: 150x;
  height: 15px;
  border-radius: 50%;
  background-color: ${color.primary.deep};
`;
