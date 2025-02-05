"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "./page.module.scss";

const blogsData = [
  {
    id: 1,
    title: "The Evolution of Music Streaming",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Top 10 Artists of the Year",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "How AI is Changing Music",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "The Power of Playlists",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "Upcoming Music Trends in 2025",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    title: "Why Vinyl is Making a Comeback",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Best Music Apps to Try in 2024",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    title: "The Role of Music in Mental Health",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    title: "Behind the Scenes: Making a Hit Song",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    title: "Exploring Different Music Genres",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 11,
    title: "Indie Music: The Rising Stars",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    title: "How to Start Your Music Career",
    image:
      "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljfGVufDB8fDB8fHww",
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className={style.blogsContainer}>
      <h1>Latest Music News</h1>
      <div className={style.blogsGrid}>
        {currentBlogs.map((blog) => (
          <div key={blog.id} className={style.blogCard}>
            <Image src={blog.image} alt={blog.title} height={500} width={700} />
            <h3>{blog.title}</h3>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={style.pagination}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastBlog >= blogsData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
