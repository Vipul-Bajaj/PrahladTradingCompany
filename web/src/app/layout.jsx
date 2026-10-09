import { Archivo } from 'next/font/google';
import './globals.css';
import WhatsAppFloat from '../components/WhatsAppFloat';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

export const metadata = {
  title: 'Prahlad Trading Company | Industrial Safety Equipment Supplier in Raipur',
  description:
    'Industrial safety equipment supplier in Raipur, Chhattisgarh. Safety helmets, safety shoes, gloves, respirators, harnesses, welding supplies and fire extinguishers. Authorized dealer for Acme, Mallcom and Footland; safety products from Karam, Udyogi, 3M and Omex.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c9471f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={archivo.variable}>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
