import type React from "react";
import Header from "../../components/Header";

function LayoutNotSection({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
export default LayoutNotSection;