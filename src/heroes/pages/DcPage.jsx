import { HeroList } from '../components/HeroList';

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <div className="d-flex">
        <HeroList publisher="DC Comics" />
      </div>
    </>
  );
};
