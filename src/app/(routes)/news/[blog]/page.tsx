import BlogDetails from "@/components/ui/large/blog_details/BlogDetails";
// import { postProps } from "@/types/postList";

const getData = async (id: string | number) => {
  try {
    let response = await fetch(`http://localhost:3000/api/blog/${id}`, {
      cache: "default",
    });
    let data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to Fetch Data by Id");
  }
};

type Data = {
  params: {
    blog: string | number | (string | number)[];
  };
};

const Page = async ({ params }: Data) => {
  const id: string | number | any = params.blog;
  let post = await getData(id);
  return (
    <>
      <BlogDetails post={post} />
    </>
  );
};

export default Page;
export function generateMetadata() {
  return {
    title: "Galaxy Blog - Main Category",
    description:
      "This is the galaxy blog, it contains information about the developer and owner of  website",
  };
}
