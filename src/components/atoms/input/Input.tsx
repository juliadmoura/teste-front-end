import type { InputHTMLAttributes, ReactNode } from 'react';
import './Input.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color?: 'white' | 'gray';
  variant?: 'icon' | 'plain'; // com ícone ou só placeholder
  icon?: ReactNode; // ícone opcional
  placeholder: string;
};

export const Input = ({
  variant = 'plain',
  icon,
  placeholder,
  ...props
}: InputProps) => {
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
