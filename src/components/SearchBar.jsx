import { FaPlus } from "react-icons/fa6";

function SearchBar() {
  return (
    <>
      <div className="flex justify-between mt-8 border-[0.3px] border-[#A5A3A9] py-[15px] px-[33px] rounded-[18px]">
        <div className="">
          <h1 className="font-bold">Hello! 👋</h1>
          <p className="text-gray-400">Lorem ipsum dolar sit amet</p>
        </div>
        <div className="md:flex gap-6 hidden mt-2">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.27592 12.1954C10.7194 12.1954 13.5108 9.70529 13.5108 6.63363C13.5108 3.56197 10.7194 1.0719 7.27592 1.0719C3.83248 1.0719 1.04102 3.56197 1.04102 6.63363C1.04102 9.70529 3.83248 12.1954 7.27592 12.1954Z" stroke="#A5A3A9" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.0689 13.5866L11.6787 10.5624" stroke="#A5A3A9" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </span>
            <input
              className="w-full bg-white border border-[#E8E8EA] rounded-lg py-2 pl-10 pr-4 focus:outline-none"
              placeholder="Search by title..."
              type="text"
            />
          </label>
          {/* <input type="text" placeholder="Search by title..." className="border-2 border-gray-200 focus:outline-none focus:ring-0 rounded-lg px-8" /> */}
          <button className="rounded-lg border-[0.5px] border-blue-500 text-blue-500 px-[16px] !py-0 font-medium flex gap-2 items-center text-[16px]">
            <FaPlus className="text-xl font-bold" /> Add Challange
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
