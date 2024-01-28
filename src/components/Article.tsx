import Link from "next/link";
import { ArticleType } from "@/types/articleTypes";

const Article: React.FC<ArticleType> = ({ title, content }) => {
  return (
    <Link href={`/articles/${title}`} passHref>
      <div className="cursor-pointer max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md my-4">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="text-gray-700">{content || "No content available"}</div>
      </div>
    </Link>
  );
};

export default Article;
