let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItems.classList.remove("active");
};

let cartItems = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItems.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  cartItems.classList.remove("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItems.classList.remove("active");
};

// review section js
const reviews = [
  {
    text: "The best coffee I’ve ever had! The ambiance is cozy, and the staff is so welcoming. Highly recommend the caramel macchiato!",
    user: "./images/review/user1.jpg",
    author: "Anabia Shah",
    stars: 4.5,
  },
  {
    text: "I love the cozy ambiance and the rich flavors of their cappuccino. A must-visit!",
    user: "./images/review/user2.jpg",
    author: "Shahzain Khan",
    stars: 4.5,
  },
  {
    text: "Amazing service and delicious treats. Their caramel macchiato is a game-changer!",
    user: "./images/review/user3.jpg",
    author: "Anaya Ali",
    stars: 4.5,
  },

  {
    text: "The espresso here is incredible—strong, bold, and just what I need to start my day!",
    user: "./images/review/user6.jpg",
    author: "Subhan Zafar",
    stars: 4.5,
  },

  {
    text: "Perfect spot to relax with friends. Great coffee, tasty snacks, and warm vibes. Highly recommend the Latte!",
    user: "./images/review/user4.jpg",
    author: "Fatima Naz",
    stars: 4.5,
  },

  {
    text: "I’m obsessed with their lattes and pastries. Always fresh and absolutely delicious!",
    user: "./images/review/user5.jpg",
    author: "Iman Arooj",
    stars: 4.5,
  },

  // Add more reviews as needed
];

let currentReviewIndex = 0;

function displayReview(index) {
  const review = reviews[index];
  document.getElementById("review-text").innerText = review.text;
  document.getElementById("review-user").src = review.user;
  document.getElementById("review-author").innerText = review.author;

  // Clear previous stars
  const starsContainer = document.getElementById("review-stars");
  starsContainer.innerHTML = "";
  for (let i = 0; i < Math.floor(review.stars); i++) {
    starsContainer.innerHTML += '<i class="fas fa-star"></i>';
  }
  if (review.stars % 1 !== 0) {
    starsContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
  }
}

function showNextReview() {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  displayReview(currentReviewIndex);
}

function showPreviousReview() {
  currentReviewIndex =
    (currentReviewIndex - 1 + reviews.length) % reviews.length;
  displayReview(currentReviewIndex);
}

document.getElementById("nextArrow").addEventListener("click", showNextReview);
document
  .getElementById("prevArrow")
  .addEventListener("click", showPreviousReview);

// Display the first review on page load
displayReview(currentReviewIndex);
