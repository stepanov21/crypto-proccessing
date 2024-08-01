import React from "react";
import { Button } from "../ui/button";
import { Title } from "../ui/title";

const MerchantWasCreated = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-[570px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[60px] rounded-[18px] bg-ourDarkPurple px-7 pb-20 pt-10">
      <div className="text-center">
        <Title>Поздравляем!</Title>
        <span>Новый продавец создан </span>
      </div>
      <div className="relative flex gap-3">
        <div className="flex h-6 min-w-6 items-center justify-center rounded-full bg-ourGreen pb-0.5 font-semibold text-black">
          1
        </div>
        <div>
          <h4 className="text-[18px] font-semibold">
            Пройти модерацию проэкта
          </h4>
          <p>
            Получите ключ API. Создайте ссылки для одноразовой оплаты и
            разместите их где угодно или отправьте каждому из своих клиентов.
          </p>
        </div>
        <div className="absolute left-[11px] top-5 h-36 border-l-2 border-dashed border-ourGreen"></div>
      </div>
      <div className="flex gap-3">
        <div className="flex h-6 min-w-6 items-center justify-center rounded-full bg-ourGreen pb-0.5 font-semibold text-black">
          2
        </div>
        <div>
          <h4 className="text-[18px] font-semibold">
            Интегрируйте NeutronX через API{" "}
          </h4>
          <p>
            Автоматически создавайте платеж прямо на своем сайте чтобы ваши
            клиенты могли его увидеть
          </p>
        </div>
      </div>
      <Button className="self-center">Перейти к настройкам</Button>
    </div>
  );
};

export default MerchantWasCreated;
