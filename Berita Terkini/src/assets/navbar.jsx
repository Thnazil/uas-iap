function Navbar() {
  return (
  <div className="navbar bg-base-100 shadow-sm border border-base-300 px-4">
     <div className="flex items-center gap-x-4 flex-1">
      <img src="Liestiny.svg" alt="Liestiny Logo" className="h-10 w-auto" />  
      <a className="text-2xl font-semibold">BERITA HARI INI</a>
    </div>
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto focus:outline-none"
      />
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
  </div>
</div>
  );
}
export default Navbar;
