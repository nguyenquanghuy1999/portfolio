import { IconLogo } from "../../Icons/IconLogo";

function Logo() {
  return (
    <div className="relative hover:cursor-pointer">
      <div className="absolute">
        <IconLogo fill="var(--color-primary)" />
      </div>
      <div className="absolute transition duration-300 hover:-translate-1">
        <IconLogo text="A" fill="var(--color-surface)" />
      </div>
    </div>
  );
}
export default Logo;
