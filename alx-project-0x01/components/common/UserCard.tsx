import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-bold text-blue-700">{name}</h2>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">#{id}</span>
      </div>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Username:</span> {username}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Email:</span>{" "}
        <a href={`mailto:${email}`} className="text-blue-600 underline">
          {email}
        </a>
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Phone:</span>{" "}
        <a href={`tel:${phone}`} className="text-blue-600 underline">
          {phone}
        </a>
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Website:</span>{" "}
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {website}
        </a>
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Company:</span> {company?.name}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Address:</span>{" "}
        {address?.suite}, {address?.street}, {address?.city}
      </p>
    </div>
  );
};

export default UserCard;