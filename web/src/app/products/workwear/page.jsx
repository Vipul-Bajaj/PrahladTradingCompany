import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/workwear';

export const metadata = {
  title: 'Workwear: coveralls, FR and arc-flash wear, hi-vis | Prahlad Trading Company',
  description:
    'Cotton and flame-resistant coveralls, arc-flash jackets, hi-vis vests, welding aprons, rain suits and disposable coveralls in Raipur from Karam, Udyogi and Mallcom.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
