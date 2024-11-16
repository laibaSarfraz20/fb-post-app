document.getElementById('postButton').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value;
    if (postText.trim() !== '') {
        const postsContainer = document.getElementById('postsContainer');
        const newPost = document.createElement('div');
        newPost.classList.add('card', 'post');
        newPost.innerHTML = `
            <div class="header">
                <img src="https://storage.googleapis.com/a1aa/image/Gd0kErfowfoXjUTDer82p8ezEZ5DBxQELjoqswtUmMtoI93OB.jpg" alt="User profile picture placeholder" class="h-10 w-10 rounded-full" width="40" height="40">
                <div>
                    <h3>You</h3>
                    <p>Just now</p>
                </div>
            </div>
            <p>${postText}</p>
            <div class="actions">
                <button>
                    <i class="fas fa-thumbs-up"></i>
                    <span>Like</span>
                </button>
                <button>
                    <i class="fas fa-comment"></i>
                    <span>Comment</span>
                </button>
                <button>
                    <i class="fas fa-share"></i>
                    <span>Share</span>
                </button>
            </div>
        `;
        postsContainer.prepend(newPost);
        postInput.value = '';
    }
});