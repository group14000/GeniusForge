"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { LandingPage } from "./_landingPage/LandingPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={120} height={100} />
        </div>
        <div className="flex items-center space-x-4">
          {!isSignedIn && <SignInButton />}
          {isSignedIn && (
            <>
              <Link href="/dashboard">
                <Button className="text-white bg-primary hover:bg-primary-dark">Dashboard</Button>
              </Link>
              <UserButton />
            </>
          )}
        </div>
      </nav>
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Create Content with AI</h1>
            <p className="text-xl mb-8">Generate high-quality content effortlessly with our AI-powered tool.</p>
            <Button className="text-primary bg-white hover:bg-gray-100">Get Started</Button>
          </div>
        </section>
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p className="text-gray-700">Pellentesque euismod, urna eu tincidunt congue, nisi nisl aliquam velit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p className="text-gray-700">Fusce accumsan nisi non justo placerat, sed pellentesque felis dapibus.</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">&quot;This tool has revolutionized the way I create content!&quot;</p>
                <p className="font-semibold">- User A</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">&quot;Efficient and easy to use. Highly recommend!&quot;</p>
                <p className="font-semibold">- User B</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">&quot;A game-changer for content creation.&quot;</p>
                <p className="font-semibold">- User C</p>
              </div>
            </div>
          </div>
        </section>
        <LandingPage />
      </main>
      <footer className="bg-white py-8 shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 AI Content Generator. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/privacy-policy">
              <p className="text-gray-600 hover:text-primary">Privacy Policy</p>
            </Link>
            <Link href="/terms-of-service">
              <p className="text-gray-600 hover:text-primary">Terms of Service</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-600 hover:text-primary">Contact</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
