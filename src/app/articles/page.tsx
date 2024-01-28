"use client";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { articleListState } from "@/store/atoms";
import Article from "@/components/Article";
import { getArticles } from "@/components/api/ArticleApis";
import { ArticleType } from "@/types/articleTypes";

const Page = () => {
  const articles = useRecoilValue(articleListState);
  const setArticles = useSetRecoilState(articleListState);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await getArticles();

      if (res) {
        // Ensure that the response data is an array of articles
        const receivedArticles: ArticleType[] = res;

        setArticles(receivedArticles);
      }
    };

    fetchArticles();
  }, [setArticles]);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.title} {...article} />
      ))}
    </div>
  );
};

export default Page;
