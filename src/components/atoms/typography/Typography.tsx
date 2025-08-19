import { type HTMLAttributes, type JSX, type ReactNode } from 'react';
import './Typography.scss';

type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'overline'
  | 'xsmall'
  | 'end';

type Weights = 'regular' | 'medium' | 'semibold' | 'bold' | 'light';
type Align = 'left' | 'center' | 'right' | 'justify';
type Colors =
  | 'white'
  | 'blue'
  | 'purple'
  | 'dark-gray'
  | 'light-gray'
  | 'black'
  | 'violet'
  | 'yellow'
  | 'footer';

type TypographyProps<T extends keyof JSX.IntrinsicElements = 'span'> =
  HTMLAttributes<HTMLElement> & {
    children: ReactNode;
    variant?: Variants;
    as?: T;
    weight?: Weights;
    align?: Align;
    color?: Colors;
    truncate?: boolean;
    inline?: boolean;
  };

const defaultTagByVariant: Record<Variants, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle: 'h3',
  body: 'p',
  caption: 'span',
  overline: 'span',
  xsmall: 'h6',
  end: 'caption',
};

export function Typography<T extends keyof JSX.IntrinsicElements = 'span'>({
  children,
  variant = 'body',
  as,
  weight = 'regular',
  align = 'left',
  color = 'black',
  truncate = false,
  className = '',
  inline,
  ...rest
}: TypographyProps<T>) {
  const Tag = (as ?? defaultTagByVariant[variant]) as any;

  const classes = [
    'typo',
    `typo--${variant}`,
    `typo--w-${weight}`,
    `typo--align-${align}`,
    `typo--color-${color}`,
    truncate ? 'typo--truncate' : '',
    inline ? 'typo--inline' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
