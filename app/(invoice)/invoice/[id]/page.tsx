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

const Page = () => {
  const params = useParams();
  console.log("🚀 ~ Page ~ params:", params);
  const { useMerchantGetInvoiceById } = useMerchant();
  const [time, setTime] = useState<number>();
  const [copy, setCopy] = useState(false);

  // data.expiration_time
  const { data, isPending, isError, error } = useMerchantGetInvoiceById(
    params.id as string,
  );

  console.log("🚀 ~ Page ~ data:", data)
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

  if (isPending) return <div className="loader"></div>;
  if (isError)
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div>Квитанция умерла</div>
      </div>
    );

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      {
        //@ts-ignore
        !data && error?.response?.status === 404 ? (
          <div className="flex h-full items-center justify-center">
            <div>Квитанция умерла</div>
          </div>
        ) : (
          <div
            className="flex w-full max-w-[569px] flex-col gap-[30px] rounded-[18px] bg-[#0C0716] p-8"
            aria-describedby="Создание ссылки"
          >
            <div className="purple-gradient rounded-[18px] p-5">
              <div className="mb-5 flex items-center gap-2.5">
                <Image
                  src={"/Neutronx.svg"}
                  width={40}
                  height={40}
                  alt="logo"
                />
                <span>Neutronx</span>
              </div>
              <Title className="roboto mb-4 text-[28px]">{`${data?.amount} ${data?.currency?.toUpperCase()}`}</Title>
              <div className="space-y-4">
                <Title>
                  <span className="mr-4 opacity-40">Network:</span>
                  {data?.network?.toUpperCase()}
                </Title>
                <div className="flex gap-2.5 rounded-[10px] text-ourGray opacity-30">
                  <CircleAlert />
                  <p className="font-medium leading-6">
                    Вы платите комиссию сети
                  </p>
                </div>
              </div>
            </div>
            <div className="purple-gradient flex gap-5 rounded-[18px] p-5">
              {/* <Image src={"/QR.svg"} width={94} height={94} alt="qr" /> */}
              <div className="flex flex-col gap-3 text-wrap">
                <div className="text-ourGray opacity-30">
                  Адрес кошелька получателя
                </div>
                <CopyToClipboard
                  text={data?.payment_address}
                  onCopy={() => setCopy(true)}
                >
                  <div className="flex cursor-pointer items-center gap-4">
                    {data?.payment_address}

                    {copy ? <Check size={20} /> : <Files size={20} />}
                  </div>
                </CopyToClipboard>
                <div className="text-ourGray opacity-30">
                  Вы получите уведомление, как только статус вашего платежа
                  измениться.
                </div>
                <div className="text-ourGreen">
                  Оставьте адрес своей электронной почты
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-7">
              <div className="middle-purple-gradient flex items-center rounded-[18px] p-4">
                <div className="loader"></div>
                <div className="ml-2.5 flex flex-col gap-2">
                  <span>Срок действия</span>
                  <span className="roboto text-ourGreen">
                    {isPending ? "00:00" : time} минут
                  </span>
                </div>
              </div>
              <div className="middle-purple-gradient flex items-center rounded-[18px] p-4">
                <div className="loader shrink-0"></div>
                <div className="ml-2.5 flex flex-col gap-2 pr-5 leading-6">
                  <span>Проверка транзакции в блокчейне</span>
                </div>
              </div>
            </div>
            <Button
              onClick={async () => {
                try {
                } catch (e) {}
              }}
              className="w-full self-center"
            >
              Оплатить с помощью NeutronX
            </Button>
          </div>
        )
      }
    </div>
  );
};

export default Page;
