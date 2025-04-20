import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <header className="backdrop-blur-md bg-white/10 dark:bg-black/20 shadow-2xl sticky top-0 z-50 flex justify-between items-center px-8 py-6 border-b border-white/20 dark:border-white/10">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-pink-500 to-violet-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] tracking-widest animate-fade-in">
        🌐 Country Explorer+
      </h1>

      <button
        onClick={toggleDark}
        className="relative group flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 bg-white/20 dark:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] border border-white/30 dark:border-white/20"
      >
        <FontAwesomeIcon
          icon={dark ? faSun : faMoon}
          className="text-gray text-xl transition-transform duration-500 group-hover:rotate-180"
        />
        <span className="text-gray text-sm font-medium tracking-wide">
          {dark ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </header>
  );
}

export default Header;
