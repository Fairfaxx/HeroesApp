import { HeroList } from '../components/HeroList';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </>
  );
};
