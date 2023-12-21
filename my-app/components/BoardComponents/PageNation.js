import { PageNationContainer, PageNationNext, PageNationNumber, PageNationPrev } from "./PageNation.styled";

export default function PageNation({ setBoardPage, boardCount, get }) {
  const pageArr = [];
  var PageCount = Math.ceil(boardCount / 10);
  for (let i = 0; i < PageCount; i++) {
    pageArr.push(i);
  }
  const onNumber = (page) => {
    get();
    setBoardPage(page);
  }

  return (
    <PageNationContainer>
      <PageNationNext />
      {
        pageArr.map((index) => (
          <PageNationNumber key={index} onClick={() => onNumber(pageArr[index] + 1)}>{pageArr[index] + 1}</PageNationNumber>
        ))
      }

      <PageNationPrev />
    </PageNationContainer>
  )
}