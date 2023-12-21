import styled from '@emotion/styled';
import { color } from '../../utils/ColorMap';

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommunityTitle = styled.div`
  text-align: center;
  margin-top: 56px;
  margin-bottom: 24px;
  font-family: 'Bold';
  font-size: 2.5rem;
`;

export const CommunitySearch = styled.input`
  display: inline-block;
  width: 450px;
  height: 50px;
  margin: 0 auto;
  line-height: 50px;
  border: solid 3px;
  border-radius: 1.25rem;
  border-color: ${color.primary.deep};
  font-size: 20px;
  text-indent: 20px;

  /* background-position: 20px center;
  background-repeat: no-repeat; */
  &::placeholder {
    background-image: url('/img/InputSearchIcon.png');
    background-size: contain;
    background-position: 20px center;
    background-repeat: no-repeat;
    text-align: left;
    text-indent: 55px;
    line-height: 50px;
  }
`;
