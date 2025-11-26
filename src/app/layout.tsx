import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "next-themes";
import { Meteors } from "@/components/ui/meteors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taruto-f's Website",
  description: "Welcome to Taruto-f's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem>
          <SidebarProvider>
            <div className="flex min-h-screen relative">
              {/* Meteors background for the entire app */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <Meteors number={30} />
              </div>
              <AppSidebar />
              <main className="flex-1 p-8 relative z-10">
                <SidebarTrigger />
                {children}
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
