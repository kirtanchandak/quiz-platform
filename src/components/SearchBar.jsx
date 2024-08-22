import { FaPlus } from "react-icons/fa6";

function SearchBar() {
  return (
    <>
      <div className="flex justify-between pt-12">
        <div className="md:ml-12">
          <h1 className="font-bold">Hello! 👋</h1>
          <p className="text-gray-400">Lorem ipsum dolar sit amet</p>
        </div>
        <div className="md:flex gap-6 hidden mt-2">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 fill-black"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </span>
            <input
              className="w-full bg-white border border-slate-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none"
              placeholder="Search by title..."
              type="text"
            />
          </label>
          {/* <input type="text" placeholder="Search by title..." className="border-2 border-gray-200 focus:outline-none focus:ring-0 rounded-lg px-8" /> */}
          <button className="rounded-lg border-2 border-blue-500 text-blue-500 px-8 !py-0 font-medium flex gap-2 items-center">
            <FaPlus className="text-xl font-bold"/> Add Challange
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
