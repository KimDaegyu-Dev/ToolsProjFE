import styled from '@emotion/styled';
import Link from 'next/Link';

export const NoticePage = styled.div`
  padding: 0px 190px 50px 190px;
`;

export const HeadTitle = styled.div`
  color: #000;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  display: flex;
  justify-content: center;
  padding: 43px;
  margin-top: 17px;
`;

export const NoticeContent = styled.div`
  padding: 0px 0px 45px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ContentTitle = styled.div`
  padding: 11px 7px 15px 7px;
  border-top: 1.5px solid black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 14px 0px;
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.div`
  display: inline;
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ModificationButton = styled.button`
  background-color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

export const TextInfo = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ContentText = styled.div``;

export const Article = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 25px 7px 0px;
`;

export const NoticeButton = styled.div`
  display: flex;
  justify-content: center;

  //border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 45px 0px;
`;

export const ListButton = styled.button`
  background-color: #7743db;
  border-radius: 50px;
  color: #fff;
  border: none;
  font-size: large;
  width: 240px;
  height: 60px;
  flex-shrink: 0;
  border: 0.5px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ArticleOrder1 = styled(Link)`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  flex-direction:row;
color: rgba(0, 0, 0, 0.9);
text-decoration:none;
`;

export const ContentOrderContainer = styled(Link)`
display:flex;

`
export const ContentOrder = styled.div`
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height:auto;
  margin: auto 0;
  width:auto;
`;


export const OrderButton = styled.div`
  background-color: white;
  border: none;
  color: rgba(0, 0, 0, 0.55);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width:80px;
  height:30px;
  text-align:center;
  text-justify:center;
  padding:  15px 15px;
`;

export const ArticleOrder2 = styled(Link)`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  flex-direction:row;
color: rgba(0, 0, 0, 0.9);
text-decoration:none;
`;
