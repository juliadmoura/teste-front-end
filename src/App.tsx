import { Banner } from './components/molecules/banner/banner';
import { Categories } from './components/organisms/categories/Categories';
import { Header } from './components/organisms/header/Header';
import { Partners } from './components/organisms/partners/Partners';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Partners />
    </>
  );
}

export default App;
