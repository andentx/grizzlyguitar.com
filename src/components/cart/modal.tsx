"use client";

import LoadingDots from "@/components/cart/loading-dots";
import ProductPrice from "@/components/product/product-price";
import { DEFAULT_OPTION } from "@/lib/constants";
import { createUrl } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { createCartAndSetCookie, redirectToCheckout } from "./actions";
import { useCart } from "./cart-context";
import { DeleteItemButton } from "./delete-item-button";
import { EditItemQuantityButton } from "./edit-item-quantity-button";
import OpenCart from "./open-cart";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal() {
  const { cart, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      if (!isOpen) {
        setIsOpen(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button
        aria-label="Open cart"
        onClick={openCart}
        className="rounded-md focus-visible:ring-offset-4 focus-visible:ring-offset-gray-800"
      >
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed top-0 right-0 bottom-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white p-6 text-black backdrop-blur-xl md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>
                <button
                  aria-label="Close cart"
                  onClick={closeCart}
                  className="rounded-md focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                >
                  <CloseCart />
                </button>
              </div>

              <div className="flex h-full flex-col justify-between">
                {!cart || cart.lines.length === 0 ? (
                  <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                    <ShoppingCartIcon className="h-16" />
                    <p className="mt-6 text-center text-2xl font-bold">
                      Your cart is empty.
                    </p>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                    <ul className="grow overflow-auto py-4">
                      {cart.lines
                        .sort((a, b) =>
                          a.merchandise.product.title.localeCompare(
                            b.merchandise.product.title
                          )
                        )
                        .map((item, i) => {
                          const merchandiseSearchParams =
                            {} as MerchandiseSearchParams;

                          item.merchandise.selectedOptions.forEach(
                            ({ name, value }) => {
                              if (value !== DEFAULT_OPTION) {
                                merchandiseSearchParams[name.toLowerCase()] =
                                  value;
                              }
                            }
                          );

                          const merchandiseUrl = createUrl(
                            `/product/${item.merchandise.product.handle}`,
                            new URLSearchParams(merchandiseSearchParams)
                          );

                          return (
                            <li
                              key={i}
                              className="flex w-full flex-col border-b border-neutral-300"
                            >
                              <div className="relative flex w-full flex-row justify-between px-1 py-4">
                                <div className="absolute z-40 -mt-2 -ml-1">
                                  <DeleteItemButton
                                    item={item}
                                    optimisticUpdate={updateCartItem}
                                  />
                                </div>
                                <div className="flex flex-row">
                                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300">
                                    <Image
                                      className="h-full w-full object-cover"
                                      width={64}
                                      height={64}
                                      alt={
                                        item.merchandise.product.featuredImage
                                          .altText ||
                                        item.merchandise.product.title
                                      }
                                      src={
                                        item.merchandise.product.featuredImage
                                          .url
                                      }
                                    />
                                  </div>
                                  <Link
                                    href={merchandiseUrl}
                                    onClick={closeCart}
                                    className="z-30 ml-2 flex flex-row space-x-4"
                                  >
                                    <div className="flex flex-1 flex-col text-base">
                                      <span className="leading-tight">
                                        {item.merchandise.product.title}
                                      </span>
                                      {item.merchandise.title !==
                                      DEFAULT_OPTION ? (
                                        <p className="text-sm text-neutral-500">
                                          {item.merchandise.title}
                                        </p>
                                      ) : null}
                                    </div>
                                  </Link>
                                </div>
                                <div className="flex h-16 flex-col justify-between">
                                  <ProductPrice
                                    className="flex justify-end space-y-2 text-right text-sm"
                                    amount={item.cost.totalAmount.amount}
                                    currencyCode={
                                      item.cost.totalAmount.currencyCode
                                    }
                                  />
                                  <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-300">
                                    <EditItemQuantityButton
                                      item={item}
                                      type="minus"
                                      optimisticUpdate={updateCartItem}
                                    />
                                    <p className="w-6 text-center">
                                      <span className="w-full text-sm">
                                        {item.quantity}
                                      </span>
                                    </p>
                                    <EditItemQuantityButton
                                      item={item}
                                      type="plus"
                                      optimisticUpdate={updateCartItem}
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
                <div className="mt-auto border-t border-neutral-200">
                  <div className="py-4 text-sm text-neutral-500">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1">
                      <p>Taxes</p>
                      <ProductPrice
                        className="text-right text-base text-black"
                        amount={cart?.cost?.totalTaxAmount?.amount || "0"}
                        currencyCode={
                          cart?.cost?.totalTaxAmount?.currencyCode || "USD"
                        }
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pt-1 pb-1">
                      <p>Shipping</p>
                      <p className="text-right">Calculated at checkout</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pt-1 pb-1">
                      <p>Total</p>
                      <ProductPrice
                        className="text-right text-base text-black"
                        amount={cart?.cost?.totalAmount?.amount || "0"}
                        currencyCode={
                          cart?.cost?.totalAmount?.currencyCode || "USD"
                        }
                      />
                    </div>
                  </div>
                  <form action={redirectToCheckout}>
                    <CheckoutButton />
                  </form>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

function CloseCart({ className }: { className?: string }) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-400 text-black hover:cursor-pointer hover:bg-neutral-400 active:bg-neutral-400">
      <XMarkIcon className={clsx("h-6", className)} />
    </div>
  );
}

function CheckoutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="block w-full rounded-full border border-black bg-amber-400 p-3 text-center text-sm font-medium text-black hover:cursor-pointer hover:bg-amber-500 active:bg-amber-600"
      type="submit"
      disabled={pending}
    >
      {pending ? <LoadingDots className="bg-black" /> : "Proceed to Checkout"}
    </button>
  );
}
