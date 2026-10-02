import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const anime = [
    { name: "Naruto", genre: "Action", rating: 8.4 },
    { name: "One Piece", genre: "Adventure", rating: 9.0 },
    { name: "Jujutsu Kaisen", genre: "Action", rating: 8.6 },
    { name: "Demon Slayer", genre: "Action", rating: 8.7 },
    { name: "Attack on Titan", genre: "Dark Fantasy", rating: 9.0 }
  ];

  const filteredAnime = anime.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <nav>
        <h2>AnimeWorld</h2>
        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <div className="container">
        <h1>Popular Anime</h1>

        <div className="cards">
          {filteredAnime.map((item) => (
            <div className="card" key={item.name}>
              <div className="image">{item.name}</div>
              <h2>{item.name}</h2>
              <p>Genre: {item.genre}</p>
              <p>⭐ {item.rating}</p>
              <button onClick={() => alert(`Opening ${item.name}`)}>
                Watch Now
              </button>
            </div>
          ))}
        </div>

        {filteredAnime.length === 0 && <p>No anime found.</p>}
      </div>
    </div>
  );
}

export default App;
