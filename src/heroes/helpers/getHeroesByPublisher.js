import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ['Marvel Comics', 'DC Comics'];

  if (!validPublisher.includes(publisher)) {
    throw new Error('Invalid publisher');
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
