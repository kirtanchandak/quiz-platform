function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-blue-500 px-8 py-4 text-white backImg">
        <div className="flex items-center">
          <h1 className="font-extrabold md:text-[26px] text-2xl">DISRUPT: <span className="font-normal md:text-[21px] text-[17px]">Stimulating Innovation</span></h1>
        </div>
        <div>
            <div className="mt-1 hidden md:block">
              <div className="flex gap-[30px] px-6 py-2 rounded-full text-base">
                <div className="flex items-center gap-[30px]">
                <p className="font-semibold">Home</p>
                <p>Option 1</p>
                <p>Option 2</p>
                </div>
                  <div className="flex items-center gap-[13px]">
                    <p className="font-medium text-base">Kirtan</p>
                    <img
                      src="https://i.pinimg.com/originals/07/31/1f/07311f192c731076761618e782d5307c.jpg"
                      alt="img"
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
