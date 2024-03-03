import Link from "next/link";
export default function Tujuan() {
  return (
    <section className="contact section bd-container" id="contact">
      <div className="contact__container bd-grid">
        <div className="contact__data">
          <span className="section-subtitle contact__initial">Apa sih</span>
          <h2 className="section-title contact__initial">Tujuan saya?</h2>
          <p align="justify" className="contact__description">
            Ini adalah mockup website dari
            <Link href="https://janji-jiwa.vercel.app/">
              {" "}
              <span class=" text-[var(--first-color)]">Janji Jiwa</span>{" "}
            </Link>
            yang saya buat, yang berisikan daftar menu dan harga dari Janji Jiwa
            . Website ini ditujukan untuk tugas terakhir masa sma saya.
            <br />
            Sekiranya ada saran atau masukan mengenai website ini bisa cek
            source dibawah ini:
          </p>

          <div className="contact__button">
            <a
              href="https://github.com/Aergiaaa"
              target="__blank"
              className="button"
            >
              <i className="bx bxl-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
