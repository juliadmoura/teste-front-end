import { Typography } from '../../atoms/typography/Typography';
import { Card } from '../../molecules/cards/Card';
import './Categories.scss';
import { categoriesData } from './categoriesData';

export function Categories() {
  return (
    <>
      <div className="main">
        {categoriesData.map((category, index) => (
          <div className="item">
            <Card
              key={index}
              variant="categories"
              image={category.image}
              backgroundColor={
                category.title === 'Tecnologia' ? 'white' : 'gray'
              }
            ></Card>
            <Typography
              variant="overline"
              weight="semibold"
              color={category.title === 'Tecnologia' ? 'violet' : 'dark-gray'}
            >
              {category.title}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
}
