import React, { useState } from 'react';
import './difficulty_level_filter.css';
import { useBooks } from '../book_context/book_context';
import pichu_ico from "../../media/levels_icons/pichu_ico.png";
import pikachu_ico from "../../media/levels_icons/pikachu_ico.png"

const levels = [
  { name: 'All', value: 'all', img: 'path/to/all.png' },
  { name: 'Junior', value: 'junior', img: pichu_ico },
  { name: 'Mid-Level', value: 'mid', img: 'path/to/pikachu.png' },
  { name: 'Senior', value: 'senior', img: 'path/to/raichu.png' },
  { name: 'Ninja', value: 'ninja', img: 'path/to/ninja-pikachu.png' },
];

const FilterComponent = () => {
  const { setSelectedLevel } = useBooks();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="filter-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Select Level
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {levels.map(level => (
            <div
              key={level.value}
              className="dropdown-item"
              onClick={() => {
                setSelectedLevel(level.value);
                setDropdownOpen(false);
              }}
            >
              <img src={level.img} alt={level.name} className="filter-icon" />
              <span>{level.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
