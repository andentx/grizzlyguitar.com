import * as React from "react";
import { Link } from "gatsby";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useNavigationContext } from "../context/navigation_context";
import { useCartContext } from "../context/cart_context";

const CartButton = ({ tabIndex }) => {
  const { closeMobileNavigation } = useNavigationContext();
  const { checkout } = useCartContext();
  const cartItemCount = checkout.lineItems ? checkout.lineItems.length : 0;

  return (
    <>
      <Link
        to="/cart"
        className="flex items-center justify-between p-2 rounded-md group focus:ring focus:ring-amber-400 focus:outline-none"
        onClick={closeMobileNavigation}
        tabIndex={tabIndex}
      >
        <p className="text-3xl text-white transition-colors ease-in-out 700px:text-base group-hover:text-amber-400 group-active:text-amber-500 ">
          cart
        </p>
        <ShoppingBagIcon
          className="flex-shrink-0 w-6 mx-2 text-white transition-colors ease-in-out group-hover:text-amber-400 group-active:text-amber-500"
          aria-hidden="true"
        />
        <p className="w-5 text-3xl font-medium text-white transition-colors ease-in-out 700px:text-base group-hover:text-amber-400 group-active:text-amber-500">
          {cartItemCount}
        </p>
        <span className="sr-only">items in cart, view bag</span>
      </Link>
    </>
  );
};

export default CartButton;
