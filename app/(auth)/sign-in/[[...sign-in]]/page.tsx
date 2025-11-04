import Image from "next/image"; 
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex h-full flex-col items-center justify-center px-4 lg:px-8">
        <div className="space-y-4 text-center pt-16">
          <h1 className="text-3xl font-bold text-[#2E2A47]">
            Welcome Back!
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or create an account to get back to your dashboard!
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>

      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="logo"/>
      </div>
    </div>
  );
}
