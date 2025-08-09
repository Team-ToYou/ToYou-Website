const ANDROID_LINK =
  'https://play.google.com/store/apps/details?id=com.toyou.toyouandroid';
const IOS_LINK = 'https://apps.apple.com/kr/app/%ED%88%AC%EC%9C%A0-%EC%A7%88%EB%AC%B8%EC%9C%BC%EB%A1%9C-%EC%93%B0%EB%8A%94-%EC%9D%BC%EA%B8%B0-%EA%B0%90%EC%A0%95-%EA%B8%B0%EB%A1%9D/id6742442596';

const handleAppDownload = (os) => {
  if (os === 'Android') {
    window.open(IOS_LINK);
  } else if (os === 'iOS') {
    window.location.href = IOS_LINK;
  } else {
    alert('앱은 모바일 기기에서만 다운로드할 수 있어요!');
  }
};

export default handleAppDownload;
