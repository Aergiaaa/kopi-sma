import Navbar from "./UI/Navbar";
import Scrolltop from "./UI/Scrolltop";

export default function Header() {
  return (
    <div>
      <Scrolltop />
      <div className="l-header" id="header">
        <Navbar />
      </div>
    </div>
  );
}
