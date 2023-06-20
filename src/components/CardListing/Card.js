import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-type">{card.card_type}</div>
      <div>Name: {card.name}</div>
      <div>Budget Name: {card.budget_name}</div>
      <div>Owner ID: {card.owner_id}</div>
      <div>Spent: {card.spent.value} {card.spent.currency}</div>
      <div>Available to Spend: {card.available_to_spend.value} {card.available_to_spend.currency}</div>
      {card.card_type === 'burner' && <div>Expiry: {card.expiry}</div>}
      {card.card_type === 'subscription' && <div>Limit: {card.limit}</div>}
      <div>Status: {card.status}</div>
    </div>
  );
};

export default Card;
