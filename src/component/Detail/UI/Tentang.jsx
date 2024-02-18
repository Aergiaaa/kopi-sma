import Image from "next/image";
import about from "../../../../public/img/about.jpg";

export default function Tentang() {
  return (
    <section className="about section bd-container" id="about">
      <div className="about__container  bd-grid">
        <div className="about__data">
          <span className="section-subtitle about__initial">Tentang</span>
          <h2 className="section-title about__initial">Kopi Sekolah</h2>
          <p align="justify" className="about__description">
            Mengadopsi konsep fresh-to-cup yang menyajikan pilihan Kopi Lokal
            Indonesia. Penyajian kami yang trendi dan tetap menghadirkan
            produk-produk klasik bercita rasa.
            <br />
            Dengan pengalaman lebih dari satu dekade, Kami juga berhasil
            menemukan cara untuk menghasilkan produk-produk berkualitas dengan
            harga yang terjangkau. Visi kami adalah menjadikan Kopi Kami sebagai
            merk kedai kopi yang berada di setiap sudut kota yang ramah dengan
            pelajar.
          </p>
        </div>

        <Image src={about} alt="" className="about__img" />
      </div>
    </section>
  );
}
