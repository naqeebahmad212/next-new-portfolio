import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import leyePic from "@/public/images/opengraph-image.png";
import Header from "@/components/shared/Header";
import MobileNav from "@/components/shared/MobileNav";
import Footer from "@/components/shared/Footer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leye the Developer",
  description: "Leye the Developer Portfolio website",
  openGraph: {
    title: "Home Page - Leye the Developer",
    description:
      "This is the home page of Leye the Developer. Come and check it out!",
    url: "localhost:3000/",
    images: [
      {
        url: leyePic.src,
        width: 800,
        height: 600,
        alt: "Awesome Image",
      },
    ],
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });
  return (
    <main className="bg-dark-1">
      <MobileNav />
      <Header user={currentUser} />
      {children}
      <Footer />
    </main>
  );
}
