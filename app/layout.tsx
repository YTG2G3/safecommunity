import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";

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
        <html lang="en" className='dark'>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
