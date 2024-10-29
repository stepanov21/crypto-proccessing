const WalletSkeleton = () => {
  return (
    <div className="flex animate-pulse items-center gap-1.5 dark:text-black">
      <div className="relative h-10 w-10 rounded-full bg-gray-200">
        <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-gray-400"></div>
      </div>
      <div className="mr-auto flex flex-col gap-2">
        <div className="h-4 w-16 rounded bg-gray-200"></div>
        <div className="h-4 w-12 rounded bg-gray-200"></div>
      </div>
      <div className="flex flex-col items-end gap-2 font-medium">
        <div className="h-4 w-10 rounded bg-gray-200"></div>
        <div className="h-4 w-10 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

export default WalletSkeleton;
