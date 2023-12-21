import styled from '@emotion/styled';
import { color } from '../../utils/ColorMap';

export const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${color.primary.default};
  color: ${color.secondary.white};
`;
