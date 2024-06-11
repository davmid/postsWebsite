document.getElementById('newPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const image = document.getElementById('postImage').files[0];
    addPost(title, content, image);
    document.getElementById('newPostForm').reset();
    document.getElementById('postImage').style.display = 'none';
});

function addPost(title, content, imageFile) {
    const postsContainer = document.getElementById('postsContainer');
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%';
            postDiv.appendChild(img);
        };
        reader.readAsDataURL(imageFile);
    } else {
        console.log("No image provided .");
    }

    postsContainer.appendChild(postDiv);
}


function toggleImageUpload() {
    const imageInput = document.getElementById('postImage');
    imageInput.style.display = imageInput.style.display === 'block' ? 'none' : 'block';
}

