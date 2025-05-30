import { useState } from "react";
import styled from "styled-components";

import Modal from "./components/Modal";

import designLogo from "./images/Figma.png";
import frontLogo from "./images/React.png";
import backLogo from "./images/django.png";

const BabyLionList = {
  "기획 & 디자인": [
    { id: 1, name: "김수민", major: "디자인학부" },
    { id: 2, name: "김지후", major: "융합콘텐츠학과" },
    { id: 3, name: "박서영", major: "스포츠과학과" },
    { id: 4, name: "송나영", major: "중어중문학과" },
    { id: 5, name: "이도윤", major: "경영학부" },
    { id: 6, name: "이은서", major: "융합콘텐츠학과" },
  ],
  프론트엔드: [
    { id: 7, name: "김민혜", major: "전기전자공학과" },
    { id: 8, name: "김성주", major: "사이버보안학과" },
    { id: 9, name: "서예린", major: "컴퓨터공학과" },
    { id: 10, name: "유진서", major: "컴퓨터공학과" },
    { id: 11, name: "이예영", major: "교육공학과" },
    { id: 12, name: "최연서", major: "인공지능학과" },
  ],
  백엔드: [
    { id: 13, name: "김가영", major: "컴퓨터공학과" },
    { id: 14, name: "김연우", major: "컴퓨터공학과" },
    { id: 15, name: "성혜린", major: "사이버보안학과" },
    { id: 16, name: "설영은", major: "과학교육과" },
    { id: 17, name: "신지민", major: "컴퓨터공학과" },
    { id: 18, name: "황규리", major: "컴퓨터공학과" },
  ]
};

function App() {
  const [modal, setModal] = useState(false);
  const [track, setTrack] = useState("");
  const [trackData, setTrackData] = useState([]);
  const [id, setId] = useState(null);

  const selectedLionName = trackData.find((lion) => lion.id === id)?.name || "";

  const selectTrack = (selectedTrack) => {
    setTrack(selectedTrack);
    setTrackData(BabyLionList[selectedTrack] || []);
    setId("");
  }

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
          <TrackBtn onClick={() => selectTrack("기획 & 디자인")}>
          <img src={designLogo} alt="기획디자인" />
          <span>기획디자인</span>
          </TrackBtn>
          <TrackBtn onClick={() => selectTrack("프론트엔드")}>
          <img src={frontLogo} alt="프론트엔드" />
          <span>프론트엔드</span>
          </TrackBtn>
          <TrackBtn onClick={() => selectTrack("백엔드")}>
          <img src={backLogo} alt="백엔드" />
          <span>백엔드</span>
          </TrackBtn>
        </div>
        </TrackOption>

        <OpenBtn onClick={() => setModal(true)}>모달 만들기</OpenBtn>
        {modal && (
          <Modal
          setModal={setModal}
          track={track}
          dataList={BabyLionList[track]}
          id={id}
          setId={setId}
          />
        )}
      </BackgroundModal>
      <Cheering>
        {track}
        {selectedLionName}
        아기사자를 응원합니다!</Cheering>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 100px;
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