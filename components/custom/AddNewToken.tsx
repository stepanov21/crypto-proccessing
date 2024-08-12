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
import { ArrowDownToLine, Mail, Plus } from "lucide-react";

const AddNewToken = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-4" variant={"wallet"} size={"icon"}>
          <Plus size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="gap-[30px] sm:max-w-[569px]"
        aria-describedby="Создать нового продавца"
      >
        <DialogTitle>Запрос на добавление токена </DialogTitle>
        <div className="mt-[30px] space-y-2.5">
          <Label>Блокчейн</Label>
          <Input
            // onChange={(e) => setMerchantName(e.target.value)}
            // value={merchantName}
            placeholder="Ввести название блокчейна"
          />
        </div>
        <div className="space-y-2.5">
          <Label>Хеш</Label>
          <Input
            // onChange={(e) => setMerchantName(e.target.value)}
            // value={merchantName}
            placeholder="Ввести хеш"
          />
        </div>
        <div className="space-y-2.5">
          <Label>Коины или токены</Label>
          <Input
            // onChange={(e) => setMerchantName(e.target.value)}
            // value={merchantName}
            placeholder="Ввести хеш"
          />
        </div>
        <div className="space-y-2.5">
          <Label>Описание (не обязательно)</Label>
          <Input
            // onChange={(e) => setMerchantName(e.target.value)}
            // value={merchantName}
            placeholder="Добавить описание"
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
        >
          Отправить
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewToken;
