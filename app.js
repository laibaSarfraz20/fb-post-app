document.getElementById('postButton').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value;
    if (postText.trim() !== '') {
        const postsContainer = document.getElementById('postsContainer');
        const newPost = document.createElement('div');
        newPost.classList.add('card', 'post', 'mb-4');
        newPost.innerHTML = `
            <div class="header flex items-center mb-4">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/030/798/365/small/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg" alt="User profile picture placeholder" class="h-10 w-10 rounded-full">
                <div class="ml-2">
                    <h3 class="text-lg font-bold">You</h3>
                    <p class="text-gray-500 text-sm">Just now</p>
                </div>
            </div>
            <p>${postText}</p>
            <div class="actions flex justify-between mt-4">
                <button class="flex items-center text-gray-600">
                    <i class="fas fa-thumbs-up mr-2"></i>
                    <span>Like</span>
                </button>
                <button class="flex items-center text-gray-600">
                    <i class="fas fa-comment mr-2"></i>
                    <span>Comment</span>
                </button>
                <button class="flex items-center text-gray-600">
                    <i class="fas fa-share mr-2"></i>
                    <span>Share</span>
                </button>
            </div>
        `;
        postsContainer.prepend(newPost);
        postInput.value = '';
    }
});

document.getElementById('changeProfileButton').addEventListener('click', function() {
    const newProfilePicture = prompt("Enter the URL of the new profile picture:");
    if (newProfilePicture) {
        document.getElementById('profilePicture').src = newProfilePicture;
    }
});