import PostCard from "@/components/common/PostCard";
import React from "react";

const PostsPage: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <PostCard title="First Post" content="This is the content of the first post." />
        </div>
    );
};

export default PostsPage
