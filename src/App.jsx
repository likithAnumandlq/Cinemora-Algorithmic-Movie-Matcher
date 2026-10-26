import React, { useState } from 'react';
import './App.css';

// --- 1. THE FLAWLESS DATABASE ---
const mockMovies = [
  // Epic Telugu Blockbusters
  { 
    id: 101, title: "RRR", rating: "7.8/10", year: 2022, genre: "Telugu Blockbusters", 
    desc: "A fictitious story about two legendary revolutionaries and their journey away from home.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", 
    trailerId: "f_vbAtFSEc0" 
  },
  { 
    id: 102, title: "Baahubali", rating: "8.0/10", year: 2015, genre: "Telugu Blockbusters", 
    desc: "In ancient India, an adventurous man becomes involved in a decades-old feud.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg", 
    trailerId: "sOEg_YZQsTI" 
  },
  { 
    id: 103, title: "Pushpa: The Rise", rating: "7.6/10", year: 2021, genre: "Telugu Blockbusters", 
    desc: "A laborer rises through the ranks of a red sandalwood smuggling syndicate.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg", 
    trailerId: "pKctjlrbEkI" 
  },

  // Sci-Fi & Futuristic
  { 
    id: 201, title: "Interstellar", rating: "8.7/10", year: 2014, genre: "Sci-Fi", 
    desc: "A team of explorers travel through a wormhole in space to ensure humanity's survival.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg", 
    trailerId: "2LqzF5WauAw" 
  },
  { 
    id: 202, title: "Inception", rating: "8.8/10", year: 2010, genre: "Sci-Fi", 
    desc: "A thief steals corporate secrets through dream-sharing technology.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg", 
    trailerId: "8hP9D6kZseM" 
  },
  { 
    id: 203, title: "Dune", rating: "8.0/10", year: 2021, genre: "Sci-Fi", 
    desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg", 
    trailerId: "8g18jFHCLXk" 
  },

  // Crime & Political
  { 
    id: 301, title: "The Godfather", rating: "9.2/10", year: 1972, genre: "Crime & Political", 
    desc: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg", 
    trailerId: "UaVTIH8mujA" 
  },
  { 
    id: 302, title: "Joker", rating: "8.4/10", year: 2019, genre: "Crime & Political", 
    desc: "A mentally troubled stand-up comedian embarks on a downward spiral.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg", 
    trailerId: "t433PEQGErc" 
  },
  { 
    id: 303, title: "The Dark Knight", rating: "9.0/10", year: 2008, genre: "Crime & Political", 
    desc: "When the Joker wreaks havoc, Batman must accept his greatest test.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg", 
    trailerId: "EXeTwQWrcwY" 
  },

  // Chilling Horror
  { 
    id: 401, title: "The Shining", rating: "8.4/10", year: 1980, genre: "Horror", 
    desc: "A family heads to an isolated hotel for the winter where a sinister presence lurks.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg", 
    trailerId: "S014oGZiSdI" 
  },
  { 
    id: 402, title: "Get Out", rating: "7.7/10", year: 2017, genre: "Horror", 
    desc: "A young African-American visits his white girlfriend's parents.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png", 
    trailerId: "DzfpyUB60YY" 
  },
  { 
    id: 403, title: "A Quiet Place", rating: "7.5/10", year: 2018, genre: "Horror", 
    desc: "A family is forced to live in silence while hiding from creatures.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png", 
    trailerId: "WR7cc5t7tv8" 
  },

  // Directorial Masterpieces
  { 
    id: 501, title: "Parasite", rating: "8.5/10", year: 2019, genre: "Directorial Masterpieces", 
    desc: "Greed and class discrimination threaten the relationship between two families.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png", 
    trailerId: "5xH0HfJHxYI" 
  },
  { 
    id: 502, title: "Oppenheimer", rating: "8.6/10", year: 2023, genre: "Directorial Masterpieces", 
    desc: "The story of American scientist J. Robert Oppenheimer and the atomic bomb.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg", 
    trailerId: "uYPbbksJxIg" 
  },
  { 
    id: 503, title: "Whiplash", rating: "8.5/10", year: 2014, genre: "Directorial Masterpieces", 
    desc: "A promising young drummer enrolls at a cut-throat music conservatory.", 
    poster: "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg", 
    trailerId: "7d_jQycdQGo" 
  }
];

