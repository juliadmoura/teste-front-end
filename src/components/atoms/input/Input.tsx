import type { InputHTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';
import './Input.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color?: 'white' | 'gray';
  variant?: 'icon' | 'plain' | 'quantity';
  icon?: ReactNode;
  placeholder?: string;
  value?: number;
  onChangeValue?: (value: number) => void;
};

export const Input = ({
  variant = 'plain',
  icon,
  placeholder,
  value,
  onChangeValue,
  ...props
}: InputProps) => {
  const [quantity, setQuantity] = useState<number>(value || 0);

  const increment = () => {
    const newVal = quantity + 1;
    setQuantity(newVal);
    onChangeValue?.(newVal);
  };

  const decrement = () => {
    const newVal = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newVal);
    onChangeValue?.(newVal);
  };

  if (variant === 'quantity') {
    return (
      <div className="input-wrapper input-wrapper--quantity">
        <button type="button" className="quantity-btn" onClick={decrement}>
          -
        </button>
        <input
          type="text"
          className="input-field"
          value={quantity}
          readOnly
          {...props}
        />
        <button type="button" className="quantity-btn" onClick={increment}>
          +
        </button>
      </div>
    );
  }

  return (
    <div className={`input-wrapper input-wrapper--${variant}`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
