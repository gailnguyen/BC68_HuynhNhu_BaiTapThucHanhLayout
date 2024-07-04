const Header = () => {
  return (
    <header className=" bg-blue-950 text-white p-5">
      <div className="container mx-auto flex justify-between text-xl items-center">
        <div>Start Bootstrap</div>
        <ul className="flex space-x-10">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
