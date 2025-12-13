function applyFilters() {
  const active = [...document.querySelectorAll(".filter-chip.active")]
    .map(chip => chip.dataset.filter);

  document.querySelectorAll(".project-text, .thumbnail-tile, .tile-link").forEach(project => {
    const tags = project.dataset.tags.split(",");

    project.style.display = active.some(tag => tags.includes(tag))
      ? "flex"
      : "none";
  });
}

document.querySelectorAll(".filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");
    applyFilters();
  });
});