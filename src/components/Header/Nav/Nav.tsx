const navList = ["About", "Experience", "Work", "Contact"];

function Nav() {
  return (
    <ul className="desktop:flex desktop:flex-row flex-col text-center hover:cursor-pointer">
      {navList.map((navItem, index) => (
        <li
          key={index}
          className="text-text hover:text-brand desktop:text-[14px] animate-fadeInUp p-5 text-sm text-[19px] opacity-0"
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <span className="text-brand desktop:text-[13px] desktop:inline block text-[17px]">{`0${++index}. `}</span>
          {navItem}
        </li>
      ))}
    </ul>
  );
}
export default Nav;
