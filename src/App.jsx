import { useState, useEffect } from "react";
import axios from "axios";

// Komponen utama
function App() {
  const [articles, setArticles] = useState([]);

  // Ambil data dari NewsAPI
  const fetchNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: "iklim",
          language: "id",
          sortBy: "publishedAt",
          apiKey: "a33835bbd1ca4aef99e89255f3a056ab",
          pageSize: 100,
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Gagal ambil berita:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {articles.map((article, idx) => (
        <NewsCard key={idx} article={article} />
      ))}
    </div>
  );
}

// Komponen kartu berita
function NewsCard({ article }) {
  return (
    <div className="card  bg-base-100 shadow-sm w-xs">
      <figure className="w-1/1">
        <img
          src={article.urlToImage || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={article.title}
          className="object-cover h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{article.title}</h2>
        <p className="text-xs line-clamp-3 justify-center">{article.description || "Tidak ada deskripsi."}</p>
        <div className="card-actions justify-end">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary btn-sm">Baca</button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Hanya satu ekspor default
export default App;
