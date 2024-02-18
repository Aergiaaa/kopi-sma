import Image from "next/image";
import home from "../../../../public/img/home.png";

export default function HomeDetail() {
  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">Kopi Sekolah</h1>
          <h2 className="home__subtitle">
            Kualitas Tinggi
            <br />
            Bukan Harga Petinggi.
          </h2>
          <a href="#menu" className="button">
            Lihat Menu
          </a>
        </div>

        <Image
          width={300}
          height={300}
          src={home}
          alt=""
          className="home__img image"
        />
      </div>
    </section>
  );
}
