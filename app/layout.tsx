import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";
import localFont from 'next/font/local';

const suitFont = localFont({
    src: '../public/fonts/SUIT-Variable.woff2',
    display: 'swap',
    variable: '--font-suit'
});

export const metadata: Metadata = {
    title: 'SafeCommunity',
    description: 'An affordable solution to ensure the safety of your online community.'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`dark ${suitFont.className}`}>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
