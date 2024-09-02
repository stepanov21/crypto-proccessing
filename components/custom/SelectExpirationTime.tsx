import React, { useEffect } from "react";
import { Slider } from "../ui/slider";
import { Title } from "../ui/title";
import { useTranslations } from "next-intl";

const expTime = ["15m", "30m", "1h"];

const SelectExpirationTime = ({ setValue }: { setValue: any }) => {
  const t = useTranslations("Payment");
  useEffect(() => {
    setValue("payment_duration", expTime[0]);
    //eslint-disable-next-line
  }, []);
  return (
    <div className="mt-10">
      <Title>{t("5st title")}</Title>
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
        <div className="rounded-[10px] border border-white bg-ourPurple px-3 py-2 dark:bg-ourGray">
          15m
        </div>
        <div className="relative -translate-x-1 rounded-[10px] border border-white bg-ourPurple px-3 py-2 dark:bg-ourGray">
          30m
        </div>
        <div className="rounded-[10px] border border-white bg-ourPurple px-3 py-2 dark:bg-ourGray">
          1h
        </div>
      </div>
    </div>
  );
};

export default SelectExpirationTime;
