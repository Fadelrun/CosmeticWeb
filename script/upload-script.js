const imageInput = document.getElementById('review-image');
imageInput.addEventListener('change', function() {
    const file = this.files[0];
    const fileName = file ? file.name : '';
    const selectedFile = document.getElementById('selected-file');
    selectedFile.textContent = fileName;
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.createElement('img');
            imagePreview.src = e.target.result;
            imagePreview.classList.add('uploaded-image');
            const reviewText = document.getElementById('review-text').value;
            const reviewName = document.getElementById('review-name').value;
            const reviewContainer = document.createElement('div');
            reviewContainer.classList.add('review-item');
            reviewContainer.innerHTML = `
                <p><strong>${reviewName}</strong>: ${reviewText}</p>
            `;
            reviewContainer.appendChild(imagePreview);
            document.getElementById('review-list').appendChild(reviewContainer);
        };
        reader.readAsDataURL(file);
    }
});

document.querySelectorAll('.star').forEach(function(star) {
    star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(function(s) {
            if (s.getAttribute('data-value') <= value) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
    });
});

document.getElementById('submit-review').addEventListener('click', function() {
    const name = document.getElementById('review-name').value;
    const text = document.getElementById('review-text').value;
    const files = document.getElementById('review-image').files;
    const rating = document.querySelectorAll('.star.selected').length;

    if (name && text && rating) {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review-item');
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '&#9733;'; // Звездочка
        }
        reviewContainer.innerHTML = `
            <p><strong>${name}</strong> <span class="review-rating">${stars}</span></p>
            <p>${text}</p>
        `;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imagePreview = document.createElement('img');
                    imagePreview.src = e.target.result;
                    imagePreview.classList.add('review-image');
                    reviewContainer.appendChild(imagePreview);
                    document.getElementById('review-list').appendChild(reviewContainer);
                };
                reader.readAsDataURL(file);
            }
        } else {
            document.getElementById('review-list').appendChild(reviewContainer);
        }

        // Reset form fields
        document.getElementById('review-name').value = '';
        document.getElementById('review-text').value = '';
        document.getElementById('review-image').value = '';
        document.querySelectorAll('.star.selected').forEach(star => star.classList.remove('selected'));
        document.getElementById('selected-files').textContent = '';
    } else {
        alert('Пожалуйста заполните поле');
    }
});

// Display selected file names
document.getElementById('review-image').addEventListener('change', function() {
    const files = document.getElementById('review-image').files;
    const selectedFilesContainer = document.getElementById('selected-files');
    selectedFilesContainer.innerHTML = '';
    for (let i = 0; i < files.length; i++) {
        const fileName = document.createElement('span');
        fileName.textContent = files[i].name;
        selectedFilesContainer.appendChild(fileName);
        selectedFilesContainer.appendChild(document.createElement('br'));
    }
});