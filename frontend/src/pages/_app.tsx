import React from "react";
import { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Software Companies Directory</title>
        <meta
          name='description'
          content='Discover and connect with leading software companies'
        />
        <meta name='keywords' content='software, companies, directory, tech' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <main className='flex-grow'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
