import styled from '@emotion/styled';
import Link from 'next/Link';

export const BoardTableRowContainer = styled(Link)`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 0.5px solid gray;
  cursor: pointer;
  text-decoration-line: none;
`;

export const BoardIndexTable = styled.div`
  width: 8%;
  font-size: 18px;
  text-decoration: #a02525;
`;
export const BoardTitleIndexTableText = styled.div`
  width: 40px;
  height: 30px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 30px;
  border: black;
  color: black;
  border-radius: 0px;
`;
export const BoardTitleIndexNoticeTableText = styled.div`
  width: 40px;
  height: 30px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 30px;
  border: solid 1px #a02525;
  color: #a02525;
  border-radius: 5px;
`;
export const BoardItemTable = styled.div`
  width: 100%;
  height: 30px;
  //height: 5rem;
  //border-top-color: black;
  //border-top: solid 2.5px;
  //border-bottom: solid 1px;
  display: flex;
  //align-items: center;
  justify-content: center;
  text-align: center;
`;

export const BoardTitleTable = styled.div`
  width: 61%;

  text-align: left;
`;
export const BoardDateTable = styled.div`
  width: 8%;
  opacity: 50%;
  text-align: center;
`;

export const BoardViewTable = styled.div`
  width: 6%;
  opacity: 50%;
  text-align: center;
`;
