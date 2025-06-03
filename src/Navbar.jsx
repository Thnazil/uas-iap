import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="navbar relative bg-base-100 shadow-sm border border-base-300 px-4">
      <div className="flex items-center gap-x-4 flex-1">
        <img src="Liestiny.svg" alt="Liestiny Logo" className="h-10 w-auto" />
        <Link
          to="/"
          className="text-2xl opacity-80 font-semibold hover:opacity-100"
        >
          BERITA HOT
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Cari berita..."
          onChange={handleChange}
          className="p-2 rounded text-black w-full"
        />

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="IMG_20250602_150509_168.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profil" className="justify-between">
                Profil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
