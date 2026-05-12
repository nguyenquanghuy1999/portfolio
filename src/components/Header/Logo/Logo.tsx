import { IconLogo } from "../../Icons/IconLogo";

function Logo() {
  return (
    <div className="relative h-25 hover:cursor-pointer">
      <div className="absolute mt-2">
        <IconLogo fill="var(--color-primary)" />
      </div>
      <div className="absolute mt-2 transition duration-300 hover:-translate-1">
        <IconLogo text="A" fill="var(--color-surface)" />
      </div>
    </div>
  );
}
export default Logo;
