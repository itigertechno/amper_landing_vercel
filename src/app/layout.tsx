import type {PropsWithChildren} from 'react';
import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import "./_reset.scss";
import "./_index.scss";
import {Figtree} from 'next/font/google'


const openSans = Figtree({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default async function RootLayout({children}: PropsWithChildren) {
  return (
    <html className={openSans.variable}>
    <body>
    {children}
    </body>
    </html>
  );
}
