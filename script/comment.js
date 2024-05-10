document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById('review-name').value;
    var text = document.getElementById('review-text').value;
    
    var reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    
    var authorElement = document.createElement('p');
    authorElement.classList.add('review-author');
    authorElement.textContent = name;
    
    var textElement = document.createElement('p');
    textElement.classList.add('review-text');
    textElement.textContent = text;
    
    reviewElement.appendChild(authorElement);
    reviewElement.appendChild(textElement);

    var reviewList = document.getElementById('review-list');
    reviewList.appendChild(reviewElement);
    
    document.getElementById('review-name').value = '';
    document.getElementById('review-text').value = '';
});