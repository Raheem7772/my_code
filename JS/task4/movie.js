// Store the reviews in an array
let movieReviews = [];

// Function to add a new review
function reviewBtn() {
    let movieTitle = document.getElementById('titleInput').value;
    let reviewText = document.getElementById('reviewTextArea').value;

    if (!movieTitle || !reviewText) {
        alert('Please enter both movie title and review text.');
        return;
    }

    const review = {
        movieTitle: movieTitle,
        reviewText: reviewText
    };

    movieReviews.push(review);

    // Clear the input fields after add
    document.getElementById('titleInput').value = '';
    document.getElementById('reviewTextArea').value = '';

    displayReviews();
}

// Function to display all reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '';

    movieReviews.forEach((review) => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';

        const movieTitleElement = document.createElement('h3');
        movieTitleElement.textContent = review.movieTitle;

        const reviewTextElement = document.createElement('p');
        reviewTextElement.textContent = review.reviewText;

        reviewElement.appendChild(movieTitleElement);
        reviewElement.appendChild(reviewTextElement);

        reviewsContainer.appendChild(reviewElement);
    });
}