// --- 2. LEFT NAVIGATION (Rebranded to CINEMORA) ---
const SideNav = ({ currentTab, setTab }) => (
  <nav className="hotstar-sidebar">
    <div className="brand-logo">
      <svg viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
      </svg>
      {/* BRAND NAME UPDATED HERE */}
      <span className="brand-text">CINEMORA</span>
    </div>
    <div className="nav-items">
      <div className={`nav-item ${currentTab === 'Home' ? 'active' : ''}`} onClick={() => setTab('Home')}>
        <span className="icon">🏠</span><span className="label">Home</span>
      </div>
      <div className={`nav-item ${currentTab === 'Search' ? 'active' : ''}`} onClick={() => setTab('Search')}>
        <span className="icon">🔍</span><span className="label">Search</span>
      </div>
      <div className={`nav-item ${currentTab === 'MyList' ? 'active' : ''}`} onClick={() => setTab('MyList')}>
        <span className="icon">➕</span><span className="label">My List</span>
      </div>
    </div>
  </nav>
);

// --- 3. THE MOVIE CARD COMPONENT (FIXES THE BLANK SCREEN BUG!) ---
// Extracting this component ensures React's 'Rules of Hooks' are perfectly followed.
const MovieCard = ({ movie, onSelect, isGrid }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div 
      className="hotstar-card" 
      onClick={() => onSelect(movie)}
      style={isGrid ? { flex: '0 0 200px' } : {}}
    >
      {!imgError ? (
        <img src={movie.poster} alt={movie.title} loading="lazy" onError={() => setImgError(true)} />
      ) : (
        <div className="fallback-poster">
          <h3 className="fallback-title" style={{fontSize: '1rem'}}>{movie.title}</h3>
        </div>
      )}
      <div className="card-hover-data">
        <h4>{movie.title}</h4>
        <p>⭐ {movie.rating}</p>
        <button className="play-mini">▶ View</button>
      </div>
    </div>
  );
};

// --- 4. MOVIE ROWS ---
const MovieRow = ({ title, movies, onSelect }) => (
  <div className="movie-row-container">
    <h3 className="row-title">{title}</h3>
    <div className="hotstar-row">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  </div>
);

