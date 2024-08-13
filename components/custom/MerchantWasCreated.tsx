import React from "react";
import { Button } from "../ui/button";
import { DialogTitle } from "../ui/dialog";

const MerchantWasCreated = () => {
  return (
    <>
      <div className="text-center dark:text-black">
        <DialogTitle>Поздравляем!</DialogTitle>
        <span className="mt-2 inline-block">Новый продавец создан </span>
      </div>
      <div className="relative flex gap-3">
        <div className="flex h-6 min-w-6 items-center justify-center rounded-full bg-ourGreen pb-0.5 font-semibold text-black dark:bg-black dark:text-white">
          1
        </div>
        <div className="dark:text-black">
          <h4 className="mb-2.5 mt-1 text-[18px] font-semibold">
            Пройти модерацию проэкта
          </h4>
          <p>
            Получите ключ API. Создайте ссылки для одноразовой оплаты и
            разместите их где угодно или отправьте каждому из своих клиентов.
          </p>
        </div>
        <div className="absolute left-[11px] top-5 -z-10 h-36 border-l-2 border-dashed border-ourGreen dark:border-[#7F808D]"></div>
      </div>
      <div className="flex gap-3">
        <div className="flex h-6 min-w-6 items-center justify-center rounded-full bg-ourGreen pb-0.5 font-semibold text-black dark:bg-black dark:text-white">
          2
        </div>
        <div className="dark:text-black">
          <h4 className="mb-2.5 mt-1 text-[18px] font-semibold">
            Интегрируйте NeutronX через API{" "}
          </h4>
          <p>
            Автоматически создавайте платеж прямо на своем сайте чтобы ваши
            клиенты могли его увидеть
          </p>
        </div>
      </div>
      <Button className="self-center">Перейти к настройкам</Button>
    </>
  );
};

export default MerchantWasCreated;
