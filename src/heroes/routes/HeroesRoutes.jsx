import { Navigate, Route, Routes } from 'react-router';
import { Navbar } from '../../ui/components/NavBar';
import { DcPage } from '../pages/DcPage';
import { HeroPage } from '../pages/HeroPage';
import { MarvelPage } from '../pages/MarvelPage';
import { SearchHero } from '../pages/SearchHeroe';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchHero />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
          {/* Search and Hero by ID */}

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
