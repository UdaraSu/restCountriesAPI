function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        placeholder="🔍 Search for a country..."
        className="w-11/12 md:w-2/3 lg:w-1/2 px-6 py-3 text-lg bg-white/30 dark:bg-black/30 dark:text-white backdrop-blur-lg border border-white dark:border-gray-700 rounded-full shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 placeholder-pink-600 dark:placeholder-white"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
