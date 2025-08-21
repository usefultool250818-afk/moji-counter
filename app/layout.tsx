// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moji-counter-xi.vercel.app"),
  title: {
    default: "文字数カウンター",
    template: "%s | 文字数カウンター",
  },
  description: "文字数・単語・行・UTF-8バイトを即時カウント。上限チェックやコピー/ダウンロード対応。",
  keywords: ["文字数カウンター", "ワードカウント", "文字数", "UTF-8", "バイト数", "カウントツール"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "文字数カウンター",
    title: "文字数カウンター",
    description: "ブラウザ内で完結する軽量カウントツール。",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "文字数カウンター" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // あれば入力
    creator: "@", // あれば入力
    title: "文字数カウンター",
    description: "ブラウザ内で完結する軽量カウントツール。",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "utility",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEF2FF" }, // indigo-50相当
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },  // slate-950相当
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100`}
      >
        {/* 背景のうっすらグラデーション（参考サイトライクな淡い雰囲気） */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 via-transparent to-transparent dark:from-indigo-950/30" />

        {/* ヘッダー */}
        <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            <a href="/" className="font-semibold tracking-tight">文字数カウンター</a>
            <nav className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              {/* 参考サイトへのリンク（任意で表示） */}
              <a
                href="https://qr-generator-bice-nu.vercel.app/"
                className="rounded-lg px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                QR生成
              </a>
              <a
                href="https://moji-counter-xi.vercel.app/"
                className="rounded-lg px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                文字数
              </a>
            </nav>
          </div>
        </header>

        {/* メイン */}
        <div className="mx-auto max-w-6xl px-4">
          {children}
        </div>

        {/* フッター */}
        <footer className="mt-12 border-t border-slate-200/60 py-8 text-sm text-slate-500 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-1">※ ブラウザ内で処理が完結します（サーバー送信なし）。</p>
            <p className="text-xs">
              © {new Date().getFullYear()} moji-counter. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
