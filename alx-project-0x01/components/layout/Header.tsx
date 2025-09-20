import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
    return (
        <header className= "w-full bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="font-bold text-xl">My App</h1>
            <nav className="space-x-4">
                <link href="/" >Home</link>
                <link href="/posts"> Posts</link>
                <link href="/users"> Users</link>
            </nav>
        </header>
    )''
};

export default Header;