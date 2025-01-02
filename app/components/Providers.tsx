"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CaProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="subscription" // إذا كنت تستخدم اشتراكات متكررة
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://next-commerce-rose.vercel.app/success"
      cancelUrl="https://next-commerce-rose.vercel.app/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
