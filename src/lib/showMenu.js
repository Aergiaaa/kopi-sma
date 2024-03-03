// components/ShowMenu.js
import { useEffect } from "react";

export default function ShowMenu() {
  useEffect(() => {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
      });
    }

    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show-menu");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      if (toggle && nav) {
        toggle.removeEventListener("click", linkAction);
      }
      navLink.forEach((n) => n.removeEventListener("click", linkAction));
    };
  }, []);

  // Return null or omit the return statement
  return null;
}
