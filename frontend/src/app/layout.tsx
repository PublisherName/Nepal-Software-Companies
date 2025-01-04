import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <title>Software Companies Directory</title>
        <meta
          name='description'
          content='Discover and connect with leading software companies'
        />
        <meta name='keywords' content='software, companies, directory, tech' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
