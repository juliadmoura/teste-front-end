import { Typography } from '../../atoms/typography/Typography';
import './Sections.scss';

export function Sections() {
  return (
    <>
      <ul className="ul-sections">
        <li>
          <Typography variant="body" color="blue" weight="bold">
            CELULAR
          </Typography>
        </li>
        <li>
          <Typography variant="body" color="black" weight="regular">
            ACESSÓRIOS
          </Typography>
        </li>
        <li>
          <Typography variant="body" color="black" weight="regular">
            TABLETS
          </Typography>
        </li>
        <li>
          <Typography variant="body" color="black" weight="regular">
            NOTEBOOKS
          </Typography>
        </li>
        <li>
          <Typography variant="body" color="black" weight="regular">
            TVS
          </Typography>
        </li>
        <li>
          <Typography variant="body" color="black" weight="regular">
            VER TODOS
          </Typography>
        </li>
      </ul>
    </>
  );
}
