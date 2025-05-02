import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        let url = "https://restcountries.com/v3.1/all";

        if (search.trim() !== "") {
          url = `https://restcountries.com/v3.1/name/${search}`;
        } else if (filter !== "") {
          url = `https://restcountries.com/v3.1/region/${filter}`;
        }

        const response = await fetch(url);
        let data = await response.json();

        // Filter by language
        if (language !== "") {
          data = data.filter((country) =>
            Object.values(country.languages || {}).some((lang) =>
              lang.toLowerCase().includes(language.toLowerCase())
            )
          );
        }

        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([]);
      }
      setLoading(false);
    };

    fetchCountries();
  }, [search, filter, language]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-black dark:to-gray-900 text-gray-800 dark:text-white transition-colors duration-500">
      <Header />
      {/* add searchbar */}
      <SearchBar onSearch={setSearch} />
      <Filter onFilter={setFilter} onLangFilter={setLanguage} />
      {/* add loading */}
      {loading ? (
        <p className="text-center text-xl text-pink-500 mt-10 dark:text-white">Loading countries...</p>
      ) : (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
