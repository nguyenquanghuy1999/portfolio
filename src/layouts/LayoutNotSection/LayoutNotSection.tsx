import type React from "react";
import Header from "../../components/Header";

function LayoutNotSection({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mt-25">{children}</div>
    </>
  );
}
export default LayoutNotSection;
