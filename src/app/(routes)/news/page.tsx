import style from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/ui/small/button/Button";
import Link from "next/link";

import { FaClock } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";

const fetchBlogPosts = async () => {
  // Using Function to fetching data in Server Component.....
  try {
    let response = await fetch("http://localhost:3000/api/blog", {
      cache: "no-cache",
    });
    let data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server is not Responding");
  }
};

const page = async () => {
  let data = await fetchBlogPosts();
  return (
    <div className={style.container}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((value) => (
          <div className={style.blogCard} key={value.id}>
            <Image
              src={value.image || "@/images/post/post-lg/02.png"}
              width={575}
              height={371}
              alt="Image Not found"
              className={style.mainImage}
            />
            <div className={style.bloginfo}>
              <div className={style.headingBox}>
                <h1 className={style.heading}>
                  <Link href={`/blogs/${value._id}`}>{value.title}</Link>
                </h1>
              </div>
              <div className={style.date_category}>
                <span>
                  <FaClock className={style.icon} />
                  <p>{value.date}</p>
                </span>
                <span>
                  <BiSolidCategoryAlt className={style.icon} />
                  <p>{value.category}</p>
                </span>
              </div>
              <p className={style.mainDesc}>{value.desc}</p>
              <Button text="Read More" href={`/news/${value._id}`} />
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p> // Fallback if data is undefined or empty
      )}
    </div>
  );
};

export default page;
