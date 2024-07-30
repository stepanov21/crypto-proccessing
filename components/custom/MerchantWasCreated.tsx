import React from "react";
import { Button } from "../ui/button";
import { Title } from "../ui/title";

const MerchantWasCreated = () => {
  return (
    <div className="w-[570px] px-7 pt-10 pb-20 flex flex-col bg-ourDarkPurple gap-[60px] rounded-[18px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="text-center">
        <Title>Поздравляем!</Title>
        <span>Новый продавец создан </span>
      </div>
      <div className="flex gap-3 relative">
        <div className="min-w-6 h-6 bg-ourGreen text-black flex items-center justify-center rounded-full font-semibold pb-0.5">
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
        <div className="absolute h-36 border-l-2 border-dashed border-ourGreen top-5 left-[11px]"></div>
      </div>
      <div className="flex gap-3">
        <div className="min-w-6 h-6 bg-ourGreen text-black flex items-center justify-center rounded-full font-semibold pb-0.5">
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
