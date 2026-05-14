const navList = ["About", "Experience", "Work", "Contact"];

function Nav() {
  return (
    <div className="flex">
      {navList.map((navItem, index) => (
        <ul key={index} className="hover:cursor-pointer">
          <li className="text-heading hover:text-brand p-2.5 text-sm">
            <span className="text-brand text-[13px]">{`0${++index}. `}</span>
            {navItem}
          </li>
        </ul>
      ))}
    </div>
  );
}
export default Nav;
