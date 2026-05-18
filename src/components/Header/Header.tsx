import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Nav from "./Nav";
import ResumeLink from "./ResumeLink";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 119);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "bg-bg desktop:px-12.5 tablet:px-10 fixed inset-0 flex h-25 items-center justify-between px-6.25 transition-all duration-150 ease-out",
        show && "-top-25",
      )}
    >
      <Logo />
      <div className="desktop:flex hidden items-center">
        <Nav />
        <ResumeLink />
      </div>
      <div className="desktop:hidden block">
        <Sidebar />
      </div>
    </div>
  );
}
export default Header;
