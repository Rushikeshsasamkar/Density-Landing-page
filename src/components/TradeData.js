import React from "react";
import { TradeDataLayout, DataContainer } from "../styles/TradeDataLayout";
import { StaticImage } from "gatsby-plugin-image";
const TradeData = () => {
  return (
    <TradeDataLayout>
      <DataContainer>
        <div className="numberData">00%</div>
        <div className="textData">Conversion Fee</div>
      </DataContainer>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <DataContainer>
        <div className="numberData">500 Mn+</div>
        <div className="textData">Lifetime Volume Traded</div>
      </DataContainer>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <DataContainer>
        <div className="numberData">250+</div>
        <div className="textData">Total Tradable Pairs</div>
      </DataContainer>
      <StaticImage src="../assets/Images/line.png" alt="line" height={172} />
      <DataContainer>
        <div className="numberData">15,000+</div>
        <div className="textData">Traders</div>
      </DataContainer>
    </TradeDataLayout>
  );
};

export default TradeData;
