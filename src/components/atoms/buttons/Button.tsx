import type { ButtonHTMLAttributes } from 'react';
import './Buttons.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'banner' | 'card' | 'body' | 'news';
  color?: 'azul' | 'amarelo';
  label: string;
};

export const Button = ({ children, variant, label, ...props }: ButtonProps) => {
  return (
    <button className={`btn btn--${variant}`} {...props}>
      {label}
    </button>
  );
};
