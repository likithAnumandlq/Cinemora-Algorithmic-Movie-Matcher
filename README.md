# Cinemora: Algorithmic Movie Matcher & UI

**Cinemora** is a comprehensive full-stack project demonstrating a Machine Learning recommendation engine paired with a production-grade interactive streaming interface.

## 🧠 Part 1: Machine Learning Architecture
The core recommendation system (`Movie_Recommender.ipynb`) utilizes a **Content-Based Filtering** approach to suggest films based on their metadata (`movies.csv`). 

**Technical ML Implementation:**
*   **Data Processing:** Utilizes `pandas` for dataset ingestion and feature extraction.
*   **Text Vectorization:** Implements `TfidfVectorizer` (Term Frequency-Inverse Document Frequency) from `scikit-learn` to process and numerically map movie genres.
*   **Algorithmic Matching:** Calculates `linear_kernel` (Cosine Similarity) across the TF-IDF matrix to instantly identify and rank the mathematical proximity between user selections and the database.

## 💻 Part 2: The Cinemora UI (Frontend)
To visualize the recommendation experience, the project includes a fully functional, responsive React application built with Vite. It mimics the architecture of modern OTT platforms.

**Key UI/UX Features:**
*   **Dynamic State Management:** Real-time search filtering and a functional "My Watchlist" feature using React Hooks.
*   **Cinematic Modals:** Interactive detail cards featuring metadata and seamless API integration for official YouTube trailer embeds.
*   **Fault-Tolerant Rendering:** Custom error-handling events built into the image rendering logic to gracefully display CSS fallback posters if external networks block media hotlinking.

## 📂 Repository Structure
*   `Movie_Recommender.ipynb` - The core Python Machine Learning model and similarity logic.
*   `movies.csv` - The foundational dataset containing movie IDs, titles, and genre tags.
*   `/src` & `/public` - The React frontend architecture, styling, and asset routing.

## 🚀 How to Run the UI Locally
1. Clone this repository to your local machine.
2. Open the directory in your terminal.
3. Run `npm install` to build dependencies.
4. Run `npm run dev` to start the local development server.
