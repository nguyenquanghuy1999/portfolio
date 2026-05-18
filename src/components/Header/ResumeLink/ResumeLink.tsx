import resume from "../../../assets/files/resume.pdf";

const linkClass = `
  absolute inset-0
  rounded-sm border border-current
  desktop:bg-bg bg-surface text-brand
  text-center text-sm desktop:leading-9 leading-11
  transition duration-300
  hover:-translate-1
`;

function ResumeLink() {
  return (
    <div className="desktop:ml-5 desktop:h-9.5 desktop:w-20.25 relative m-auto h-12.75 w-38.25 rounded-md">
      <div className="bg-brand absolute inset-0 rounded-sm leading-1"></div>
      <a href={resume} target="_blank" className={linkClass}>
        Resume
      </a>
    </div>
  );
}
export default ResumeLink;
