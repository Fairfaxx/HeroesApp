import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const navigate = useNavigate();
  console.log(hero.id);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail  animate__animated animate__fadeInLeft"
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3 ms-3">Characters</h5>
        <p className="ms-3">{hero.characters}</p>

        <button
          className="btn btn-outline-primary ms-3"
          onClick={onNavigateBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
