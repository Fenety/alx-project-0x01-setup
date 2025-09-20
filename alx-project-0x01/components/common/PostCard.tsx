import React from "react";

interface PostCardprops {
    title: string;
    cntent: string;
}

const PostCard: React.Fc<PostCardProps> = ({ title, content}) = > {
    return (
        <div className= "border rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold"> {title}</h2>
            <p className="text-gray-700 mt-2"> {body} </p>
        </div>
    );
};

export default PostCard;
