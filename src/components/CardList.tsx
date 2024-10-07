import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";
import SortingSelect from "./SortingSelect";  // Import the sorting component

type Article = {
  objectID: string;
  title: string;
  author: string;
  created_at: string;
  url: string;
  _tags: string[];
};

const CardList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    axios.get(`https://hn.algolia.com/api/v1/search?page=${currentPage - 1}`)
      .then(response => {
        setArticles(response.data.hits);
        setTotalPages(response.data.nbPages);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [currentPage]);

  const sortedArticles = [...articles].sort((a, b) => {
    if (!sortField) return 0;
    const valueA = a[sortField as keyof Article];
    const valueB = b[sortField as keyof Article];
    if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="h-screen overflow-auto p-6">
      <SortingSelect
        sortField={sortField}
        sortDirection={sortDirection}
        onFieldChange={setSortField}
        onDirectionChange={setSortDirection}
      />
      {sortedArticles.map((article) => (
        <Card
          key={article.objectID}
          title={article.title}
          author={article.author}
          url={article.url}
          tags={article._tags.join(', ')}
          createdAt={article.created_at}
          onRemove={() => setArticles(articles.filter((a) => a.objectID !== article.objectID))}
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