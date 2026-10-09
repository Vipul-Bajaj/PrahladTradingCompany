import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/welding';

export const metadata = {
  title: 'Welding electrodes, holders, helmets and machines: Ador, ESAB, GB-Kore | Prahlad Trading Company',
  description:
    'Ador and ESAB welding electrodes, electrode holders, auto-darkening helmets and welding goggles, and Ador, ESAB and GB-Kore welding and cutting machines in Raipur. WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
