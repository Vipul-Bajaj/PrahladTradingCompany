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
  title: 'Prahlad Trading Company | Safety equipment in Raipur',
  description:
    'Industrial safety equipment in Raipur, Chhattisgarh: helmets, safety shoes, gloves, harnesses, respirators and fire extinguishers from Acme, Karam, Udyogi, Mallcom, Footland and Omex.',
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
