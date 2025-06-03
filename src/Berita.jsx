import { useState, useEffect } from "react";
import axios from "axios";

const Berita = ({ InputSearch }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "iklim",
            language: "id",
            sortBy: "publishedAt",
            apiKey: "a33835bbd1ca4aef99e89255f3a056ab",
            pageSize: 100,
          },
        });
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Gagal ambil berita:", error);
      }
    };
    fetchNews();
  }, []);

  const BeritaHasilSearch = InputSearch
    ? articles.filter((item) =>
        item.title?.toLowerCase().includes(InputSearch.toLowerCase())
      )
    : articles;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <p className="text-lg">Memuat berita...</p>
            <div className="loader"></div>
          </div>
        </div>
      ) : BeritaHasilSearch.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {BeritaHasilSearch.map((article, idx) => (
            <NewsCard key={article.url || idx} BeritaHasilSearch={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Tidak ada berita dengan judul "<strong>{InputSearch}</strong>"
        </p>
      )}
    </div>
  );
};

function NewsCard({ BeritaHasilSearch }) {
  return (
    <div className="card bg-base-100 shadow-sm w-xs">
      <figure className="w-full">
        <img
          src={
            BeritaHasilSearch.urlToImage ||
            "https://via.placeholder.com/300x200?text=No+Image"
          }
          alt={BeritaHasilSearch.title}
          className="object-cover h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{BeritaHasilSearch.title}</h2>
        <p className="text-xs line-clamp-3">
          {BeritaHasilSearch.description || "Tidak ada deskripsi."}
        </p>
        <div className="card-actions justify-end">
          <a
            href={BeritaHasilSearch.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-sm">Baca</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Berita;
