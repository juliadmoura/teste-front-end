import { Typography } from '../../atoms/typography/Typography';
import { Brand } from '../../molecules/brands/Brand';
import './Brands.scss';
import { brandsData } from './brandsData';

export function Brands() {
  return (
    <>
      <header className="header-brands">
        <Typography variant="h4" color="blue" weight="bold" inline>
          Navegue por marcas
        </Typography>
      </header>
      <section className="section-brands">
        {brandsData.map((brand) => (
          <Brand key={brand.key} image={brand.image} />
        ))}
      </section>
    </>
  );
}
