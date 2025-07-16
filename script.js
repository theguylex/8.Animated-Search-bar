const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");


searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
}