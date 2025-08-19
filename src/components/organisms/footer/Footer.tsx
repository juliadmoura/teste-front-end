import { Typography } from '../../atoms/typography/Typography';
import './Footer.scss';

export function Footer() {
  return (
    <>
      <footer className="container">
        <section className="media">
          <img src="/src/assets/logo/logo.png" alt="" />
          <Typography color="dark-gray" weight="light" variant="overline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <div className="social">
            <img src="/src/assets/icons/instagram.png" alt="" />
            <img src="/src/assets/icons/facebook.png" alt="" />
            <img src="/src/assets/icons/linkedin.png" alt="" />
          </div>
        </section>
        <div className="divider"></div>
        <section className="info">
          <ul className="ul-footer">
            <li id="title">
              <Typography variant="body" weight="bold" color="footer">
                Institucional
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Sobre nós
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Movimento{' '}
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Trabalhe conosco
              </Typography>
            </li>
          </ul>
          <ul className="ul-footer">
            <li id="title">
              <Typography variant="body" weight="bold" color="footer">
                Ajuda
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Suporte{' '}
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Fale conosco
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Perguntas frequentes{' '}
              </Typography>
            </li>
          </ul>
          <ul className="ul-footer">
            <li id="title">
              <Typography variant="body" weight="bold" color="footer">
                Termos
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Termos e condições{' '}
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Política de privacidade{' '}
              </Typography>
            </li>
            <li>
              <Typography variant="overline" weight="regular" color="footer">
                Troca e Devolução{' '}
              </Typography>
            </li>
          </ul>
        </section>
      </footer>
      <div className="end">
        <Typography variant="end" color="dark-gray" weight="light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
    </>
  );
}
