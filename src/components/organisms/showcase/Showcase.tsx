import { useEffect, useRef, useState } from 'react';
import { useProducts } from '../../../hooks/useProducts';
import { NextIcon, PrevIcon } from '../../atoms/icons';
import { Typography } from '../../atoms/typography/Typography';
import { ProductCard } from '../../molecules/cards/productCard/ProductCard';
import { Modal } from '../../molecules/modal/Modal';
import { Sections } from '../../molecules/sections/Sections';
import './Showcase.scss';
interface ShowcaseProps {
  showSections?: boolean;
  showSeeAll?: boolean;
}

export function Showcase({
  showSections = false,
  showSeeAll = false,
}: ShowcaseProps) {
  const { products, error } = useProducts();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const itemsPerPage = 4;

  const extendedProducts = [
    ...products.slice(-itemsPerPage),
    ...products,
    ...products.slice(0, itemsPerPage),
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= products.length) {
      setCurrentIndex(0);
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = `translateX(-${
          100 * itemsPerPage
        }%)`;
      }
    }
    if (currentIndex < 0) {
      setCurrentIndex(products.length - 1);
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = `translateX(-${
          100 * products.length
        }%)`;
      }
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      if (!isTransitioning) {
        carouselRef.current.style.transition = 'none';
      } else {
        carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
      }
      carouselRef.current.style.transform = `translateX(-${
        (currentIndex + itemsPerPage) * (100 / itemsPerPage)
      }%)`;
    }
  }, [currentIndex, isTransitioning]);

  if (error) return <div>Erro: {error}</div>;
  if (!products.length) return <div>Carregando...</div>;

  return (
    <>
      <header className="header-showcase">
        <main>
          <div className="divider"></div>
          <Typography variant="h4" color="blue" weight="bold" inline>
            Produtos relacionados
          </Typography>
          <div className="divider"></div>
        </main>
        {showSeeAll && (
          <Typography variant="caption" color="dark-gray" weight="bold">
            Ver todos
          </Typography>
        )}
      </header>
      {showSections && <Sections />}{' '}
      <section className="carousel-section">
        <div className="carousel-button prev" onClick={prevSlide}>
          <PrevIcon />
        </div>
        <div className="carousel-container">
          <div
            className="carousel"
            ref={carouselRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedProducts.map((product, index) => (
              <div className="carousel-slide" key={index}>
                <ProductCard
                  image={product.image}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                  title={product.title}
                  onClick={() => openModal(product)}
                />
              </div>
            ))}
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              product={selectedProduct}
            />
          </div>
        </div>
        <div className="carousel-button next" onClick={nextSlide}>
          <NextIcon />
        </div>
      </section>
    </>
  );
}
