import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import { UsersPageProps } from "@/interfaces";
import Header from "@/components/layout/Header";

// const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
//   console.log(users)
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Users</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {users.map((user) => (
//           <UserCard key={user.id} {...user} />
//         ))}
//       </div>
//     </div>
//   );
// };


const Users: React.FC<UsersPageProps> = ({ users }) => {
console.log(users)
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
                users?.map((user) => (
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
    const users = await response.json()

    return {
        props: {
            users
        }
    }
}

export default Users;