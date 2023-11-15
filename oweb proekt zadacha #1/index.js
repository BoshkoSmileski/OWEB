let productLikes = {};

function likeProduct(productName) {
    if (!productLikes[productName]) {
        productLikes[productName] = 0;
    }

    productLikes[productName]++;
    updateLikeCounter(productName);
}

function updateLikeCounter(productName) {
    const likeCounter = document.getElementById(`likeCounter-${productName}`);
    
    if (likeCounter) {
        likeCounter.textContent = `Likes: ${productLikes[productName]}`;
    }
}

function addComment(productName) {
    const commentInput = document.getElementById(`comment-${productName}`);
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const commentsDiv = document.getElementById(`comments-${productName}`);
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);

        commentInput.value = '';
    }
}
