import { MainBackground, CTAText, CTAButton, MainImg } from './Main.style';
import Header from '../../components/Header/Header';
import MainImage from '@/assets/main.svg';

const MainPage = () => {
  return (
    <>
      <MainBackground>
        <CTAText>
          <p>
            지금 바로 오늘의 일기카드
            <br />
            작성하러 가기
          </p>
          <CTAButton
            onClick={() =>
              window.open(
                'https://play.google.com/store/apps/details?id=com.toyou.toyouandroid'
              )
            }
          >
            앱 다운로드
          </CTAButton>
        </CTAText>
        <Header />
        <MainImg src={MainImage} alt="main image" />
      </MainBackground>
    </>
  );
};

export default MainPage;
