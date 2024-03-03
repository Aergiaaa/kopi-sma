// components/MyScroll.js
import { useEffect } from "react";

export default function ScrollHighlight() {
  useEffect(() => {
    // Your existing code here
    // This is a simplified version of your code for demonstration purposes
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.pageYOffset || window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(`.nav__menu a[href*="${sectionId}"]`)
            .classList.add("active-link");
        } else {
          document
            .querySelector(`.nav__menu a[href*="${sectionId}"]`)
            .classList.remove("active-link");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  // Since we don't want to render anything, we return null
  return null;
}
