import React from 'react';
import './FilterComponent.css';
import { useBooks } from '../book_context/book_context';

const levels = [
  { name: 'All', value: 'all', img: 'path/to/all.png' },
  { name: 'Junior', value: 'junior', img: 'path/to/pichu.png' },
  { name: 'Mid-Level', value: 'mid', img: 'path/to/pikachu.png' },
  { name: 'Senior', value: 'senior', img: 'path/to/raichu.png' },
  { name: 'Ninja', value: 'ninja', img: 'path/to/ninja-pikachu.png' },
];

const FilterComponent = () => {
  const { setSelectedLevel } = useBooks();

  return (
    <div className="filter-container">
      {levels.map(level => (
        <div
          key={level.value}
          className="filter-item"
          onClick={() => setSelectedLevel(level.value)}
        >
          <img src={level.img} alt={level.name} className="filter-icon" />
          <span>{level.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
