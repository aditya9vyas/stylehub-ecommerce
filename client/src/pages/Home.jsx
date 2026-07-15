import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600",
    title: "MEN & WOMEN FASHION",
    subtitle: "Trending Styles For Everyone",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1600",
    title: "NEW MEN COLLECTION",
    subtitle: "Premium Shirts, Hoodies & More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600",
    title: "NEW WOMEN COLLECTION",
    subtitle: "Elegant Dresses & Premium Styles",
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <div className="bg-gray-100 text-center py-2 font-semibold text-black">
        🔥 SALE IS LIVE! FREE SHIPPING ON ORDERS ABOVE ₹299 🔥
      </div>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl relative">
          <img
            src={heroSlides[currentSlide].image}
            alt="Fashion Banner"
            className="w-full h-[550px] object-cover transition-all duration-700"
          />

          <div className="absolute inset-0 bg-black/35 flex flex-col justify-center pl-12 text-white">
            <h1 className="text-6xl font-bold mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-2xl mb-6">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Link
              to="/products"
              className="bg-black px-8 py-3 rounded-xl w-fit font-bold"
            >
              Shop Men & Women
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-3 gap-6">

          

  <Link to="/products?category=Women">
    <div className="rounded-3xl overflow-hidden shadow-xl relative group cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900"
        alt="Women Fashion"
        className="w-full h-96 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/25 flex items-end p-6">
        <h2 className="text-white text-3xl font-bold">
          Women Fashion
        </h2>
      </div>
    </div>
  </Link>

  <Link to="/products?category=Shoes">
    <div className="rounded-3xl overflow-hidden shadow-xl relative group cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
        alt="Shoes"
        className="w-full h-96 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/25 flex items-end p-6">
        <h2 className="text-white text-3xl font-bold">
          Shoes Collection
        </h2>
      </div>
    </div>
  </Link>

  <Link to="/products?category=Men">
    <div className="rounded-3xl overflow-hidden shadow-xl relative group cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900"
        alt="Men Fashion"
        className="w-full h-96 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/25 flex items-end p-6">
        <h2 className="text-white text-3xl font-bold">
          Men Fashion
        </h2>
      </div>
    </div>
  </Link>

</div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-900 text-white rounded-3xl p-8 flex justify-between items-center shadow-xl">
          <div>
            <h2 className="text-4xl font-bold">Extra 15% Off</h2>
            <p className="text-xl mt-2">On Your First Order</p>
          </div>

          <div className="bg-white text-black px-6 py-3 rounded-xl font-bold text-xl">
            USE CODE NEW15
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/products?category=Women">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700"
                alt="Men"
                className="w-full h-60 object-cover"
                />
                <h3 className="text-center font-bold text-xl py-4">
                  Men
                  </h3>
            </div>
            </Link>

            {/* <Link to="/products?category=Men">
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700"
      alt="Men Fashion"
      className="w-full h-60 object-cover"
    />
    <h3 className="text-center font-bold text-xl py-4">
      Men Fashion
    </h3>
  </div>
</Link> */}

<Link to="/products?category=Tshirts">
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700"
      alt="T-Shirts"
      className="w-full h-60 object-cover"
    />
    <h3 className="text-center font-bold text-xl py-4">
      T-Shirts
    </h3>
  </div>
</Link>

<Link to="/products?category=Shoes">
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
      alt="Shoes"
      className="w-full h-60 object-cover"
    />
    <h3 className="text-center font-bold text-xl py-4">
      Men Shoes
    </h3>
  </div>
</Link>

<Link to="/products?category=Watches">
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=700"
      alt="Watches"
      className="w-full h-60 object-cover"
    />
    <h3 className="text-center font-bold text-xl py-4">
      Watches
    </h3>
  </div>
</Link>
          
          <Link to="/products?category=Beauty">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700" alt="Beauty" className="w-full h-60 object-cover" />
              <h3 className="text-center font-bold text-xl py-4">Beauty</h3>
            </div>
          </Link>
          <Link to="/products?category=Accessories">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700" alt="Accessories" className="w-full h-60 object-cover" />
              <h3 className="text-center font-bold text-xl py-4">Accessories</h3>
            </div>
          </Link>
          <Link to="/products?category=Women">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700" alt="Trending" className="w-full h-60 object-cover" />
              <h3 className="text-center font-bold text-xl py-4">Trending</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-4xl font-bold mb-6 text-center text-black">
          Best Sellers
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[1,2,3,4].map((item) => (
            <Link to="/products" key={item}>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
                <img
                  src={[
                    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700",
                    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700",
                    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
                    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700"
                  ][item - 1]}
                  alt="Product"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Premium Fashion Item</h3>
                  <p className="text-black font-bold mt-2">₹999</p>
                  <button className="w-full mt-3 bg-black text-white py-2 rounded-xl">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-r from-red-500 to-black rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold">⚡ Flash Sale</h2>
              <p className="mt-2 text-xl">Limited Time Fashion Deals</p>
            </div>

            <div className="flex gap-4 mt-6 md:mt-0 text-center">
              <div className="bg-white text-black px-4 py-3 rounded-xl font-bold">
                {timeLeft.hours}h
              </div>
              <div className="bg-white text-black px-4 py-3 rounded-xl font-bold">
                {timeLeft.minutes}m
              </div>
              <div className="bg-white text-black px-4 py-3 rounded-xl font-bold">
                {timeLeft.seconds}s
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-4xl font-bold text-center text-black mb-8">
          Flash Sale Products
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700",
          ].map((img, index) => (
            <Link to="/products" key={index}>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <img src={img} alt="Sale Product" className="w-full h-72 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold">Flash Deal Item</h3>
                  <p className="text-red-500 font-bold">50% OFF</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Beauty Picks
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            ["Lipsticks", "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400"],
            ["Skincare", "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400"],
            ["Perfumes", "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400"],
            ["Makeup", "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400"]
          ].map(([name, img]) => (
            <Link to="/products" key={name}>
              <div className="text-center">
                <img
                  src={img}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover shadow-xl mx-auto"
                />
                <h3 className="mt-3 font-bold">{name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      <section className="bg-black text-white py-12 mt-8">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Join GlowWear Club</h2>
          <p className="text-lg mb-6">
            Get exclusive discounts, early access to sales and fashion updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl text-black w-full md:w-96"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-black mb-8">
          Trending Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {['ZARA', 'H&M', 'GUCCI', 'NIKE', 'PRADA'].map((brand) => (
            <Link to="/products" key={brand}>
              <div
                className="bg-white rounded-2xl shadow-lg p-8 text-center font-bold text-2xl hover:scale-105 transition"
              >
                {brand}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">StyleHub</h2>
          <p>Men • Women • Fashion • Lifestyle</p>
          <p className="mt-4 text-gray-400">© 2026 StyleHub. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;