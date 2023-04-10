export default function () {
  const contentId = document.querySelector("#content");

  const header = document.createElement("header");
  const background = document.createElement("div");
  const content = document.createElement("div");
  const footer = document.createElement("footer");

  header.textContent = "Restaurante do Bobinho";
  content.textContent = "CONTENT CONTENT CONTENT";
  footer.textContent = "vitmonjo - 2023";

  header.classList.add("header");
  background.classList.add("background");
  content.classList.add("content");
  footer.classList.add("footer");

  background.append(content);
  contentId.append(header, background, footer);
}
