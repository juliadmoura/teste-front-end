import { Button } from '../../atoms/buttons/Button';
import { Input } from '../../atoms/input/Input';
import { Typography } from '../../atoms/typography/Typography';
import './Newsletter.scss';

export default function Newsletter() {
  return (
    <>
      <section className="section-main">
        <div className="texts">
          <Typography id="title" variant="h3" weight="semibold" color="white">
            {' '}
            Inscreva-se na nossa newsletter
          </Typography>
          <Typography variant="overline" weight="light" color="white">
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </Typography>
        </div>
        <section className="section-form">
          <div className="form">
            <Input placeholder="Digite seu nome"></Input>
            <Input placeholder="Digite seu e-mail"></Input>
            <Button label="Inscrever" variant="news"></Button>
          </div>
          <div className="checkbox">
            <img src="/src/assets/icons/select.png" alt="" />
            <Typography variant="overline" weight="light" color="white">
              Aceito os termos e condições
            </Typography>
          </div>
        </section>
      </section>
    </>
  );
}
