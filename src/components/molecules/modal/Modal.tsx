import type { FC } from 'react';
import { useCurrencyFormat } from '../../../hooks/useCurrencyFormat';
import { Button } from '../../atoms/buttons/Button';
import { Input } from '../../atoms/input/Input';
import { Typography } from '../../atoms/typography/Typography';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  } | null;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  const { formatCurrency } = useCurrencyFormat();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img src={product.image} alt={product.title} />
        <div className="modal-text">
          <Typography variant="subtitle" color="dark-gray" weight="regular">
            {product.title}
          </Typography>
          <Typography variant="subtitle" color="dark-gray" weight="semibold">
            {formatCurrency(product.price)}
          </Typography>
          <Typography variant="xsmall" color="light-gray" weight="medium">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </Typography>
          <div className="buttons">
            <Input
              variant="quantity"
              value={1}
              onChangeValue={(val) => console.log('Quantidade:', val)}
            />
            <Button label="comprar" variant="body"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
