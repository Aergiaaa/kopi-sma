import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="bg-[var(--bg)] text-white font-sans m-0 p-0 box-border [outline:none;] [text-decoration:none;] ">
=======
    <div className="bg-[var(--bg)] text-white m-0 p-0 box-border [outline:none;] [text-decoration:none;] ">
>>>>>>> feat
      <nav className=" navbar">
        <Link href="#" className=" text-[2rem] font-[700] text-white italic">
          Kopi<span className=" text-[var(--primary)]">Sekolah</span>.
        </Link>
        <nav className="navbar-detail">
          <Link
            id="nav-a"
            href="#tentang"
            className=" hover:after:transform-scalex-05 navbar-nav after:nav-after hover:text-[var(--primary)]"
          >
            Tentang
          </Link>
          <Link
            id="nav-a"
            href="#menu"
            className="hover:after:transform-scalex-05 navbar-nav after:nav-after hover:text-[var(--primary)]"
          >
            Menu
          </Link>
          <Link
            id="nav-a"
            href="#tujuan"
            className="navbar-nav hover:after:transform-scalex-05 after:nav-after hover:text-[var(--primary)]"
          >
            Tujuan
          </Link>
<<<<<<< HEAD
=======
          <i id="hamburger" className=" hidden text-[var(--primary)]"></i>
>>>>>>> feat
        </nav>
      </nav>

      <section
        id="hero"
        className=" flex min-h-[100vh] items-center bg-hero bg-no-repeat bg-cover bg-center relative gradient-mask"
      >
        <main className=" py-[1.4rem] px-[7%] w-[100%] fixed top-[180px] text-center">
          <h1 className=" hero-content">
            Nikmatnya Secangkir
            <span className="text-[var(--primary2)]"> Kopi </span>
            Setelah Sekolah
          </h1>
        </main>
      </section>
      <div id="detail">
        <section id="tentang" className=" pt-[8rem] px-[7%] pb-[1.4rem]">
          <h2 className=" text-center text-[2.6rem] mb-[3rem] font-[300]">
            <span className="text-[var(--primary)]">Tentang</span> Kami
          </h2>
          <div id="row" className="flex">
            <section
              id="content"
              className="flex-grow-[1] flex-shrink-[1] basis-[35rem] py-[0] px-[1rem]"
            >
              <div
                id="content-content"
                className=" text-[1.3rem] font-[100] leading-[1.6] mb-[0.8rem] pr-[1rem] "
              >
                <p>
                  {" "}
                  Kami berdedikasi untuk menciptakan kopi yang lezat dan
                  berkualitas tetapi dengan harga yang sangat terjangkau. Tujuan
                  kami adalah agar setiap orang, terutama generasi muda, bisa
                  menikmati rasa kopi yang enak setelah seharian belajar.
                </p>
              </div>
            </section>
            <Image
              alt="gambar kami"
              className="about-img"
              src="/img/tyler-nix-yGb2igKldYg-unsplash.jpg"
              width="400"
              height="300"
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
<<<<<<< HEAD
      <div id="footer"></div> */}
=======
      {/* <div id="footer"></div> */}
>>>>>>> feat
    </div>
  );
}
