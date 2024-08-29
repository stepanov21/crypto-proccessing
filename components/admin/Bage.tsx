import Image from "next/image";
import React from "react";

const Bage = () => {
  return (
    <div className="flex w-full items-center">
      <div>
        <Image src={"/avatar.png"} width={60} height={60} alt="" />
      </div>
      <div className="ml-4 flex h-[60px] flex-col justify-between py-2">
        <span>advertiser@gmail.com</span>
        <div className="flex gap-4">
          <span>Email</span>
          <span>SMS</span>
          <span>KYC</span>
        </div>
      </div>
    </div>
  );
};

export default Bage;
