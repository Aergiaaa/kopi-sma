import Menu from "./UI/Menu/Menu";
import Tentang from "./UI/Tentang";
import Tujuan from "./UI/Tujuan";
import HomeDetail from "./UI/HomeDetail";

export default function Detail() {
  return (
    <main>
      <HomeDetail />
      <Tentang />
      <Menu />
      <Tujuan />
    </main>
  );
}
