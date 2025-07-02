import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import { products } from "@/data/resource";


console.log(products.Necklace);

const categories = Object.keys(products);

export default function JewellerySection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [animateProducts, setAnimateProducts] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleCategoryChange = (category) => {
    setAnimateProducts(false);
    setTimeout(() => {
      setActiveCategory(category);
      setAnimateProducts(true);
    }, 50);
  };

  return (
    <section className="container mx-auto py-16 px-14 sm:w-[1180px] overflow-hidden">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl font-serif text-amber-900 mb-3">
          Jewellery Category
        </h2>
        <p className="text-amber-800 max-w-2xl mx-auto">
        Imitation Jewelry offers elegant necklaces, earrings, bangles, and anklets, crafted with intricate designs and premium materials to elevate any outfit.
        </p>
      </div>

      {/* Category Tabs */}
      <div
        className="flex justify-center mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-full overflow-x-auto flex justify-center">
          <div className="inline-flex border-b border-amber-200 w-full md:w-auto justify-center md:justify-start gap-2 md:gap-4 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-amber-800 border-b-2 border-amber-600"
                    : "text-amber-700 hover:text-amber-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products[activeCategory].slice(0, 4).map((product, index) => (
          <div
            key={product.id}
            data-aos={animateProducts ? "fade-up" : ""}
            data-aos-delay={100 + index * 100}
            className="transition-all duration-500"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
