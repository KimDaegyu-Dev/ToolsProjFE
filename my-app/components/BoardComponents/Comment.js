import { useCallback, useState } from "react";
import { CommentButton, CommentInputArea, CommentWriter } from "./Comment.styled";



export default function Comment({ value, setValue, onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [inputValues, setInputValues] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const inputValueHandler = useCallback((e) => {
    setValue(e.currentTarget.value);
  }, []);
  return (
    <>
      <CommentInputArea>
        <CommentWriter placeholder="댓글을 남겨보세요." value={value} onChange={inputValueHandler} />
        <CommentButton onClick={onSubmit}>등록</CommentButton>
      </CommentInputArea>

    </>
  )
}