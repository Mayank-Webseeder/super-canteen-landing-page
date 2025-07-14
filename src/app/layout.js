
import { Raleway } from 'next/font/google';
import CustomCursor from '@/Components/CustomCursor';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
});

export const metadata = {
  title: 'Super Canteen',
  description: 'Super Canteen',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${raleway.variable} font-raleway antialiased`}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
