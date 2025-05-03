function Filter({ onFilter, onLangFilter }) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const languages = ["English", "French", "Spanish", "Arabic", "Hindi", "Chinese"];
// filter by these props
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 items-center">
      <select
        className="px-6 py-3 text-base bg-white/20 dark:bg-black/20 backdrop-blur-lg text-pink-800 dark:text-white border border-pink-200 dark:border-gray-700 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-pink-400"
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="">🌍 Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      <select
        className="px-6 py-3 text-base bg-white/20 dark:bg-black/20 backdrop-blur-lg text-pink-800 dark:text-white border border-pink-200 dark:border-gray-700 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-pink-400"
        onChange={(e) => onLangFilter(e.target.value)}
      >
        <option value="">🗣️ Language</option>
        {languages.map((lang) => (
          <option key={lang} value={lang.toLowerCase()}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
