import {
  Container,
  TitleWrapper,
  TeamTitle,
  Underline,
} from '../../styles/sharedStyles';
import Header from '../../components/Header/Header';
import {
  Section,
  SectionTitle,
  MemberGrid,
  MemberRole,
  MemberList,
} from './TeamToYou.style';

const TeamToYouPage = () => {
  return (
    <Container>
      <Header />
      <TitleWrapper>
        <TeamTitle>TEAM ToYou</TeamTitle>
        <Underline />
      </TitleWrapper>

      <Section top={200}>
        <SectionTitle color="#EB8B8B">Active Member</SectionTitle>
        <MemberGrid>
          <div>
            <MemberRole>Project Manager</MemberRole>
            <MemberList>유태연</MemberList>
          </div>
          <div>
            <MemberRole>iOS Developer</MemberRole>
            <MemberList>김미주</MemberList>
            <MemberList>이승준</MemberList>
          </div>
          <div>
            <MemberRole>Android Developer</MemberRole>
            <MemberList>정승원</MemberList>
            <MemberList>차현정</MemberList>
          </div>
          <div>
            <MemberRole>BE Developer</MemberRole>
            <MemberList>오유은</MemberList>
          </div>
        </MemberGrid>
      </Section>

      <Section top={500}>
        <SectionTitle color="#A6A6A6">Non-Active Member</SectionTitle>
        <MemberGrid>
          <div>
            <MemberRole>Designer</MemberRole>
            <MemberList>송혜음</MemberList>
          </div>
        </MemberGrid>
      </Section>
    </Container>
  );
};

export default TeamToYouPage;
