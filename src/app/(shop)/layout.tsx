import { TopMenu } from "@/components";
import React from "react";

export default function ShopLayout ({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <TopMenu />
      <div className="px-0 sm:px-10">
        {children}
      </div>
    </div>
  )
}