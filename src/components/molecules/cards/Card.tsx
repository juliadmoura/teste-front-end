import type { HTMLAttributes, ReactNode } from 'react';
import { Button } from '../../atoms/buttons/Button';
import { Typography } from '../../atoms/typography/Typography';
import './Card.scss';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'product' | 'banner' | 'categories' | 'partners';
  title?: string;
  description?: string;
  image?: string;
  buttonLabel?: string;
  buttonVariant?: 'banner' | 'card' | 'body';
  backgroundColor?: 'white' | 'gray';
  children?: ReactNode;
};

export const Card = ({
  variant = 'default',
  title,
  description,
  image,
  buttonLabel,
  backgroundColor = 'white',
  buttonVariant = 'card',
  children,
  ...props
}: CardProps) => {
  return (
    <div
      className={`card card--${variant} ${
        backgroundColor ? `card--${backgroundColor}` : ''
      }`}
      {...props}
    >
      {image && (
        <div className="card__image">
          <img src={image} alt={title ?? 'Imagem do card'} />
        </div>
      )}

      <div className="card__content">
        {title && (
          <Typography variant="h4" weight="bold" className="card__title">
            {title}
          </Typography>
        )}

        {description && (
          <Typography
            variant="body"
            color="dark-gray"
            className="card__description"
          >
            {description}
          </Typography>
        )}

        {buttonLabel && (
          <div className="card__actions">
            <Button label={buttonLabel} variant={buttonVariant} />
          </div>
        )}

        {children && <div className="card__children">{children}</div>}
      </div>
    </div>
  );
};
