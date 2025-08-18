import { Button } from '../../atoms/buttons/Button';
import { Typography } from '../../atoms/typography/Typography';
import './Banner.scss';

export function Banner() {
  return (
    <>
      <div className="banner">
        <img src="/src/assets/images/banner.png" />
        <div className="content">
          <div id="texts">
            <p>
              <Typography
                variant="h1"
                color="white"
                weight="semibold"
                align="left"
              >
                Venha conhecer nossas promoções
              </Typography>
            </p>
            <p>
              <Typography variant="h3" color="yellow" weight="bold">
                50% Off
              </Typography>
              <Typography variant="h3" color="white" weight="regular">
                nos produtos
              </Typography>
            </p>
          </div>

          <p id="button">
            <Button variant="banner" label="Ver produto"></Button>
          </p>
        </div>
      </div>
    </>
  );
}
