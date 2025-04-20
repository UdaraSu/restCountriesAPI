import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="group bg-white/20 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/20 p-4 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-pink-200 hover:dark:shadow-white/20 duration-300">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-40 object-cover rounded-2xl mb-4 border border-white"
        />
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-pink-600 group-hover:text-pink-700 dark:text-white transition">
            {country.name.common}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">🏛 Capital: {country.capital?.[0]}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">📍 {country.region}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">👥 {country.population.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
