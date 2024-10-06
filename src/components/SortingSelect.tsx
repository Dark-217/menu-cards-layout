import React from 'react';
import '../style/sorting.css'

interface SortingSelectProps {
  sortField: string;
  sortDirection: 'asc' | 'desc';
  onFieldChange: (field: string) => void;
  onDirectionChange: (direction: 'asc' | 'desc') => void;
}

const SortingSelect: React.FC<SortingSelectProps> = ({ sortField, sortDirection, onFieldChange, onDirectionChange }) => {
  return (
    <div className="sorting-container">
        <div>Sort by: </div>
      <select className="sort-select" value={sortField} onChange={(e) => onFieldChange(e.target.value)}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="created_at">Created Date</option>
      </select>
      <select className="sort-select" value={sortDirection} onChange={(e) => onDirectionChange(e.target.value as 'asc' | 'desc')}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortingSelect;
