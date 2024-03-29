import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Sugar Track</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <>Welcome to Sugar Track</>
      </ChakraProvider>
    </>
  );
}
