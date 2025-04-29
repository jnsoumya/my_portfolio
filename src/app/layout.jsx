import { Open_Sans } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { ThemeProvider } from "@/components/theme-provider";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Data Analyst Portfolio",
  description: "Portfolio website for a data analyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
        {/* <SidebarProvider defaultOpen={false} ></SidebarProvider> */}
        {/* </ThemeProvider> */}

        {children}
      </body>
    </html>
  );
}
