import { Skeleton } from '../ui/skeleton';

const MenuLoading = () => {
  return (
    <div className="w-full flex flex-col gap-6 ">
      {Array(3)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 bg-white shadow-sm p-5 rounded-lg animate-pulse"
          >
            <div className="space-y-2">
              <Skeleton className="h-[15px] w-80 rounded-xl" />
              <Skeleton className="h-[15px] w-72 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-[15px] w-full rounded-xl" />
              <Skeleton className="h-[35px] w-full rounded-xl" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuLoading;
