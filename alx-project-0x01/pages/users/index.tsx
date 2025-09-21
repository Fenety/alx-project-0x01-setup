import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import { UsersPageProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard"
import { PostsPageProps } from "@/interfaces";

const Users: React.FC<UsersPageProps> = ({ posts }) => {
console.log(posts)
return (
        <div className="flex flex-col h-screen">
          <Header />
          <main className="p-4">
            <div className="flex justify-between">
            <h1 className=" text-2xl font-semibold">User Content</h1>
            <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800">Add User</button>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
              {
                posts.map((user) => (
                  <UserCard key={user.id} {...user} />
                ))
              }
            </div>
          </main>
        </div>
  )
}
  

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;