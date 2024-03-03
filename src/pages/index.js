import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Detail from "@/component/Detail/Detail";
import ShowMenu from "@/lib/showMenu";
import ScrollHighlight from "@/lib/ScrollHighlight";
import ThemeToggle from "@/lib/ThemeToggle";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <ScrollHighlight />
      <ShowMenu />
      <Header />
      <Detail />
      <Footer />
    </div>
  );
}
