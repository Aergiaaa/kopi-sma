import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="m-0 p-0 box-border outline-none no-underline scroll-smooth bg-[var(--bg)] text-white">
      <div
        id="navbar"
        className="flex justify-between items-center bg-[rgba(1,1,1,0.8)] top-0 right-0 left-0 z-[9999] fixed border-b-[1px solid #513c28] "
      >
        <Link href="#" className=" font-[700] size-[2rem] text-white italic">
          Kopi <span className=" text-[var(--primary)]">Sma</span>.
        </Link>
        <nav className="text-white inline-block size-[1.2rem] m-[0 1rem] hover:text-[var(--primary)] after:block after:pb-[0.5rem] after:border-b[0.1rem solid var(--primary)] after:scale-x-0 after:transition-[0.2s linear] hover:after:scale-x-[0.5]">
          <Link href="#tentang">Tentang</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#tujuan">Tujuan</Link>
          <i id="darkmode" className=" hidden text-[var(--primary)]"></i>
        </nav>
      </div>
      <section
        id="hero"
        className=" min-h-[100vh] flex items-center bg-no-repeat relative bg-cover bg-img hero-after"
      >
        <main className=" p-[1.4rem 7%] max-w-[60rem]">
          <h1 className="size-[5rem] text-white shadow-[1px 1px 3px rgba(1,1,3,0.5)] leading-[1.2]">
            Pulang Sekolah Enaknya <span className="text-[#926d49]">Ngopi</span>{" "}
            Dulu Gk Sih?
          </h1>
          <p className="size-[1.6rem] mt-[0.7rem] leading-[1.3] font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nesciunt modi excepturi vero animi possimus ratione obcaecati
            incidunt illum aperiam! Explicabo incidunt reiciendis in quidem
            consequuntur, laboriosam ipsam voluptas veritatis?
          </p>
          <Link
            href="#menu"
            className=" mt-[1rem] inline-block p-[1rem 3 rem] size-[1.4rem] text-white bg-[var(--primary)] border-r-[0.5rem] shadow-[1px 1px 3px rgba(1,1,3,0.5)]"
          >
            Liat dulu aja
          </Link>
        </main>
      </section>
      <div id="detail">
        <section id="tentang" className=" p-[8rem 7% 1.4rem]">
          <h2 className=" text-center size-[2.6rem] mb-[3rem]">
            <span className="text-[var(--primary)]">Tentang</span> Kami
          </h2>
          <div id="row" className="flex">
            <Image
              alt="gambar kami"
              className=" flex-[1 1 45rem] w-[100%]"
            ></Image>
            <section id="content" className="flex-[1 1 35rem] p-[0 1rem]">
              <h3 className="size-[1.8rem] mb-[1rem]">Siapa Kami?</h3>
              <div id="content content" className=" size-[1.3rem] font-[300] leading-[1.6] mb-[0.8rem]">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  consequuntur blanditiis, fuga consequatur pariatur, distinctio
                  suscipit dolor impedit voluptatibus aliquid neque modi?
                  Accusantium nemo amet nesciunt cumque placeat. Quod, ipsum.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur odio suscipit, reprehenderit eos blanditiis
                  aperiam perspiciatis nemo quibusdam laboriosam earum sapiente
                  temporibus aliquid adipisci laudantium cumque consequuntur at
                  sed repellat.
                </p>
              </div>
            </section>
          </div>
        </section>
        <section id="menu" className=" p-[8rem 7% 1.4rem]">
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
        <div id="tujuan"></div>
      </div>
      <div id="footer"></div>
    </main>
  );
}
