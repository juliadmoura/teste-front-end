import { Input } from '../../atoms/input/Input';
import { Typography } from '../../atoms/typography/Typography';
import './Header.scss';

export function Lupa() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  return (
    <>
      <header>
        <div className="top">
          <li className="benefits">
            <img src="/src/assets/icons/shield.png" />
            <p>
              <Typography variant="xsmall" color="light-gray" weight="medium">
                Compra
              </Typography>
              <Typography variant="xsmall" color="violet" weight="semibold">
                100% segura
              </Typography>
            </p>
          </li>
          <li className="benefits">
            <img src="/src/assets/icons/truck.png" />
            <p>
              <Typography variant="xsmall" color="violet" weight="semibold">
                Frete grátis
              </Typography>
              <Typography variant="xsmall" color="light-gray" weight="medium">
                acima de R$ 200
              </Typography>
            </p>
          </li>
          <li className="benefits">
            <img src="/src/assets/icons/credit-card.png" />
            <p>
              <Typography variant="xsmall" color="violet" weight="semibold">
                Parcele{' '}
              </Typography>
              <Typography variant="xsmall" color="light-gray" weight="medium">
                suas compras
              </Typography>
            </p>
          </li>
        </div>
        <section className="menu">
          <img src="/src/assets/logo/logo.png" />
          <Input
            variant="icon"
            placeholder="O que você está buscando?"
            icon={<Lupa />}
          ></Input>
          <ul className="icons-list">
            <li>
              <img src="/src/assets/icons/box.png" alt="" />
            </li>
            <li>
              <img src="/src/assets/icons/heart.png" alt="" />
            </li>
            <li>
              <img src="/src/assets/icons/user.png" alt="" />
            </li>
            <li>
              <img src="/src/assets/icons/shopping-cart.png" alt="" />
            </li>
          </ul>
        </section>
        <section className="categories">
          <li>
            <Typography variant="xsmall" color="light-gray" weight="semibold">
              todas as categorias
            </Typography>
          </li>
          <li>
            <Typography variant="xsmall" color="light-gray" weight="semibold">
              supermercado
            </Typography>
          </li>
          <li>
            <Typography variant="xsmall" color="light-gray" weight="semibold">
              livros
            </Typography>
          </li>
          <li>
            <Typography variant="xsmall" color="light-gray" weight="semibold">
              moda
            </Typography>
          </li>
          <li>
            <Typography variant="xsmall" color="light-gray" weight="semibold">
              lançamentos
            </Typography>
          </li>
          <li>
            <Typography variant="xsmall" color="violet" weight="semibold">
              ofertas do dia
            </Typography>
          </li>
          <li className="sub">
            <img src="/src/assets/icons/crown.png" alt="" />
            <Typography variant="xsmall" color="light-gray" weight="semibold">
              assinatura
            </Typography>
          </li>
        </section>
      </header>
    </>
  );
}
