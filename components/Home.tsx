"use client";

import { useState } from "react";
import InformationCrypto from "./InformationCrypto";
import Input from "./Input";
import MainCrypto from "./MainCrypto";
import StatsCrypto from "./StatsCrypto";
import TickerCrypto from "./TickerCrypto";

const HomeComponent = () => {
  const [name, setName] = useState<string>("");
  const [income, setIncome] = useState<string>("");
  const [step, setStep] = useState<number>(0);

  const handleEnterPress = () => {
    // alert(`You pressed Enter! Input value: ${text}`);
    setStep(step + 1);
  };

  return (
    <>
      <div className="flex items-center justify-center h-svh">
        {step === 0 && (
          <div className="mt-4">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              onEnterPress={handleEnterPress}
              placeholder="Enter your name"
              label="IDENTIFY YOURSELF, TRADER"
            />
          </div>
        )}
        {step === 1 && (
          <div className="mt-4">
            <Input
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              onEnterPress={handleEnterPress}
              placeholder="Enter current monthly income"
              label="CURRENT TRADING INCOME"
            />
          </div>
        )}
        {/* {step === 2 && (
        <div className="mt-4">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onEnterPress={handleEnterPress}
            error={""}
            label="IDENTIFY YOURSELF, TRADER█"
          />
        </div>
      )} */}
      </div>
      {step === 2 && (
        <>
          <TickerCrypto />
          <InformationCrypto />
          <MainCrypto />
          <StatsCrypto />
        </>
      )}
    </>
  );
};

export default HomeComponent;
