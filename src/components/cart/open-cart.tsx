import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-neutral-200 hover:cursor-pointer hover:border-amber-300 hover:text-amber-300 active:border-amber-400 active:text-amber-400">
      <ShoppingCartIcon className={clsx("h-4", className)} />

      {quantity ? (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 rounded-sm bg-amber-300 text-[11px] font-medium text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
