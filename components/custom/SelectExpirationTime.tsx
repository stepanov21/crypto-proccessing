import React from "react";
import { Slider } from "../ui/slider";
import { Title } from "../ui/title";

const expTime = ["15m", "30m", "1h"];

const SelectExpirationTime = ({ setValue }: { setValue: any }) => {
  return (
    <div className="mt-10">
      <Title>Выберите время истечения срока платежа</Title>
      <Slider
        onChange={(e: any) =>
          setValue("payment_duration", expTime[e.target.value])
        }
        className="mt-6"
        defaultValue={[0]}
        max={2}
        step={1}
      />
      <div className="mt-4 flex items-center justify-between">
        <div className="rounded-[10px] border border-white bg-ourPurple dark:bg-ourGray px-3 py-2">
          15m
        </div>
        <div className="relative -translate-x-1 rounded-[10px] border border-white bg-ourPurple dark:bg-ourGray px-3 py-2">
          30m
        </div>
        <div className="rounded-[10px] border border-white bg-ourPurple dark:bg-ourGray px-3 py-2">
          1h
        </div>
      </div>
    </div>
  );
};

export default SelectExpirationTime;
