import { Button } from '../../atoms/buttons/Button';
import { Typography } from '../../atoms/typography/Typography';
import { Card } from '../../molecules/cards/Card';
import './Partners.scss';

export function Partners() {
  return (
    <>
      <main className="main">
        <Card variant="partners">
          <div className="content-partners">
            <div className="texts">
              <Typography variant="h2" color="white" weight="bold">
                {' '}
                Parceiros{' '}
              </Typography>

              <Typography variant="body" color="white" weight="regular">
                Lorem ipsum dolor sit amet, consectetur
              </Typography>
            </div>
            <Button variant="body" label="Confira" />
          </div>
        </Card>

        <Card variant="partners">
          <div className="content-partners">
            <div className="texts">
              <Typography variant="h2" color="white" weight="bold">
                {' '}
                Parceiros{' '}
              </Typography>

              <Typography variant="body" color="white" weight="regular">
                Lorem ipsum dolor sit amet, consectetur
              </Typography>
            </div>
            <Button variant="body" label="Confira" />
          </div>
        </Card>
      </main>
    </>
  );
}
