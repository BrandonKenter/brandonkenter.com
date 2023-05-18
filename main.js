window.onload = () => {
  const tab_switchers = document.querySelectorAll("[data-switcher]");

  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;

    tab_switcher.addEventListener("click", () => {
      document
        .querySelector(".tabs .tab.is-active")
        .classList.remove("is-active", "bg-blue-300", "bg-opacity-10");
      tab_switcher.parentNode.classList.add(
        "is-active",
        "bg-blue-300",
        "bg-opacity-10"
      );

      switchPage(page_id);
    });
  }
};

function switchPage(page_id) {
  const current_page = document.querySelector(".pages .page.is-active");
  const next_page = document.querySelector(
    `.pages .page[data-page="${page_id}"]`
  );

  current_page.classList.add("animate-slide-up");
  document.querySelector(".about-me").classList.remove("about-me-fade-in");

  setTimeout(() => {
    current_page.classList.remove("is-active", "animate-slide-up");
    current_page.classList.add("hidden");
    next_page.classList.remove("hidden");
    next_page.classList.add("is-active");
  }, 1);
}
