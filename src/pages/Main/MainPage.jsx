import Header from '@/components/Header/Header';
import useMobileOS from '@/hooks/useMobileOS';
import handleAppDownload from '@/utils/handleAppDownload';
import MainImage from '@/assets/main.svg';
import MainImage2 from '@/assets/main2.svg';
import ArrowImage from '@/assets/arrow.svg';
import Step1Image from '@/assets/step1.svg';
import Step2Image from '@/assets/step2.svg';
import Step3Image from '@/assets/step3.svg';
import {
  MainContainer,
  CTASection,
  DownloadButton,
  MainImageWrapper,
  GuideArrow,
  GuideContainer,
  GuideText,
  GuideImage,
  StepBadge,
  StepHeader,
  StepLine,
  StepTitle,
  StepDescription,
  StepImage,
} from './Main.style';

const MainPage = () => {
  const os = useMobileOS();

  const handleDownload = () => {
    handleAppDownload(os);
  };

  return (
    <>
      <MainContainer>
        <CTASection>
          <p>
            지금 바로 오늘의 일기카드
            <br />
            작성하러 가기
          </p>
          <DownloadButton onClick={handleDownload}>앱 다운로드</DownloadButton>
        </CTASection>
        <Header />
        <MainImageWrapper src={MainImage} alt="main image" />
      </MainContainer>

      <GuideContainer>
        <GuideArrow src={ArrowImage} alt="guide arrow" />
        <GuideText>
          매일 배달되는 질문을 통해 <br />
          나만의 일기를 기록하고 관리하세요. <br />
          투유와 함께라면, 하루하루의 감정이 <br />더 특별하게 느껴질 거예요.
        </GuideText>
        <GuideImage src={MainImage2} alt="main image2" />

        <StepBadge top={864}>STEP ONE</StepBadge>
        <StepHeader top={894}>
          <StepLine />
          <StepTitle>감정우표 선택하기</StepTitle>
        </StepHeader>
        <StepDescription top={924}>
          오늘의 기분을 감정우표로 선택하면 <br />
          홈화면과 일기카드가 자동으로 커스터마이징 돼요
        </StepDescription>
        <StepImage top={994} src={Step1Image} alt="step 1 image" />

        <StepBadge top={1405}>STEP TWO</StepBadge>
        <StepHeader top={1435}>
          <StepLine />
          <StepTitle>일기카드 만들기</StepTitle>
        </StepHeader>
        <StepDescription top={1465}>
          나만을 위한 투유 맞춤형 질문으로 하루를 기록해요 <br />
          친구들이 보낸 질문에도 답해보세요!
        </StepDescription>
        <StepImage top={1551} src={Step2Image} alt="step 2 image" />

        <StepBadge top={2144}>STEP THREE</StepBadge>
        <StepHeader top={2174}>
          <StepLine />
          <StepTitle>나의 기록 확인하기</StepTitle>
        </StepHeader>
        <StepDescription top={2204}>
          달력에서 지난 날의 추억을 다시 만나보세요
        </StepDescription>
        <StepImage top={2265} src={Step3Image} alt="step 3 image" />
      </GuideContainer>
    </>
  );
};

export default MainPage;
