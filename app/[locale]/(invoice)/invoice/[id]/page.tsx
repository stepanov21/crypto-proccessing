"use client";
import { useMerchant } from "@/api/merchant/queries";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { Check, CircleAlert, Files } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getExpTime } from "@/lib/utils";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslations } from "next-intl";

const Page = () => {
  const params = useParams();
  const t = useTranslations("Invoice");
  console.log("🚀 ~ Page ~ params:", params);
  const { useMerchantGetInvoiceById } = useMerchant();
  const [time, setTime] = useState<number>();
  const [copy, setCopy] = useState(false);

  // data.expiration_time
  const { data, isPending, isError, error } = useMerchantGetInvoiceById(
    params.id as string,
  );

  console.log("🚀 ~ Page ~ data:", data);

  useEffect(() => {
    if (!copy) return;
    setTimeout(() => setCopy(false), 3000);
  }, [copy]);

  //eslint-disable-next-line
  useEffect(() => {
    setTime(getExpTime(data?.expiration_time));
    const interval = setInterval(
      () => setTime(getExpTime(data?.expiration_time)),
      10000,
    );
    return () => clearInterval(interval);
  });

  if (isError)
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div>Квитанция умерла</div>
      </div>
    );

  if (isPending) return <div className="loader"></div>;

  if (data?.status === "finished")
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-[18px] bg-ourGreen px-12 py-10 font-semibold text-black">
          Платеж прошел успешно!
        </div>
      </div>
    );

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div
        className="flex w-full max-w-[569px] flex-col gap-[30px] rounded-[18px] bg-[#0C0716] p-8"
        aria-describedby="Создание ссылки"
      >
        <div className="purple-gradient rounded-[18px] p-5">
          <div className="mb-5 flex items-center gap-2.5">
            <Image src={"/Neutronx.svg"} width={40} height={40} alt="logo" />
            <span>Neutronx</span>
          </div>
          <Title className="roboto mb-4 text-[28px] dark:text-white">{`${data?.amount} ${data?.currency?.toUpperCase()}`}</Title>
          <div className="space-y-4">
            <Title className="dark:text-white">
              <span className="mr-4 opacity-40">Network:</span>
              {data?.network?.toUpperCase()}
            </Title>
            <div className="flex gap-2.5 rounded-[10px] text-ourGray opacity-30">
              <CircleAlert />
              <p className="font-medium leading-6">{t("warn")}</p>
            </div>
          </div>
        </div>
        <div className="purple-gradient flex gap-5 rounded-[18px] p-5">
          {/* <Image src={"/QR.svg"} width={94} height={94} alt="qr" /> */}
          <div className="flex flex-col gap-3 text-wrap">
            <div className="text-ourGray opacity-30">{t("address")}</div>
            <CopyToClipboard
              text={data?.payment_address}
              onCopy={() => setCopy(true)}
            >
              <div className="flex cursor-pointer items-center gap-4">
                {data?.payment_address}

                {copy ? <Check size={20} /> : <Files size={20} />}
              </div>
            </CopyToClipboard>
            <div className="text-ourGray opacity-30">{t("desc")}</div>
            {/* <div className="text-ourGreen">
              Оставьте адрес своей электронной почты
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="middle-purple-gradient flex items-center rounded-[18px] p-4">
            <div className="loader"></div>
            <div className="ml-2.5 flex flex-col gap-2">
              <span>{t("time")}</span>
              <span className="roboto text-ourGreen">
                {isPending ? "00:00" : time} {t("minutes")}
              </span>
            </div>
          </div>
          <div className="middle-purple-gradient flex items-center rounded-[18px] p-4">
            {data.status === "pending" ? (
              <>
                <div className="loader shrink-0"></div>
                <div className="ml-2.5 flex flex-col gap-2 pr-5 leading-6">
                  <span>{t("verify")}</span>
                </div>
              </>
            ) : (
              <>
                <Check size={20} />
                <div className="ml-2.5 flex flex-col gap-2 pr-5 leading-6">
                  <span>{t("verify")}</span>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <Button
          onClick={async () => {
            try {
            } catch (e) {}
          }}
          className="w-full self-center"
        >
          Оплатить с помощью NeutronX
        </Button> */}
      </div>
    </div>
  );
};

export default Page;
