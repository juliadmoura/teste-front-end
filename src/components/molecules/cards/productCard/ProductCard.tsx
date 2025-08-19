import { useCurrencyFormat } from '../../../../hooks/useCurrencyFormat';
import type { Product } from '../../../../hooks/useProducts';
import { Button } from '../../../atoms/buttons/Button';
import { Typography } from '../../../atoms/typography/Typography';
import './ProductCard.scss';

export type ProductCardProps = Omit<Product, 'description'> & {
  description?: string;
};

export function ProductCard({
  title,
  description,
  image,
  price,
}: ProductCardProps) {
  const { formatCurrency } = useCurrencyFormat();

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="product-card__info">
        <div className="texts">
          <Typography variant="subtitle" weight="medium" inline>
            {title}
          </Typography>
          <Typography variant="xsmall" inline>
            {description}
          </Typography>
          <Typography variant="h4" weight="bold" color="purple">
            {formatCurrency(price)}
          </Typography>
          <Typography variant="xsmall" color="blue" weight="regular" inline>
            {' '}
            Frete grátis
          </Typography>
        </div>

        <div className="button">
          <Button label="Comprar" variant="card" />
        </div>
      </div>
    </div>
  );
}
