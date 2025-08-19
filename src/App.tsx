import { Banner } from './components/molecules/banner/Banner';
import { Brands } from './components/organisms/brands/Brands';
import { Categories } from './components/organisms/categories/Categories';
import { Footer } from './components/organisms/footer/Footer';
import { Header } from './components/organisms/header/Header';
import Newsletter from './components/organisms/newsletter/Newsletter';
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
      <Brands />
      <Showcase showSeeAll />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
