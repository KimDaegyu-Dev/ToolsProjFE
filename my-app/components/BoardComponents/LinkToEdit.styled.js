import styled from '@emotion/styled';
import { color } from '../../utils/ColorMap';

export const LinkToEditContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  /* display:flex;
flex-direction:row-reverse; */
  /* padding-bottom: 80px; */
`;

export const RoundLinkToEdit = styled.div`
  border-radius: 10px;
  height: 48px;
  width: 100px;
  background-color: ${color.primary.default};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-top: 20px;
`;
