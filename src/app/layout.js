
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // customize as needed
});

export const metadata = {
  title: 'Super Canteen',
  description: 'Super Canteen',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-raleway antialiased">
        {children}
      </body>
    </html>
  );
}
