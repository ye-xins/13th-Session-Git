import styled from "styled-components";

// components

// images
import designLogo from "./images/Figma.png";
import frontLogo from "./images/React.png";
import backLogo from "./images/django.png";

function App() {
  return (
    <Wrapper>
      <BackgroundModal>
        <Title>
          <p className="h1">react1 homework</p>
          <p className="h2">🫳아기사자를 응원해요🫳</p>
          <div className="Line"></div>
        </Title>

        <TrackOption>
          <p>트랙을 선택해주세요.</p>
          <div className="chooseTrack">
            <TrackBtn>
              <img src={designLogo} alt="기획디자인" />
              <span>기획디자인</span>
            </TrackBtn>
            <TrackBtn>
              <img src={frontLogo} alt="프론트엔드" />
              <span>프론트엔드</span>
            </TrackBtn>
            <TrackBtn>
              <img src={backLogo} alt="백엔드" />
              <span>백엔드</span>
            </TrackBtn>
          </div>
        </TrackOption>

        <OpenBtn>모달 만들기</OpenBtn>
      </BackgroundModal>
      <Cheering>아가사자를 응원합니다!</Cheering>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  background-color: #d8e4ec;
  font-family: "Pretendard";
  white-space: nowrap;
`;

const BackgroundModal = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  font-family: "Pretendard";

  @media (max-width: 1100px) {
    width: 60%;
  }
  @media (min-width: 1100px) {
    width: 50%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1.5px solid #d7d7d7;

  .h1 {
    font-weight: 300;
    font-size: 15px;
    margin-bottom: 0;
  }

  .h2 {
    font-weight: 600;
    font-size: 2rem;
    margin-top: 10px;
  }
`;

const TrackOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-family: "Pretendard";
    font-style: normal;
    color: #414141;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
  }

  .chooseTrack {
    background-color: transparent;
    border: none;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const TrackBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 17px;
  background-color: transparent;
  border: none;

  img {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const OpenBtn = styled.button`
  padding: 0.5rem 2rem;
  font-family: "Pretendard";
  color: #ffffff;
  background: #81a7d3;
  border-radius: 1.3rem;
  border: none;
  font-size: 20px;
  margin-top: 5%;
  cursor: pointer;
`;

const Cheering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 24px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);

  background: #ffffff;
  color: #81a7d3;
  font-family: "Pretendard";

  @media (max-width: 1100px) {
    width: 60%;
  }
  @media (min-width: 1100px) {
    width: 50%;
  }
`;