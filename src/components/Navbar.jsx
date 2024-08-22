function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-blue-500 px-8 py-6 text-white">
        <div className="mt-2">
          <h1 className="font-extrabold text-xl">LoremIpsum</h1>
        </div>
        <div>
          <div className="flex gap-24">
            <div className="mt-1 hidden md:block">
              <ul className="flex gap-8 bg-white bg-opacity-10 px-6 py-2 rounded-full font-normal">
                <li>Home</li>
                <li className="font-semibold">GameMaster</li>
                <li>Participant</li>
                <li>Judge</li>
              </ul>
            </div>
            <div className="flex gap-2 mt-2">
              <p className="mt-1 font-medium">Kirtan</p>
              <img
                src="https://i.pinimg.com/originals/07/31/1f/07311f192c731076761618e782d5307c.jpg"
                alt="img"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
