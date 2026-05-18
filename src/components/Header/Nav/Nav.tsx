const navList = ["About", "Experience", "Work", "Contact"];

function Nav() {
  return (
    <div className="desktop:flex desktop:flex-row flex-col">
      {navList.map((navItem, index) => (
        <ul key={index} className="text-center hover:cursor-pointer">
          <li className="text-text hover:text-brand desktop:text-[14px] p-5 text-sm text-[19px]">
            <span className="text-brand desktop:text-[13px] desktop:inline block text-[17px]">{`0${++index}. `}</span>
            {navItem}
          </li>
        </ul>
      ))}
    </div>
  );
}
export default Nav;
