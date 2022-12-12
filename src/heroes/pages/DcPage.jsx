import { HeroList } from '../components/HeroList';
import { heroes } from '../data/heroes';

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <div>
        <HeroList publisher="DC Comics" />
      </div>
    </>
  );
};
