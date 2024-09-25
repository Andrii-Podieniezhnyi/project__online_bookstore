import React, { useState } from 'react';
import './difficulty_level_filter.css';
import { useBooks } from '../book_context/book_context';
import pichu_ico from "../../media/levels_icons/pichu_ico.webp";
import pikachu_ico from "../../media/levels_icons/pikachu_ico.png";
import raichu_ico from "../../media/levels_icons/raichu_ico.webp";
import pikachu_ninja_ico from "../../media/levels_icons/pikachu_ninja_ico.png";
import pokeBall_all_ico from "../../media/levels_icons/pokeBall_all.png";

const levels = [
  { name: 'All', value: 'all', img: pokeBall_all_ico },
  { name: 'junior', value: 'junior', img: pichu_ico },
  { name: 'middle', value: 'mid', img: pikachu_ico },
  { name: 'senior', value: 'senior', img: raichu_ico },
  { name: 'ninja', value: 'ninja', img: pikachu_ninja_ico },
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
