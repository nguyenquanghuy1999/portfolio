import Logo from "./Logo";
import Nav from "./Nav";
import ResumeLink from "./ResumeLink";

function Header() {
  return (
    <div className="bg-surface flex h-25 items-center justify-between px-12.5">
      <Logo />
      <div className="flex items-center">
        <Nav />
        <ResumeLink />
      </div>
    </div>
  );  
}
export default Header;
