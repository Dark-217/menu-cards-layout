import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";

type Article = {
  objectID: string;
  title: string;
  author: string;
  created_at: string;
};

const CardList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/search?page=${currentPage - 1}`)
      .then((response) => {
        setArticles(response.data.hits);
        console.log("RRRR", response)
        setTotalPages(response.data.nbPages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]);

  return (
    <div className="h-screen p-24 overflow-auto">
      {articles.map((article) => (
        <Card
          key={article.objectID}
          title={article.title}
          author={article.author}
          createdAt={article.created_at}
          onRemove={() =>
            setArticles(articles.filter((a) => a.objectID !== article.objectID))
          }
        />
      ))}
      <Pagination
        total={totalPages}
        current={currentPage}
        onSelect={setCurrentPage}
      />
    </div>
  );
};

export default CardList;
