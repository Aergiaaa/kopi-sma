import Image from "next/image";
import MenuRender from "./MenuRender";

export default function Menu() {
  return (
    <section className="menu section bd-container" id="menu">
      <span className="section-subtitle">Menu</span>
      <h2 className="section-title">Kopi Sore</h2>

        <MenuRender/>
    </section>
  );
}
