import React from "react";
import {
  StartTradingLayout,
  TradingHeader,
} from "../styles/StartTradingLayout";
import ButtonLayout from "../styles/ButtonLayout";
import { StaticImage } from "gatsby-plugin-image";

const StartTrading = () => {
  return (
    <StartTradingLayout>
      <TradingHeader>Get started now.</TradingHeader>
      <StaticImage
        src="../assets/Images/tradingStart.png"
        alt="phone"
        width={544}
        height={1109}
      />
      <ButtonLayout>Start Trading!</ButtonLayout>
    </StartTradingLayout>
  );
};

export default StartTrading;
