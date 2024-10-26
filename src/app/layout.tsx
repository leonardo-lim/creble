import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Layout/Navbar';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

const metadata: Metadata = {
    title: 'Creble',
    description: 'Catalog Web App with Next.js and TypeScript'
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={plusJakartaSans.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export { metadata };
export default RootLayout;