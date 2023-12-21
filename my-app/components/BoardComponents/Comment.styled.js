import styled from '@emotion/styled';
import Image from 'next/image';


export const CommentArea = styled.div`
`;

export const CommentAreaHeader = styled.div`
  height:70px;
  width:97%;
  background-color:rgb(68,62,145,20%);
  display:flex;
  align-items:center;
  padding-left:15px;
  margin-left:10px;
  margin-right:10px;
`;


export const CommentAreaUl = styled.ul`
  padding:0px;
  margin-left:20px;
`;


export const CommentAreaComments = styled.li`
  width:100%;
  display : flex;
  flex-direction:column;
`;

export const CommentAreaCommentsProfile = styled.div`
  height:30px;
  width:100%;
  display:flex;
  align-items:center;
`;
export const CommentAreaCommentsImg = styled(Image)`
  height:30px;
  width:30px;
  border-radius:50%;
  border:1px solid black;
  /* background-color:black; */
  display:inline-block;
  /* display:block; */
`;
export const CommentAreaCommentsData = styled.div`
  height:30px;
  margin-left:34px;
  /* display:block; */
`;
export const CommentAreaCommentsAuthor = styled.div`
  height:20px;
  display:inline;
  margin-left:4px;
  /* display:inline; */
`;
export const CommentAreaCommentsEdit = styled.button`
  height:20px;
  border:none;
  cursor: pointer;
  display:inline;
  /* width:20px; */
  /* display:inline; */
`;
export const CommentAreaCommentsDelete = styled.button`
  height:20px;
  border:none;
  cursor: pointer;
  display:inline;
  /* width:20px; */
  /* display:inline; */
`;


export const CommentInputArea = styled.div`
  position: relative;
  outline: none;
  border: none;
  width: 97%;
  padding: 5px 15px 5px 5px;
  height: 100px;
  //font-size: 15px;
  //font-style: normal;
  //font-weight: 500;
  line-height: normal;
  //border: solid 0.7px rgba(50, 44, 53, 0.54);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  //display: flex;
  //align-items: center;
  display:flex;
  align-content:center;
  justify-content:center;
`;

export const CommentWriter = styled.textarea`
  outline: none;
  border: none;
  width: 100%;
  padding: 8px 5px 5px 5px;
  height:auto;
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
  padding: 5px 8px;
  width: 80px;
  height: 50px;
  //flex-shrink: 0;
  border-radius: 10px;
  background: #443e91;
  color: #fff;
  border: none;
  border: 0.5px solid #fff;
  margin: auto 0;
  //font-weight: bold;
  font-size: medium;
  cursor: pointer;
`;
