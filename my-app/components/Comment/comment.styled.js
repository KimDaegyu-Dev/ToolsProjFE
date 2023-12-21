import styled from '@emotion/styled';

export const RecruitmentCommentPage = styled.div`
  padding: 0px 190px;
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

export const RecruitmentContent = styled.div`
  padding: 0px 0px 100px;
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

export const CommentArea = styled.div`
  position: relative;
  outline: none;
  border: none;
  width: 97%;
  padding: 5px 15px 5px 5px;
  height: 150px;
  //font-size: 15px;
  //font-style: normal;
  //font-weight: 500;
  line-height: normal;
  //border: solid 0.7px rgba(50, 44, 53, 0.54);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: #fff;
  //display: flex;
  //align-items: center;
`;

export const CommentWriter = styled.textarea`
  outline: none;
  border: none;
  width: 100%;
  padding: 8px 5px 5px 5px;
  height: 90%;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  resize: none;
  //border: solid 0.7px rgba(50, 44, 53, 0.54);
  //margin-left: 10px;
  //display: flex;
  //align-items: center;
`;

export const CommentSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CommentButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 5px 8px;
  width: 80px;
  height: 50px;
  //flex-shrink: 0;
  border-radius: 10px;
  background: #443e91;
  color: #fff;
  border: none;
  border: 0.5px solid #fff;
  //font-weight: bold;
  font-size: medium;
`;

export const NoticeButton = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  //border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 45px 0px;
  //margin-top: 10px;
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

export const ArticleOrder1 = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ContentOrder = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 28px;
`;

export const OrderButton = styled.button`
  padding: 25px 15px;
  background-color: white;
  border: none;
  color: rgba(0, 0, 0, 0.55);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ArticleOrder2 = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
`;
