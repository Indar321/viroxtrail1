import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'VIROX — Premium Printed Streetwear', description: 'Premium printed oversized T-shirts for those who think different. Discover the VIROX streetwear collection.', metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), openGraph: { title: 'VIROX — Wear Your Story', description: 'Premium printed oversized T-shirts.', type: 'website' } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
