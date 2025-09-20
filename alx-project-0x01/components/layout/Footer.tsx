import Link from "next/link";   
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className = "w-full bg-grey-200 text-center p-4 mt-8">
            <p class Name="text-grey-600">&copy; {newDate().getFullYear()} My App</p>
        </footer>
    );
};

export default Footer;