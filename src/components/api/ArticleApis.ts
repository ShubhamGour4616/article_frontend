import { ArticleType } from "@/types/articleTypes";
import axios from "axios";

const getArticles = async (): Promise<ArticleType[] | undefined> => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getArticle: any = async ({ id }: { id: number }) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${id}`
    );
    return res;
  } catch (error) {
    return { message: error };
  }
};

const postArticle: any = async (data: ArticleType) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,
      { data }
    );
    return res;
  } catch (error) {
    return { message: error };
  }
};

const updateArticle: any = async ({
  data,
  id,
}: {
  data: ArticleType;
  id: number;
}) => {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${id}`,
      { data }
    );
    return res;
  } catch (error) {
    return { message: error };
  }
};

const deleteArticle: any = async ({ id }: { id: number }) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${id}`
    );
    return res;
  } catch (error) {
    return { message: error };
  }
};

export { getArticle, getArticles, postArticle, updateArticle, deleteArticle };
