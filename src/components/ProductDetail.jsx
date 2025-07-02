import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Share2,
  Star,
  Truck,
} from "lucide-react";
import { products } from "@/data/resource";
import ProductCard from "./ProductCard";
import WhatsAppEnquiryButton from "./WhatsAppEnquiryButton";

// Flatten all products into a single array
const flattenedProducts = Object.values(products).flat();
console.log("params", flattenedProducts);
export default function ProductDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const router = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Find the product by ID
    const productId = Number(params.id);
    const foundProduct = flattenedProducts.find((p) => p.id === productId);
    console.log("foundProduct", foundProduct.image);

    if (foundProduct) {
      setProduct(foundProduct);

      // Find similar products (same category but different ID)
      const similar = flattenedProducts
        .filter(
          (p) =>
            p.category === foundProduct.category && p.id !== foundProduct.id
        )
        .slice(0, 4);
      setSimilarProducts(similar);
    }

    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-amber-800 text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50">
        <div className="text-amber-800 text-xl mb-4">Product not found</div>
        <button
          onClick={() => router.push("/")}
          className="bg-amber-600 text-white px-4 py-2 rounded-md"
        >
          Go back to home
        </button>
      </div>
    );
  }
  console.log("productsss", product);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div
          className="container mx-auto px-4 py-3 flex items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Jewellery Collection</span>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-4 md:p-8">
            {/* Product Images - Left Side (2 columns on large screens) */}
            <div className="lg:col-span-2" data-aos="fade-right">
              {/* Main Image */}
              <div className="border border-amber-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product?.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              {/* <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border rounded-md overflow-hidden ${
                      selectedImage === index ? "border-amber-600" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </button>
                ))}
              </div> */}

              {/* Action Buttons */}
              <div className="grid grid-cols-1 m-auto">
                {/* Enquiry Button */}
                <WhatsAppEnquiryButton
                  productName={product.name}
                  productPrice={product.price}
                  productUrl={window.location.href} // Use the current page URL
                  quantity={quantity}
                  phoneNumber="9137742517" // WhatsApp number to send the enquiry
                />
              </div>
            </div>

            {/* Product Details - Right Side (3 columns on large screens) */}
            <div className="lg:col-span-3" data-aos="fade-left">
              {/* Product Title and Rating */}
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                    <span className="font-bold mr-1">{product.rating}</span>
                    <Star size={14} fill="white" />
                  </div>
                  <span className="text-gray-500">
                    {product.reviews} Reviews
                  </span>
                </div>
              </div>

              {/* Price Information */}
              <div className="mb-6 pb-6 border-b border-amber-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-amber-900">
                    ₹{product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-lg text-gray-500 line-through">
                        ₹{product.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-green-600 font-medium">
                        {Math.round(
                          (1 - product.price / product.originalPrice) * 100
                        )}
                        % off
                      </span>
                    </>
                  )}
                </div>
                <div className="text-green-600 text-sm mt-1">
                  Inclusive of all taxes
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6 pb-6 border-b border-amber-100">
                <h3 className="text-lg font-medium text-amber-900 mb-3">
                  Quantity
                </h3>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md"
                  >
                    -
                  </button>
                  <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-6 pb-6 border-b border-amber-100">
                <h3 className="text-lg font-medium text-amber-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* Delivery Options */}
              <div className="mb-6 pb-6 border-b border-amber-100">
                <h3 className="text-lg font-medium text-amber-900 mb-3">
                  Delivery Options
                </h3>
                <div className="flex items-start gap-3">
                  <Truck size={20} className="text-amber-700 mt-0.5" />
                  <div>
                    <p className="text-gray-700">
                      Free delivery on orders above ₹999
                    </p>
                    <p className="text-gray-700">
                      Estimated delivery: 3-5 business days
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Specifications */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-amber-900 mb-3">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex">
                      <span className="text-gray-500 w-1/3">{spec.name}</span>
                      <span className="text-gray-800 w-2/3">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Button */}
              <div className="mt-6">
                <button className="flex items-center text-amber-700 hover:text-amber-900">
                  <Share2 size={18} className="mr-2" />
                  Share this product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div className="container mx-auto px-10 py-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">
            Similar Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((similarProduct) => (
              <div
                key={similarProduct.id}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Link to={`/product/${similarProduct.id}`}>
                  <ProductCard product={similarProduct} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
