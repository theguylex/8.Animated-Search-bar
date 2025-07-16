const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");


searchBtn.onclick = () => {
    searchBox.classList.toggle("active");
    searchInput.classList.add("active");
}