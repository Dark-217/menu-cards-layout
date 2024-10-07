import React from 'react';
import '../style/pagination.css';

interface PaginationProps {
    total: number;
    current: number;
    onSelect: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, current, onSelect }) => {
    const pageNumbers = [];

    pageNumbers.push(1);

    let lowerLimit = Math.max(2, current - 2);
    let upperLimit = Math.min(total - 1, current + 2);

    if (current - 1 <= 3) {
        upperLimit = 5 < total ? 5 : total - 1;
    }

    if (total - current <= 3) {
        lowerLimit = total - 4 > 1 ? total - 4 : 2;
    }

    if (lowerLimit > 2) {
        pageNumbers.push('...');
    }
    for (let i = lowerLimit; i <= upperLimit; i++) {
        pageNumbers.push(i);
    }
    if (upperLimit < total - 1) {
        pageNumbers.push('...');
    }

    if (total > 1) {
        pageNumbers.push(total);
    }

    return (
        <div className="pagination-container">
            <button onClick={() => onSelect(Math.max(1, current - 1))} disabled={current === 1}>
                ⟨⟨
            </button>
            {pageNumbers.map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && onSelect(page)}
                    className={`ellipsis ${typeof page === 'number' ? (current === page ? 'active' : '') : 'ellipsis'}`}
                >
                    {page}
                </button>
            ))}
            <button onClick={() => onSelect(Math.min(total, current + 1))} disabled={current === total}>
                ⟩⟩
            </button>
        </div>
    );
};

export default Pagination;
