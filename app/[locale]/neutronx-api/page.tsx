import { Title } from "@/components/ui/title";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { accountTable, consumersTable, showTable } from "./tablesData";

const page = () => {
  return (
    <div className="grid grid-cols-[2fr_5fr_5fr] gap-5">
      <aside></aside>
      <main>
        <span className="mr-auto text-[32px] font-semibold dark:text-black">
          Публичный API NeutronX
        </span>
        <TitleApi>Аутентификация</TitleApi>
        <p className="mb-10">
          NeutronX использует токены Bearer для аутентификации. Токен XXX
          указывает серверу API, что запрос поступает от вас. С вашим токеном
          XXX вы можете получить доступ ко всем доступным вам ресурсам в
          NeutronX. Вы можете сгенерировать токен XXX в настройках вашего
          аккаунта NeutronX.
        </p>
        <TitleApi>Про NeutronX API</TitleApi>
        <ol className="mb-10 ml-4 list-decimal space-y-4">
          <li>
            Для отправки запросов к конечным точкам API требуется действительный
            токен Bearer. API отвечает на запросы в формате JSON.
          </li>
          <li>
            Если запрос к API сталкивается с ошибкой, она включается в ответ
            JSON в виде ключа error.
          </li>
        </ol>
        <TitleApi>Поддержка</TitleApi>
        <p className="mb-10">
          По всем вопросам и для получения помощи с доступом к API NeutronX,
          пожалуйста, обращайтесь на электронную почту: neutronx@gmail.com.
        </p>
        <TitleApi>Авторизация</TitleApi>
        <div className="grid grid-cols-[2fr_3fr]">
          <span>Токен</span>
          <span>XXX Токен или API ключ </span>
        </div>
        <span className="mb-5 mr-auto mt-20 inline-block text-[28px] font-semibold dark:text-black">
          1. Account
        </span>
        <TableDemo
          firstTitle="Endpoint"
          secondTitle="Action"
          items={accountTable}
        />
        <Authorization />
        <span className="mb-5 mr-auto mt-20 inline-block text-[24px] font-semibold dark:text-black">
          1.1. Show
        </span>
        <Endpoint>core.energy/api/account</Endpoint>
        <TableDemo
          firstTitle="Account field "
          secondTitle="Description "
          items={showTable}
        />
        <Authorization />
        <Headers />
        <span className="mb-5 mr-auto mt-20 inline-block text-[24px] font-semibold dark:text-black">
          1.2. Top Up
        </span>
        <Endpoint>core.energy/api/account</Endpoint>
        <Authorization />
        <Headers />
        <span className="mb-5 mr-auto mt-20 inline-block text-[28px] font-semibold dark:text-black">
          2. Consumers
        </span>
        <TableDemo
          firstTitle="Endpoint"
          secondTitle="Action"
          items={consumersTable}
        />
        <Authorization />
        <span className="mb-5 mr-auto mt-20 inline-block text-[24px] font-semibold dark:text-black">
          2.1. Index
        </span>
        <Endpoint>core.energy/api/account</Endpoint>
        <TableDemo
          firstTitle="Endpoint"
          secondTitle="Action"
          items={consumersTable}
        />
        <TableDemo
          firstTitle="Endpoint"
          secondTitle="Action"
          items={consumersTable}
        />
        <Authorization />
        <Headers />
      </main>
      <div className="bg-ourPurple"></div>
    </div>
  );
};

const Headers = () => {
  return (
    <div className="mt-10 max-w-[300px]">
      <TitleApi>Headers</TitleApi>
      <div className="mt-3 flex justify-between">
        <span>Accept </span>
        <span>application</span>
      </div>
      <div className="mt-3 flex justify-between">
        <span>Content-Type </span>
        <span>application </span>
      </div>
    </div>
  );
};

const Authorization = () => {
  return (
    <div className="mt-10">
      <TitleApi>Authorization</TitleApi>
      <p>This folder is using</p>
    </div>
  );
};

const Endpoint = ({ children }: { children: string }) => {
  return (
    <div className="mb-10 rounded-[10px] bg-[#D9D9D9] p-2.5 text-black">
      {children}
    </div>
  );
};

function TableDemo({
  firstTitle,
  secondTitle,
  items,
}: {
  firstTitle: string;
  secondTitle: string;
  items: any[];
}) {
  return (
    <Table className="border-[2px] border-[#674D8F]">
      <TableHeader>
        <TableRow>
          <TableHead>{firstTitle}</TableHead>
          <TableHead>{secondTitle}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((row) => (
          <TableRow
            className="border-[2px] border-[#674D8F] bg-[#37304B]"
            key={row.endpoint}
          >
            <TableCell className="w-1/2">{row.left}</TableCell>
            <TableCell>{row.right}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const TitleApi = ({ children }: { children: string }) => {
  return <Title className="text-2xl font-semibold">{children}</Title>;
};

export default page;
