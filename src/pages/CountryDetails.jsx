import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      });
  }, [code]);

  if (loading) {
    return <p className="text-center text-xl text-pink-500 mt-10">Loading details...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-white to-pink-200 p-8">
      <Link to="/" className="text-pink-600 underline text-lg mb-6 inline-block">
        ← Back
      </Link>
      <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 text-center">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-64 mx-auto mb-6 rounded-lg border border-white shadow-md"
        />
        <h1 className="text-4xl font-bold text-pink-600 mb-4">{country.name.common}</h1>
        <div className="text-gray-800 space-y-2 text-lg">
          <p>🏛 Official Name: {country.name.official}</p>
          <p>📍 Capital: {country.capital?.[0]}</p>
          <p>🌎 Region: {country.region} — {country.subregion}</p>
          <p>👥 Population: {country.population.toLocaleString()}</p>
          <p>🗣 Languages: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
