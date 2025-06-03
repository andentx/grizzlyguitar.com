import clsx from "clsx";

function ProductGrid(props: React.ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className={clsx(
        "grid grid-flow-row gap-4 sm:gap-6 lg:gap-8",
        props.className
      )}
    >
      {props.children}
    </ul>
  );
}

function ProductGridItem(props: React.ComponentProps<"li">) {
  return (
    <li {...props} className={clsx("transition-opacity", props.className)}>
      {props.children}
    </li>
  );
}

ProductGrid.Item = ProductGridItem;

export default ProductGrid;
