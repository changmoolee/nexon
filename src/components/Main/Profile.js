import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faArrowRotateRight,
  faBell,
  faShareAlt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import ReportModal from "../Modal/ReportModal";

const Container = styled.section`
  width: 1000px;
  height: 177px;
  background: transparent;
  border-left: 4px solid #07f;
  z-index: 0;
`;
const Background = styled.img`
  position: absolute;
  width: 1000px;
  height: inherit;
  object-fit: cover;
  z-index: 1;
`;
const Nick = styled.div`
  position: absolute;
  width: 70%;
  height: 150px;
  display: flex;
  background: transparent;
  padding-top: 26px;
  z-index: 2;
`;
const Character = styled.img`
  width: 164px;
  height: 123px;
  object-fit: cover;
`;
const Name = styled.div`
  width: 511px;
  height: 123px;
  display: flex;
  flex-direction: column;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  font-size: 45px;
  font-weight: 900;
  font-family: Noto Sans KR;
  color: #1f334a;
  letter-spacing: -1px;
`;
const License = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;
const Buttons = styled.div`
  display: flex;
`;
const TeamSelect = styled.div`
  display: flex;
  width: 220px;
  height: 50px;
  padding-right: 15px;
`;
const Indi = styled.span`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-weight: 700;
  font-size: 12px;
  border: 1px solid #07f;
  border-radius: 5px 0 0 5px;
  color: ${({ isTeamSelected }) => (isTeamSelected ? "#07f" : "white")};
  background: ${({ isTeamSelected }) => (isTeamSelected ? "white" : "#2777ff")};
  cursor: pointer;
  :hover {
    color: white;
    background: #2777ff;
  }
`;
const Team = styled.span`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid #07f;
  border-radius: 0 5px 5px 0;
  color: ${({ isTeamSelected }) => (isTeamSelected ? "white" : "#07f")};
  background: ${({ isTeamSelected }) => (isTeamSelected ? "#2777ff" : "white")};
  cursor: pointer;
  :hover {
    color: white;
    background: #2777ff;
  }
`;
const TeamIconContainer = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;

const Line = styled.div`
  width: 1px;
  height: 14px;
  margin-top: 26px;
  background: #ececec;
`;

const UserAction = styled.div`
  display: flex;
  width: 280px;
  height: 50px;
  margin-left: 10px;
  color: #1f334a;
  letter-spacing: -1px;
  cursor: pointer;
`;

const Action = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 25px;
  margin-top: 20px;
  margin-right: 10px;
  font-size: 12px;
  border: 0.7px solid #1f334a;
  border-radius: 15px;
  color: #1f334a;
`;
const ActionIconContainer = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;
const Views = styled.section`
  width: 325px;
  height: 123px;
  display: flex;
  align-content: center;
`;
const ViewsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
`;
const ViewsDesc = styled.div`
  font-size: 14px;
  font-family: Noto Sans KR;
  color: #6c7a89;
  white-space: nowrap;
`;
const ViewsNum = styled.div`
  font-size: 20px;
  color: #6c7a89;
  letter-spacing: -1px;
`;

const Profile = ({ data }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isTeamSelected, setIsTeamSelected] = useState(false);

  const openReport = () => {
    setIsReportOpen(true);
  };

  const closereport = () => {
    setIsReportOpen(false);
  };

  const indiSelect = () => {
    setIsTeamSelected(false);
  };

  const teamSelect = () => {
    setIsTeamSelected(true);
  };

  return (
    <Container>
      {isReportOpen ? <ReportModal closereport={closereport} /> : null}
      <Background src="https://tmi.nexon.com/img/background_flag_w.png" />
      <Nick>
        <Character src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418.png" />
        <Name>
          <Heading>
            {data.nickName}
            <License src="https://tmi.nexon.com/img/icon_l3.png" />
          </Heading>
          <Buttons>
            <TeamSelect>
              <Indi isTeamSelected={isTeamSelected} onClick={indiSelect}>
                <TeamIconContainer>
                  <FontAwesomeIcon icon={faUser} />
                </TeamIconContainer>
                개인전
              </Indi>
              <Team isTeamSelected={isTeamSelected} onClick={teamSelect}>
                <TeamIconContainer>
                  <FontAwesomeIcon icon={faUsers} />
                </TeamIconContainer>
                팀전
              </Team>
            </TeamSelect>
            <Line />
            <UserAction>
              <Action>
                <ActionIconContainer>
                  <FontAwesomeIcon icon={faArrowRotateRight} />
                </ActionIconContainer>
                전적갱신
              </Action>
              <Action onClick={openReport}>
                <ActionIconContainer>
                  <FontAwesomeIcon icon={faBell} />
                </ActionIconContainer>
                신고하기
              </Action>
              <Action>
                <ActionIconContainer>
                  <FontAwesomeIcon icon={faShareAlt} />
                </ActionIconContainer>
                공유하기
              </Action>
            </UserAction>
          </Buttons>
        </Name>
        <Views>
          <ViewsBox>
            <ViewsDesc>
              <FontAwesomeIcon icon={faEye} />
              &nbsp;페이지뷰
            </ViewsDesc>
            <ViewsNum>2000</ViewsNum>
          </ViewsBox>
        </Views>
      </Nick>
    </Container>
  );
};

export default Profile;
