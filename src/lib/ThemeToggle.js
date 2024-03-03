import React, { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    const themeButton = document.getElementById("theme-button");

    // !Dibawah ini comment sakral!! kalau dihapus bakalan gk jalan logicnya idk why
    // if (!themeButton) return;

    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
      );
    }

    themeButton.addEventListener("click", () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    });

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      themeButton.removeEventListener("click", themeButton.onclick);
    };
  }, []);

  // Since we don't want to render anything, we return null
  return null;
}
