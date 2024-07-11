"use client"
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { LandingPage } from "./_landingPage/LandingPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 bg-slate-200 text-primary border shadow-md">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={120} height={100} />
        </div>
        <div className="flex items-center space-x-4">
          {!isSignedIn && <SignInButton />}
          {isSignedIn && (
            <>
              <Link href="/dashboard">
                <Button className="text-white bg-primary hover:bg-gray-100">Dashboard</Button>
              </Link>
              <UserButton />
            </>
          )}
        </div>
      </nav>
      <main className="flex-grow">
        <LandingPage />
      </main>
    </div>
  );
}
