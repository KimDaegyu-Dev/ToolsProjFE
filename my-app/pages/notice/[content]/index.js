import Link from 'next/Link';
import React from 'react';
import {
  Article,
  ArticleOrder1,
  ArticleOrder2,
  ContentOrder,
  ContentText,
  ContentTitle,
  HeadTitle,
  ListButton,
  NoticeButton,
  NoticeContent,
  NoticePage,
  OrderButton,
  TextInfo,
  Title,
} from '../../../components/BoardComponents/BoardContent.styled';
import Header from '../../../components/Header/Header';
import {
  DeleteButton,
  EditButton,
  ModificationButton,
} from '../../../components/Notice/Notice.styled';

function Notice() {
  return (
    <>
      <Header />
      <NoticePage>
        <HeadTitle>공지사항</HeadTitle>
        <NoticeContent>
          <ContentTitle>
            <Title>
              Tools 회칙
              <EditButton>
                <ModificationButton>수정 </ModificationButton>|
                <DeleteButton> 삭제</DeleteButton>
              </EditButton>
            </Title>
            <TextInfo>이소윤 | 2023.09.19 | 38</TextInfo>
          </ContentTitle>
          <ContentText>
            <Article>
              제 1 장 총 칙
              <br />
              <br />
              제 1 조 (명칭)
              <br />
              본 동아리의 명칭을 TOOLS (Total Object Oriented Language Study
              club)라 명한다.
              <br />
              <br />
              제 2 조 (목적)
              <br />
              1) 본 동아리는 학습동아리로서 각 회원들의 실력향상을 목적으로
              한다.
              <br />
              2) 본 동아리는 권리사항과 준수의무를 성실히 수행하고 기본적인
              교육이외에 회원과의 친목을 돈독히 다진다.
              <br />
              3) 본 동아리는 본 대학의 참된 동아리 문화 발전에 이바지 한다.
              <br />
              <br />
              제 3조 (동의)
              <br />
              TOOLS에 회원으로 가입하는 것은 본 회칙에 동의함과 같다.
              <br />
              <br />
              제 2 장 회 원<br />
              <br />
              제 4 조 (자격 및 조건)
              <br />
              1) 회원 자격은 국립 서울 과학 기술 대학교의 학생[신입생, 재학생,
              편입생 단, 4 학년은 가입을 금한다.] 이어야한다.
              <br />
              <br />
              제 5 조 (등록기간)
              <br />
              1) 신입회원의 등록은 1년에 2회(3월, 9월)에 할 수 있다.
              <br />
              2) 등록기간은 1학기 개강 후 4월 초까지, 2학기 개강 후 9월말까지로
              정한다.
              <br />
              <br />
              제 6 조 (권리)
              <br />
              1) 본 동아리의 회원은 회의의 참가권을 가지며 거수의 자격을 갖는다.
              <br />
              2) 본 동아리의 회원은 정·부회장 선거권, 피선거권 및 탄핵소추권을
              갖는다.
              <br />
              3) 전 항의 탄핵소추는 정회원 1/3 이상의 동의로 개최하며 참석 회원
              2/3 이상으 로 찬성 여부를 결정한다.
              <br />
              <br />
              제 7 조 (의무)
              <br />
              1) 본 동아리의 회원은 회칙 및 결의사항을 성실하게 준수할 의무를
              갖는다.
              <br />
              2) 본 동아리의 회원은 회비와 각종 행사시 결정된 행사비를 납부할
              의무를 갖는 다. 단, 임원은 제외한다.
              <br />
              <br />
              제 8 조 (징계)
              <br />
              -다음과 같은 경우 본 동아리의 회원은 총칙에 의해 징계대상이 될 수
              있다.
              <br />
              1) 본 동아리의 회원은 본 동아리의 명예훼손 또는 불이익이 되는
              행위를 하였을 경우
              <br />
              2) 동아리 활동(정기회의 등)에 정당한 사유 없이 불참하였을 경우
              <br />
              3) 공공질서 및 미풍양속에 반하는 경우
              <br />
              위의 사항에 해당되는 회원은 총칙 및 임원 의결에 의해 경고를 받을
              수 있으 며 경고가 2회 누적되거나 그 정도에 따라 제명이 가능하다.
              후에는 재등록 을 할 수 없다.
              <br />
              <br />
              제 9 조 (휴학)
              <br />
              1) 휴학(군 휴학, 일반 휴학) 시 회원의 자격은 유지된다.
              <br />
              2) 단, 휴학생은 주요 행사에 참여하지 않아도 자격이 유지된다.
              <br />
              <br />
              제 3 장 조 직<br />
              <br />
              제 10 조 (임원)
              <br />
              1) 본 동아리의 기초 임원진을 회장, 부회장, 총무, 서기로 둔다.
              <br />
              2) 회장은 본 동아리를 대표하여 다음과 같은 제반 업무를 갖는다.
              <br />
              가. 부회장 임명권
              <br />
              나. 예산 집행권
              <br />
              다. 임시 총회, 임원회의 소집권
              <br />
              라. 회원의 포상 및 징계권
              <br />
              마. 기타 본 동아리의 제반업무
              <br />
              3) 부회장은 회장을 보좌하고 회장 부재 시 그 임무를 대행한다.
              <br />
              4) 총무는 회장의 승인 하 예산(회비 및 각종 행사비)을 관리한다.
              <br />
              5) 서기는 회의 및 기타 동아리 활동의 기록을 담당한다.
              <br />
              6) 회장의 요청에 따라 회원 2/3이상의 동의를 얻을 경우 추가적으로
              임원을 둘 수 있다.
              <br />
              <br />
              제 11 조 (선출)
              <br />
              회장은 매년 마지막 정기회의를 통해 선출한다.
              <br />
              <br />
              제 12 조 (당선자 결정)
              <br />
              1) 회원 과반수의 찬성을 얻어야 한다.
              <br />
              2) 당선자 결정 즉 시 회장은 이를 공표한다.
              <br />
              <br />
              제 13 조 (임기)
              <br />
              1) 임원의 임기는 당해 종강총회 이후부터 이듬해 종강총회까지로
              한다.
              <br />
              2) 회장은 연임 또는 재임할 수 없다.
              <br />
              <br />
              제 4 장 회 의<br />
              <br />
              제 14 조 (회의)
              <br />
              본 동아리의 의결기관으로 총회와 정기회의를 둔다.
              <br />
              <br />
              제 15 조 (총회)
              <br />
              1) 개강총회
              <br />
              가. 개강총회는 매학기 첫 월중에 1회 소집한다.
              <br />
              나. 개강총회 관장사항은 다음과 같다.
              <br />
              (1) 선출 임원의 공고
              <br />
              (2) 동아리 예산 집행
              <br />
              (3) 기타 사항
              <br />
              2) 종강총회
              <br />
              가. 종강총회는 매학기 마지막 월중에 1회 소집한다.
              <br />
              나. 종강총회 관장사항은 다음과 같다.
              <br />
              (1) 차기 임원의 인준
              <br />
              (2) 동아리 활동보고 및 예산의 결산
              <br />
              (3) 기타 사항
              <br />
              3) 임시총회
              <br />
              동아리의 중대한 상황이 발생하였을 때 회장의 건의 또는 회원의
              1/3이상의 요구가 있을 때 임시총회를 열 수 있다.
              <br />
              <br />
              제 16 조 (정기회의)
              <br />
              1) 정기회의는 매주 1회 정기적으로 모임을 갖고 동아리 활동상황
              보고를 가지며 회원 상호간 친목도모와 목적달성에 노력한다.
              <br />
              2) 정기회의는 기본적으로 매주 수요일로 한다. 이에 대한 변경이 있을
              경우 공고 하에 변경을 진행한다.
              <br />
              3) 주모임의 관장사항
              <br />
              가. 동아리 활동 및 진행에 관한 사항
              <br />
              나. 지도교수님 전달 사항 및 학교 전달 사항
              <br />
              다. 회원 자격과 징계 및 포상에 관한 사항
              <br />
              라. 총회가 위임한 사항
              <br />
              마. 기타 사항
              <br />
              4) 의결방법은 출석회원의 과반수로 한다.
              <br />
              5) 4학년 이상의 회원은 정기회의에 참여하지 않아도 된다.
              <br />
              <br />
              제 5 장 재 정<br />
              <br />
              제 17 조 (회비)
              <br />
              회비는 예산안에 따라 변동되며 결정권은 임원에게 있다.
              <br />
              <br />
              제 18 조 (납부기간)
              <br />
              회비는 공고 후 1개월을 납부기간으로 한다.
              <br />
              <br />
              제 19 조 (공고)
              <br />
              임원은 결정된 당기 회비를 공고하여야 한다.
              <br />
              <br />
              제 20 조 (회계 연도)
              <br />
              회계 연도는 임원 임기기간인 종강총회부터 차기 종강총회까지로 한다.
              <br />
              <br />
              제 6 장 회 칙 개 정<br />
              <br />
              제 21조 (발의)
              <br />
              1) 임원들의 동의를 얻어 회장이 발의한다.
              <br />
              2) 정기회의에서 과반수 회원의 요구로서 발의된다.
              <br />
              <br />
              제 22조 (의결)
              <br />
              정기회의 출석회원 2/3 이상의 찬성으로 결정한다.
              <br />
              <br />
              제 23조(효력 발생)
              <br />
              확정된 개정안은 10일 이내에 공포해야 하고, 그와 동시에 효력이
              발생한다.
              <br />
            </Article>
          </ContentText>
        </NoticeContent>
        <NoticeButton>
          <Link
            href={`/notice`}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <ListButton>목록</ListButton>
          </Link>
        </NoticeButton>
        <ArticleOrder1>
          <OrderButton>이전글</OrderButton>
          <ContentOrder></ContentOrder>
        </ArticleOrder1>
        <ArticleOrder2>
          <OrderButton>다음글</OrderButton>
          <ContentOrder>Tools 드라이브 공지</ContentOrder>
        </ArticleOrder2>
      </NoticePage>
    </>
  );
}

export default Notice;
