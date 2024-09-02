import React from "react";
import { Button } from "../ui/button";
import { DialogTitle } from "../ui/dialog";
import { useTranslations } from "next-intl";

const MerchantWasCreated = () => {
  const t = useTranslations("Success Merchant Popap");
  return (
    <>
      <div className="text-center dark:text-black">
        <DialogTitle>{t("h1")}</DialogTitle>
        <span className="mt-2 inline-block">{t("text")}</span>
      </div>
      <div className="relative flex gap-3">
        <div className="flex h-6 min-w-6 items-center justify-center rounded-full bg-ourGreen pb-0.5 font-semibold text-black dark:bg-black dark:text-white">
          1
        </div>
        <div className="dark:text-black">
          <h4 className="mb-2.5 mt-1 text-[18px] font-semibold">
            {t("1st title")}
          </h4>
          <p>{t("1st text")}</p>
        </div>
        <div className="absolute left-[11px] top-5 -z-10 h-36 border-l-2 border-dashed border-ourGreen dark:border-[#7F808D]"></div>
      </div>
      <div className="flex gap-3">
        <div className="flex h-6 min-w-6 items-center justify-center rounded-full bg-ourGreen pb-0.5 font-semibold text-black dark:bg-black dark:text-white">
          2
        </div>
        <div className="dark:text-black">
          <h4 className="mb-2.5 mt-1 text-[18px] font-semibold">
            {t("2st title")}
          </h4>
          <p>{t("2st text")}</p>
        </div>
      </div>
      <Button className="self-center">{t("btn")}</Button>
    </>
  );
};

export default MerchantWasCreated;
