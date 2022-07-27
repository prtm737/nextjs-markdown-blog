import Link from "next/link";

function Blogbox({ post }) {
  return (
    <div className="container flex fle w-100 mx-auto mb-16">
      <div>
        <Link href={`blog/${post.slug}`}>
          <h1 className="text-4xl font-semibold mt-4 mx-auto cursor-pointer">
            {post.data.metaTitle}
          </h1>
        </Link>
        <p className="text-gray-600 text-sm ">{post.data.date}</p>
        <p className="flex flex-wrap">{post.data.metaDesc}</p>
      </div>
      <img
        className="w-2/4 rounded-lg mx-auto drop-shadow-lg"
        src={post.data.socialImage}
      />
    </div>
  );
}

export default Blogbox;
