
var pastilles = document.querySelectorAll('.pastille');
var imageArrays = {
    'pastille1': ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    'pastille2': ['image4.jpg', 'image5.jpg', 'image6.jpg'],
    'pastille3': ['image7.jpg', 'image8.jpg', 'image9.jpg'],
    'pastille4': ['image10.jpg', 'image11.jpg', 'image12.jpg'],
    'pastille5': ['image13.jpg', 'image14.jpg', 'image15.jpg'],
    'pastille6': ['image16.jpg', 'image17.jpg', 'image18.jpg'],
    'pastille7': ['image19.jpg', 'image20.jpg', 'image21.jpg'],
};
for (var i = 0; i < pastilles.length; i++) {
    pastilles[i].addEventListener('mouseover', function() {
        showSlider(this.id);
    });
    pastilles[i].addEventListener('mouseout', function() {
        hideSlider(this.id);
    });
    pastilles[i].addEventListener('touchstart', function() {
        showSlider(this.id);
    });
    pastilles[i].addEventListener('touchend', function() {
        hideSlider(this.id);
    });
}

function showSlider(pastilleId) {
    var slider = document.getElementsByClassName('slider')[0];

    var images = imageArrays[pastilleId];

    slider.innerHTML = '';

    for (var i = 0; i < images.length; i++) {
        var img = document.createElement('img');
        img.src = images[i];
        img.style.display = i === 0 ? 'block' : 'none'; // Affichez la première image et cachez les autres
        slider.appendChild(img);
    }

    slider.style.display = 'block';

    
    var currentIndex = 0;
    setInterval(function() {
        slider.children[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % slider.children.length;
        slider.children[currentIndex].style.display = 'block';
    }, 2000); 
}

function hideSlider() {
    var slider = document.getElementsByClassName('slider')[0];

    slider.style.display = 'none';
    clearInterval(slider.intervalId);
}