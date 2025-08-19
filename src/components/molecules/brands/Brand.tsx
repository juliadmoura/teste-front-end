import type { Key } from 'react';
import { Card } from '../cards/Card';

export function Brand(props: {
  image: string | undefined;
  key: Key | null | undefined;
}) {
  return (
    <>
      <Card variant="default" image={props.image} key={props.key}></Card>
    </>
  );
}
