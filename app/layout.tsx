import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jotai 테스트",
  description: "jotai 테스트하는 페이지 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
