import clsx from "clsx";
import Image from "next/image";

export function ProductImageThumbnail({
  isInteractive = true,
  active,
  alt,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        "group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-amber-400",
        {
          "border-2 border-amber-400": active,
          "border-neutral-200": !active,
        }
      )}
    >
      {props.src ? (
        <Image
          className={clsx("relative h-full w-full object-contain", {
            "group-hover:opacity-80": isInteractive,
          })}
          alt=""
          {...props}
        />
      ) : null}
    </div>
  );
}
