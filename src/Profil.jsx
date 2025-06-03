export default function Profil() {
  return (
    <div className="profil flex-2 flex-wrap justify-items-center mt-10">
      <div className="card image-full w-5.5xl shadow-sm">
        <figure>
          <img src="/ca9f7381-d1ff-449a-a2ec-9a44be181e11.jpg" alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="text-2xl">
            {" "}
            <h1>
              <strong>Profil</strong>
            </h1>
          </div>

          <div className="w-40 rounded-full overflow-hidden  mt-4 mb-4">
            <img
              alt="Tailwind CSS Navbar component"
              src="/IMG_20250602_150509_168.jpg"
            />
          </div>
          <div class="card bg-transparent w-xs shadow-sm  outline outline-base-300 mb-4">
            <div class="card-body">
              <p>Nazil Tul Hikmah</p>
              <p>6.SI.D</p>
              <p>2217020130</p>
            </div>
          </div>
          <div className="card-actions align-column gap-4">
            <div class="card bg-transparent w-xs shadow-sm  outline outline-base-300">
              <div class="card-body">
                <p>Hobi : Sepakbola, Badminton, Stress Ngoding</p>
              </div>
            </div>
            <div class="card bg-transparent w-xs shadow-sm  outline outline-base-300">
              <div class="card-body">
                <p>WA : 012301230123</p>
                <a
                  href="https://github.com/Thnazil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github{" "}
                </a>
              </div>
            </div>

            <div class="card bg-transparent w-xs  shadow-sm  outline outline-base-300">
              <div class="card-body">
                <p>
                  "Tetap semangat, jangan menyerah, karena setiap usaha pasti
                  membuahkan hasil."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
