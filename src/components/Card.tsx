import React, { useState } from "react";
import "../style/card.css";

type Props = {
  title: string;
  author: string;
  createdAt: string;
  url: string;
  tags: string;
  onRemove: () => void;
};

const Card: React.FC<Props> = ({ title, author, createdAt, url, tags, onRemove }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="card" onClick={toggleExpand}>
      <div className="flex justify-between">
        <div className="card-title">{title}</div>
        <div className="card-content">{createdAt.slice(0, 10)}</div>
      </div>
      <div className="card-content">Author: {author}</div>
      {expanded && (
        <>
          <div className="card-content">URL: <a href={url}>{url}</a></div>
          <div className="card-content">Tags: {tags}</div>
          <div className="flex justify-end">
            <button className="card-button" onClick={onRemove}>
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
