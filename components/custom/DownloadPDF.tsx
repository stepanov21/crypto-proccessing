import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ArrowDownToLine, Mail } from "lucide-react";

const DownloadPDF = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex w-min gap-2.5 px-5" variant={"aside"}>
          <ArrowDownToLine size={20} />
          Скачать
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[569px]"
        aria-describedby="Создать нового продавца"
      >
        <DialogTitle>Ваш файл создается</DialogTitle>
        <div className="space-y-2.5">
          <Label>Введите Ваш адрес электронной почты</Label>
          <Input
            // onChange={(e) => setMerchantName(e.target.value)}
            // value={merchantName}
            placeholder="Ввести почтовый адрес"
            icon={<Mail size={20} />}
          />
        </div>
        <Button
          //   onClick={async () => {
          //     try {
          //       await useAddMerchant.mutateAsync({ name: merchantName });
          //       setIsWasAdded(true);
          //     } catch (e) {
          //       setIsWasAdded(true);
          //     }
          //   }}
          className="self-center"
        >Отправить</Button>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadPDF;
