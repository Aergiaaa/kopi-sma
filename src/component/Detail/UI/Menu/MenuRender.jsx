import Image from "next/image";
import menu1 from "../../../../../public/img/menu/menu1.png";
import menu2 from "../../../../../public/img/menu/menu2.png";
import menu3 from "../../../../../public/img/menu/menu3.png";

export default function MenuRender() {
  return (
    <div class="menu__container bd-grid">
      <div class="menu__content" key={1}>
        <Image src={menu1} alt="" class="menu__img" width={130} height={130} />
        <h3 class="menu__name">ES KOPI SUSU</h3>
        <span class="menu__detail">Espresso dan susu pakai gula aren</span>
        <span class="button menu__button">18k</span>
      </div>
      <div class="menu__content" key={2}>
        <Image src={menu2} alt="" class="menu__img" width={130} height={130} />
        <h3 class="menu__name">ES KOPI POKAT</h3>
        <span class="menu__detail">
          Espresso, alpukat ditambah es krim cokelat
        </span>
        <span class="button menu__button">28k</span>
      </div>

      <div class="menu__content" key={3}>
        <Image src={menu3} alt="" class="menu__img" width={130} height={130} />
        <h3 class="menu__name">ES PALARESSO</h3>
        <span class="menu__detail">Espresso dan air kelapa</span>
        <span class="button menu__button">18k</span>
      </div>
    </div>
  );
}
