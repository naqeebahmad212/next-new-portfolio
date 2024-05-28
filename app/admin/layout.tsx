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
import { redirect } from "next/navigation";
import AdminNav from "@/components/shared/AdminNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leye the Developer",
  description: "Leye the Developer Portfolio website",
  openGraph: {
    title: "Dashboard - Leye the Developer",
    description:
      "This is the admin page of Leye the Developer. Come and check it out!",
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
  if (!session) {
    redirect("/auth/signin");
  }
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });
  if (!currentUser || currentUser.role !== "admin") {
    redirect("/auth/signin");
  }
  return (
    <main className="bg-dark-1 flex gap-10">
      <div>
        <AdminNav />
      </div>
      <div>{children}</div>
    </main>
  );
}
