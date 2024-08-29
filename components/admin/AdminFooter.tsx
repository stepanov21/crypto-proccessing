import React from "react";

const AdminFooter = () => {
  return (
    <footer className="container mx-auto my-40 max-w-[1200px] dark:text-black lg:my-20">
      <div className="grid grid-cols-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h5>Our Service </h5>
          <a href="">Crypto merchant </a>
          <a href="">Merchant Telegram bot </a>
        </div>
        <div className="flex flex-col gap-4 lg:mb-16">
          <h5>For developers </h5>
          <a href="">Documentation</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5>For Users </h5>
          <a href="">FAQ</a>
          <a href="">Support </a>
        </div>
        <div className="flex flex-col gap-4">
          <h5>Subscribe </h5>
          <a href="">Crypto merchant </a>
          <a href="">Merchant Telegram bot </a>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-between border-t border-[#7F808D] pt-6 text-sm text-[#7F808D] lg:gap-4">
        <span>© 2024 merch, All Rights Reserved.</span>
        <span>Privacy policy</span>
        <span>Terms of condition</span>
      </div>
    </footer>
  );
};

export default AdminFooter;
