const ANDROID_LINK =
  'https://play.google.com/store/apps/details?id=com.toyou.toyouandroid';
const IOS_LINK =
  'https://play.google.com/store/apps/details?id=com.toyou.toyouandroid';
// ⚠️ iOS는 아직 출시 전이므로 플레이스토어 링크로 대체 (릴리즈 시 변경)

const handleAppDownload = (os) => {
  if (os === 'Android') {
    window.open(ANDROID_LINK);
  } else if (os === 'iOS') {
    window.location.href = IOS_LINK;
  } else {
    alert('앱은 모바일 기기에서만 다운로드할 수 있어요!');
  }
};

export default handleAppDownload;
