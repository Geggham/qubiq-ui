import React, { useState, useMemo } from "react";
import logo from "./pictures/logo.png";
import logoMain from "./pictures/logo1.png";
import background from "./pictures/background.png";

const MENU_ITEMS = [
  "Home",
  "About",
  "How it works",
  "Token design",
  "YARD flywheel",
];

const ACTIONS = ["Join Whitelist", "Read Docs"];

function App() {
  const [active, setActive] = useState("Home");
  const [activeButton, setActiveButton] = useState(ACTIONS[0]);

  const buttons = useMemo(
    () =>
      ACTIONS.map((action) => (
        <button
          key={action}
          onClick={() => setActiveButton(action)}
          className={`rounded-[38px] flex items-center justify-center font-archivo font-semibold text-[16px] leading-[140%] tracking-[0.02em] h-[57px] ${
            activeButton === action
              ? "w-[329px] bg-[#2D2D2D] text-white"
              : "w-[208px] bg-[#E6E8EC] text-[#2D2D2D]"
          }`}
        >
          {action}
        </button>
      )),
    [activeButton]
  );

  return (
    <div className="h-screen flex justify-center items-center bg-[rgb(240,240,240)]">
      <div
        className="relative w-[80%] h-full bg-contain bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-[25.93px] h-[26.13px] object-contain"
          />
          <span className="text-[16.88px] leading-[100%] text-black font-gilroy font-semibold">
            Backyard
          </span>
        </div>

        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-[10px] p-[3px] h-[44px] rounded-full border bg-[#F3F4F6] border-[#E1E1E275] font-konnect">
            {MENU_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`h-[38px] px-[11px] rounded-full text-[13px] leading-[100%] font-medium transition-colors whitespace-nowrap ${
                  active === item
                    ? "bg-[#303030] text-[#FBFBFC]"
                    : "bg-transparent text-[#AEB0B1]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute top-40 left-6 flex items-start gap-10 w-full flex-wrap sm:flex-nowrap">
          <div className="flex flex-col items-start space-y-6 w-full">
            <div className="flex items-center gap-10 w-full justify-between flex-wrap sm:flex-nowrap">
              <h1 className="text-[72px] leading-[110%] tracking-[0] text-[#303030] font-archivo font-semibold text-center sm:text-left">
                <div>The yield-backed</div>
                <div>stablecoin protocol</div>
                <div>boosting DeFi liquidity</div>
              </h1>
              <img
                src={logoMain}
                alt="Big Logo"
                className="w-[212px] h-[212px] object-contain mx-auto sm:mx-0"
              />
            </div>

            <h3 className="text-[20px] leading-[100%] tracking-[0] text-[#2626268C] font-gilroy font-normal text-center sm:text-left">
              Keep your yield working for you — we keep your liquidity
              accessible
            </h3>

            <div className="flex items-center gap-4 mt-2 pt-[40px] justify-center sm:justify-start">
              {buttons}
            </div>

            <h2 className="text-left text-[#303030] mt-[50px] pt-[80px] font-archivo font-bold text-[42px] leading-[120%]">
              What is Backyard?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
