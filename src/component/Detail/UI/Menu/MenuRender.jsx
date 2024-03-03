import Image from "next/image";
import menu1 from "../../../../../public/img/menu/menu1.png";
import menu2 from "../../../../../public/img/menu/menu2.png";
import menu3 from "../../../../../public/img/menu/menu3.png";
import menu4 from "../../../../../public/img/menu/menu4.png";
import menu5 from "../../../../../public/img/menu/menu5.png";
import menu6 from "../../../../../public/img/menu/menu6.png";
import menu7 from "../../../../../public/img/menu/menu7.png";
import menu8 from "../../../../../public/img/menu/menu8.png";
import menu9 from "../../../../../public/img/menu/menu9.png";

export default function MenuRender() {
  return (
    <div className="menu__container bd-grid">
      <div className="menu__content" key={1}>
        <Image
          src={menu1}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">ES KOPI SUSU</h3>
        <span className="menu__detail">Espresso dan susu pakai gula aren</span>
        <span className="button menu__button">18k</span>
      </div>

      <div className="menu__content" key={2}>
        <Image
          src={menu2}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">ES KOPI POKAT</h3>
        <span className="menu__detail">
          Espresso, alpukat ditambah es krim cokelat
        </span>
        <span className="button menu__button">28k</span>
      </div>

      <div className="menu__content" key={3}>
        <Image
          src={menu3}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">ES COCO PRESSO</h3>
        <span className="menu__detail">Espresso dan air kelapa</span>
        <span className="button menu__button">18k</span>
      </div>

      <div className="menu__content" key={4}>
        <Image
          src={menu4}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">ES KOPI HITAM</h3>
        <span className="menu__detail">Espresso dan air mineral</span>
        <span className="button menu__button">15k</span>
      </div>

      <div className="menu__content" key={5}>
        <Image
          src={menu5}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">ES KOPI SOKLAT</h3>
        <span className="menu__detail">Espresso, susu segar dan cokelat</span>
        <span className="button menu__button">20k</span>
      </div>

      <div className="menu__content" key={6}>
        <Image
          src={menu6}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">ICE AMERICANO</h3>
        <span className="menu__detail">Kopi hitam tanpa gula</span>
        <span className="button menu__button">15k</span>
      </div>

      <div className="menu__content" key={7}>
        <Image
          src={menu7}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">SOY COFFEE LATTE</h3>
        <span className="menu__detail">Soya milk dan espresso</span>
        <span className="button menu__button">25k</span>
      </div>

      <div className="menu__content" key={8}>
        <Image
          src={menu8}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">SOYA COFFE LATTE + VANILLA ICE CREAM</h3>
        <span className="menu__detail">
          Soya milk, espresso dan vanila ice cream
        </span>
        <span className="button menu__button">30k</span>
      </div>

      <div className="menu__content" key={9}>
        <Image
          src={menu9}
          alt=""
          className="menu__img"
          width={130}
          height={130}
        />
        <h3 className="menu__name">ICE LATTE</h3>
        <span className="menu__detail">Espresso dan susu segar tanpa gula</span>
        <span className="button menu__button">18k</span>
      </div>
    </div>
  );
}
