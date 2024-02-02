import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[var(--bg)] text-white font-poppins m-0 p-0 box-border [outline:none;] [text-decoration:none;] ">
      <nav className=" navbar">
        <Link href="#" className=" text-[2rem] font-[700] text-white italic">
          kopi<span className=" text-[var(--primary)]">SMA</span>.
        </Link>
        <nav className="">
          <Link
            href="#tentang"
            className=" hover:after:transform-scalex-05 navbar-nav after:nav-after hover:text-[var(--primary)]"
          >
            Tentang
          </Link>
          <Link
            href="#menu"
            className="hover:after:transform-scalex-05 navbar-nav after:nav-after hover:text-[var(--primary)]"
          >
            Menu
          </Link>
          <Link
            href="#tujuan"
            className="navbar-nav hover:after:transform-scalex-05 after:nav-after hover:text-[var(--primary)]"
          >
            Tujuan
          </Link>
          <i id="darkmode" className=" hidden text-[var(--primary)]"></i>
        </nav>
      </nav>

      <section
        id="hero"
        className=" h-[972px] flex min-h-[100vh] items-center bg-hero bg-no-repeat bg-cover bg-center relative after:hero-after gradient-mask"
      >
        <main className=" py-[1.4rem] px-[7%] w-[100%] fixed top-[130px] text-center">
          <h1 className=" hero-content">
            Secangkir
            <span className="text-[var(--primary2)]"> Kopi </span>
            Setelah Sekolah
          </h1>
          <p className=" text-[1.6rem] mt-[0.7rem] leading-[1.3] text-[300] [text-shadow: 1px 1px 3px rgba(1,1,3,0.5);] ">
            Lorem ipsum dolor sit.
          </p>
        </main>
      </section>
      <div id="detail">
        <section id="tentang" className=" pt-[8rem] px-[7%] pb-[1.4rem]">
          <h2 className=" text-justify text-[2.6rem] mb-[3rem] font-[300]">
            <span className="text-[var(--primary)]">Tentang</span> Kami
          </h2>
          <div id="row" className="flex">
            <section
              id="content"
              className="flex-grow-[1] flex-shrink-[1] basis-[35rem] py-[0] px-[1rem]"
            >
              <h3 className="text-[1.8rem] mb-[1rem] font-[500] ">
                kopi<span className=" text-[var(--primary2)]">sma</span>
              </h3>
              <div
                id="content content"
                className=" text-[1.3rem] leading-[1.6] mb-[0.8rem]"
              >
                <p>
                  {" "}
                  Mengadopsi konsep fresh-to-cup yang menyajikan pilihan Kopi
                  Lokal Indonesia. Penyajian kami yang trendi dan tetap
                  menghadirkan produk-produk klasik bercita rasa kopi adalah
                  kelebihan kami.
                </p>
              </div>
            </section>
            <Image
              alt="gambar kami"
              className=" flex-grow-[1] flex-shrink-[1] basis-[45rem] w-[100%] "
              src="/img/tyler-nix-yGb2igKldYg-unsplash.jpg"
              width="400"
              height="400"
            ></Image>
          </div>
        </section>
        {/* <section id="menu" className=" p-[8rem 7% 1.4rem]">
          <h2 className=" text-center size-[2.6rem] mb-[1rem]"><span className="text-[var(--primary)]">Our</span> Menu</h2>
          <p className=" text-center max-w-[30rem] m-auto font-[300] leading-[1.6] size-[1.3rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sequi dignissimos perferendis placeat enim voluptatibus tempora possimus optio labore nam, necessitatibus architecto, ipsum numquam rem ad provident modi maiores ipsa?</p>
          <div id="row" className="flex flex-wrap mt-[5rem] justify-center size-[1.8rem]">
          <div id="menu-card-1" className=" text-center p-[3rem]">
          <Image alt="kopi" className=" border-r-[50%] w-[30%]"></Image>
          <h3 id="title" className=" mt-[1rem auto 0.5rem]">Espresso</h3>
          <p id="price">IDR 20k</p>
          </div>
          </div>
        </section>
        <div id="tujuan"></div> */}
      </div>
      {/* <div id="footer"></div> */}
    </div>
  );
}
