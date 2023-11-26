import styled from "styled-components";

export const StartTradingLayout = styled.div`
  display: flex;
  padding: 160px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 1548px;
  position: relative;

  button {
    width: 886px;
    height: 134px;
    color: #000;
    font-size: 38.267px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    bottom: 290px;
    padding: 11.11px 33.44px;
  }
`;

export const TradingHeader = styled.div`
  font-size: 132.195px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.783px;
  background: linear-gradient(
    177deg,
    #fff 2.77%,
    rgba(255, 255, 255, 0) 139.85%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  top: 120px;
`;
