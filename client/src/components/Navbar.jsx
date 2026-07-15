import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaSearch,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";


function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/90 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link to="/">
          <h2 className="text-3xl font-bold text-black dark:text-yellow-400">
            StyleHub ✨
          </h2>
        </Link>

        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[350px]">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search fashion, beauty, accessories..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

        <div className="flex items-center gap-4 font-medium flex-wrap">
          <Link to="/" className="hover:text-pink-600">Home</Link>
          <Link to="/products" className="hover:text-pink-600">Products</Link>

          {isLoggedIn && (
            <Link to="/dashboard" className="hover:text-pink-600">
              Dashboard
            </Link>
          )}

          {!isLoggedIn ? (
  <Link to="/login" className="hover:text-pink-600">
    Login
  </Link>
) : (
  <button
    onClick={handleLogout}
    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
  >
    Logout
  </button>
)}

<button
  onClick={() => setDarkMode(!darkMode)}
  className="w-10 h-10 rounded-full bg-black text-yellow-400 dark:bg-yellow-400 dark:text-black flex items-center justify-center hover:scale-110 transition"
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

<Link to="/wishlist">
  <FaHeart className="text-xl cursor-pointer hover:text-red-500" />
</Link>

          <Link to="/cart">
            <FaShoppingCart className="text-xl cursor-pointer hover:text-pink-600" />
          </Link>

          <Link to="/profile">
            <FaUser className="text-xl cursor-pointer hover:text-pink-600" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;