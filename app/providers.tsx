"use client";

import { UserProvider } from "@/app/context/user-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
