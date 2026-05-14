type IconLogoProps = {
  text?: string;
  fill?: string;
};

export const IconLogo = ({ text, fill }: IconLogoProps) => {
  return (
    <svg
      className="text-brand"
      width="75"
      height="75"
      viewBox="0 0 360 280"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="150,15 258,77 258,202 150,265 42,202 42,77"
        style={{
          fill: `${fill}`,
          stroke: "currentColor",
          strokeWidth: 13,
        }}
      />
      {text && (
        <text x="110" y="175" fill="currentColor" fontSize="110">
          {text}
        </text>
      )}
    </svg>
  );
};