// --- 5. INTERACTIVE MODAL & YOUTUBE TRAILER ---
const DetailModal = ({ movie, onClose, onAddToList, isInList }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={() => { onClose(); setShowTrailer(false); }}>✕</button>
        
        {/* NATIVE YOUTUBE VIDEO EMBED */}
        {showTrailer && movie.trailerId ? (
          <div className="slideshow-container" style={{ background: '#000', height: '500px', position: 'relative' }}>
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube-nocookie.com/embed/${movie.trailerId}?autoplay=1&mute=1&controls=1&rel=0`} 
              title={`${movie.title} Trailer`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="slideshow-overlay">
              <button className="back-btn" onClick={() => setShowTrailer(false)}>← Back to Details</button>
            </div>
          </div>
        ) : (
          <div className="modal-body">
            <div className="modal-poster-wrapper">
              <img src={movie.poster} alt={movie.title} onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="modal-info">
              <h2>{movie.title}</h2>
              <div className="meta-tags">
                <span className="year">{movie.year}</span>
                <span className="rating">⭐ {movie.rating}</span>
                <span className="genre-tag">{movie.genre}</span>
              </div>
              <p className="modal-desc">{movie.desc}</p>
              <div className="modal-actions">
                <button className="play-btn" onClick={() => setShowTrailer(true)}>
                  🎬 Explore the World
                </button>
                <button 
                  className={`list-btn ${isInList ? 'added' : ''}`} 
                  onClick={() => onAddToList(movie)}
                  style={{ backgroundColor: isInList ? '#00E5FF' : 'transparent', color: isInList ? '#000' : '#fff' }}
                >
                  {isInList ? '✓ In My List' : '+ Add to List'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 6. MAIN APP LAYOUT ---
export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [myList, setMyList] = useState([]);

  const toggleMyList = (movie) => {
    if (myList.find(m => m.id === movie.id)) {
      setMyList(myList.filter(m => m.id !== movie.id)); 
    } else {
      setMyList([...myList, movie]); 
    }
  };

  const heroMovie = mockMovies.find(m => m.id === 201); 

  const filteredMovies = mockMovies.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="hotstar-layout">
      <SideNav currentTab={currentTab} setTab={setCurrentTab} />
      
      <main className="hotstar-main">
        {currentTab === 'Home' && (
          <>
            <div className="hero-banner" style={{
              backgroundImage: `url(https://img.youtube.com/vi/${heroMovie.trailerId}/maxresdefault.jpg)`,
              backgroundColor: '#1a1c23'
            }}>
              <div className="hero-vignette"></div>
              <div className="hero-content">
                <h1 className="hero-title">{heroMovie.title}</h1>
                <p className="hero-desc">{heroMovie.desc}</p>
                <div className="hero-buttons">
                  <button className="play-btn" onClick={() => setSelectedMovie(heroMovie)}>🎬 Explore the World</button>
                </div>
              </div>
            </div>

            <div className="rows-container">
              <MovieRow title="Crime & Political" movies={mockMovies.filter(m => m.genre === 'Crime & Political')} onSelect={setSelectedMovie} />
              <MovieRow title="Sci-Fi & Futuristic" movies={mockMovies.filter(m => m.genre === 'Sci-Fi')} onSelect={setSelectedMovie} />
              <MovieRow title="Chilling Horror" movies={mockMovies.filter(m => m.genre === 'Horror')} onSelect={setSelectedMovie} />
              <MovieRow title="Directorial Masterpieces" movies={mockMovies.filter(m => m.genre === 'Directorial Masterpieces')} onSelect={setSelectedMovie} />
              <MovieRow title="Epic Telugu Blockbusters" movies={mockMovies.filter(m => m.genre === 'Telugu Blockbusters')} onSelect={setSelectedMovie} />
            </div>
          </>
        )}

        {currentTab === 'Search' && (
          <div style={{ padding: '60px' }}>
            <h2 className="row-title" style={{ marginLeft: 0 }}>Search the Database</h2>
            <input 
              type="text" 
              placeholder="Type a movie name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', maxWidth: '500px', padding: '15px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#1e1f26', color: '#fff', fontSize: '1.2rem', marginBottom: '40px', outline: 'none' }}
            />
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} onSelect={setSelectedMovie} isGrid={true} />
              ))}
            </div>
          </div>
        )}

        {currentTab === 'MyList' && (
          <div style={{ padding: '60px' }}>
            <h2 className="row-title" style={{ marginLeft: 0 }}>My Watchlist</h2>
            {myList.length === 0 ? (
              <p style={{ color: '#888', fontSize: '1.2rem' }}>Your list is empty. Go explore the world and add some films!</p>
            ) : (
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {myList.map(movie => (
                  <MovieCard key={movie.id} movie={movie} onSelect={setSelectedMovie} isGrid={true} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <DetailModal 
        movie={selectedMovie} 
        onClose={() => setSelectedMovie(null)} 
        onAddToList={toggleMyList}
        isInList={selectedMovie ? myList.some(m => m.id === selectedMovie.id) : false}
      />
    </div>
  );
}