import { IconMenu } from "../Icons/IconMenu";
import Logo from "./Logo";
import Nav from "./Nav";
import ResumeLink from "./ResumeLink";

function Header() {
  return (
    <div className="bg-bg tablet:px-10 desktop:px-12.5 flex h-25 items-center justify-between px-6.25">
      <Logo />
      <div className="desktop:flex hidden">
        <Nav />
        <ResumeLink />
      </div>
      <div className="desktop:hidden block">
        <IconMenu />
      </div>
    </div>
  );
}
export default Header;
