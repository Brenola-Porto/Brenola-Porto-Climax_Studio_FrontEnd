import React, { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addPortfolioItem = () => {
    setPortfolioItems([...portfolioItems, { image, title, description }]);
    setImage("");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-inputs">
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addPortfolioItem}>Add to Portfolio</button>
      </div>
      <div className="portfolio-gallery">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;