document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll("section");
  section.forEach((sec) => {
HEAD
    sec.addEventListener("click", (event) => {
      console.log(event);
    sec.addEventListener("click", (e) => {
      if (e.target.id === "basic-commands") {
        alert("You clicked on Basic Commands section!");
      }
additional-click-action
      sec.classList.toggle("highlight");
    });
  });
});})
