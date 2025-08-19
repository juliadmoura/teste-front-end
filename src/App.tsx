import { Banner } from './components/molecules/banner/Banner';
import { Categories } from './components/organisms/categories/Categories';
import { Header } from './components/organisms/header/Header';
import { Partners } from './components/organisms/partners/Partners';
import { Showcase } from './components/organisms/showcase/Showcase';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Showcase showSections />
      <Partners />
      <Showcase showSeeAll />
      <Partners />
      <Showcase showSeeAll />
    </>
  );
}

export default App;
