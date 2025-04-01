import Header from '../../components/Header/Header';
import {
  Container,
  TitleWrapper,
  TeamTitle,
  Underline,
} from '../../styles/sharedStyles';
import {
  ProgressBar,
  MilestoneWrapper,
  MilestoneDot,
  MilestoneTitle,
  MilestoneText,
  Message,
} from './History.style';

const historyData = [
  {
    date: '2023.12',
    text: 'IT 연합동아리 UMC 5기 \n데모데이 프로젝트 진행',
    top: 0,
    isLeft: true,
  },
  {
    date: '2024.02',
    text: 'UMC 5기 데모데이 참가',
    top: 65,
    isLeft: false,
  },
  {
    date: '2024.03',
    text: '투유 서비스 기획 \n서비스 방향성 및 기능 전면 재설계',
    top: 130,
    isLeft: true,
  },
  {
    date: '2024.12',
    text: 'Android 1차 개발 완료 \n플레이스토어 베타테스트 진행',
    top: 195,
    isLeft: false,
  },
  {
    date: '2025.01',
    text: 'iOS 팀원 리쿠르팅 \niOS 앱 개발 시작',
    top: 263,
    isLeft: true,
  },
  {
    date: '2025.02',
    text: '플레이스토어 정식 출시',
    top: 328,
    isLeft: false,
  },
  {
    date: '2025.03',
    text: 'Android 앱 사용성 개선 \n버그 대응 및 추가 기능 개발',
    top: 395,
    isLeft: true,
  },
];

const HistoryPage = () => {
  return (
    <Container>
      <Header />
      <TitleWrapper>
        <TeamTitle>투유팀이 걸어온 길을 소개합니다</TeamTitle>
        <Underline />
      </TitleWrapper>
      <ProgressBar />
      <MilestoneWrapper>
        {historyData.map((data, index) => (
          <>
            <MilestoneDot key={`circle-${index}`} />
            <MilestoneTitle top={data.top} isLeft={data.isLeft}>
              {data.date}
            </MilestoneTitle>
            <MilestoneText top={data.top} isLeft={data.isLeft}>
              {data.text}
            </MilestoneText>
          </>
        ))}
      </MilestoneWrapper>
      <Message>
        투유팀의 여정은 현재도 계속되고 있어요.
        <br />
        앞으로 걸어갈 길에도 따뜻한 응원 부탁드려요. 🌱
      </Message>
    </Container>
  );
};

export default HistoryPage;
