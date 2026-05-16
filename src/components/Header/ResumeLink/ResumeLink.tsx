import resume from "../../../assets/files/resume.pdf";

const linkClass = `
  absolute inset-0
  rounded-sm border border-current
  bg-bg text-brand
  text-center text-sm leading-9
  transition duration-300
  hover:-translate-1
`;

function ResumeLink() {
  return (
    <div className="relative ml-5 h-9.5 w-20.25 rounded-md px-4 py-3">
      <div className="bg-brand absolute inset-0 rounded-sm"></div>
      <a href={resume} target="_blank" className={linkClass}>
        Resume
      </a>
    </div>
  );
}
export default ResumeLink;
