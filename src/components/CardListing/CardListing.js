import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import api from '../../services/api';
import './cardListing.css';


const CardListing = () => {
  const [cards, setCards] = useState([]);
  const [ setTab] = useState('Your');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.fetchCards();
        setCards(response.data);
      } catch (error) {
        console.log('Error fetching cards:', error);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (tabName) => {
    setTab(tabName);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div >
      <div classNmae="tabs">
        <button onClick={() => handleTabClick('Your')}>Your</button>
        <button onClick={() => handleTabClick('All')}>All</button>
        <button onClick={() => handleTabClick('Blocked')}>Blocked</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search by card name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <CardList cards={filteredCards} />
    </div>
  );
};

export default CardListing;
