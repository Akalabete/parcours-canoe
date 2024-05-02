
var pastilles = document.querySelectorAll('.pastille');
var intervalId = null;
var slider = document.getElementsByClassName('slider')[0];
var parcourInfos = document.getElementsByClassName('parcours-infos')[0];
var parcourstitle = document.getElementsByClassName('parcours-title')[0];
var parcoursdescription = document.getElementsByClassName('parcours-description')[0];
var parcourstemp = document.getElementsByClassName('parcours-temps')[0];
var parcoursprix = document.getElementsByClassName('parcours-prix')[0];
slider.style.display = 'none';
parcourInfos.style.display = 'none';
var imageArrays = {
    'pastille1': {
        images: [
            {src: 'image1.jpg', alt: 'Description de l\'image 1'},
            {src: 'image2.jpg', alt: 'Description de l\'image 2'},
            {src: 'image3.jpg', alt: 'Description de l\'image 3'}
        ],
        titre: "titre du parcours 1",
        description: "description du parcours 1",
        tempsDeParcours: "temps de parcours 1",
        prix: "10 €"
    },
    'pastille2': {
        images: [
            {src: 'image1.jpg', alt: 'Description de l\'image 1'},
            {src: 'image2.jpg', alt: 'Description de l\'image 2'},
            {src: 'image3.jpg', alt: 'Description de l\'image 3'}
        ],
        titre: "titre du parcours 2",
        description: "description du parcours 2",
        tempsDeParcours: "temps de parcours 2",
        prix: "10 €"
    },
    'pastille3': {
        images: [
            {src: 'image1.jpg', alt: 'Description de l\'image 1'},
            {src: 'image2.jpg', alt: 'Description de l\'image 2'},
            {src: 'image3.jpg', alt: 'Description de l\'image 3'}
        ],
        titre: "titre du parcours 3",
        description: "description du parcours 3",
        tempsDeParcours: "temps de parcours 3",
        prix: "10 €"
    },
    'pastille4': {
        images: [
            {src: 'image1.jpg', alt: 'Description de l\'image 1'},
            {src: 'image2.jpg', alt: 'Description de l\'image 2'},
            {src: 'image3.jpg', alt: 'Description de l\'image 3'}
        ],
        titre: "titre du parcours 4",
        description: "description du parcours 4",
        tempsDeParcours: "temps de parcours 4",
        prix: "10 €"
    },
    'pastille5': {
        images: [
            {src: 'image1.jpg', alt: 'Description de l\'image 1'},
            {src: 'image2.jpg', alt: 'Description de l\'image 2'},
            {src: 'image3.jpg', alt: 'Description de l\'image 3'}
        ],
        titre: "titre du parcours 5",
        description: "description du parcours 5",
        tempsDeParcours: "temps de parcours 5",
        prix: "10 €"
    },
    'pastille6': {
        images: [
            {src: 'image1.jpg', alt: 'Description de l\'image 1'},
            {src: 'image2.jpg', alt: 'Description de l\'image 2'},
            {src: 'image3.jpg', alt: 'Description de l\'image 3'}
        ],
        titre: "titre du parcours 6",
        description: "description du parcours 6",
        tempsDeParcours: "temps de parcours 6",
        prix: "10 €"
    },
    'pastille7': {
        images: [
            {src: 'image1.jpg', alt: 'Description de l\'image 1'},
            {src: 'image2.jpg', alt: 'Description de l\'image 2'},
            {src: 'image3.jpg', alt: 'Description de l\'image 3'}
        ],
        titre: "titre du parcours 7",
        description: "description du parcours 7",
        tempsDeParcours: "temps de parcours 7",
        prix: "10 €"
    },

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
    

    var pastille = imageArrays[pastilleId];
    var images = pastille.images;

    slider.innerHTML = '';

    for (var i = 0; i < images.length; i++) {
        var img = document.createElement('img');
        img.src = images[i].src;
        img.alt = images[i].alt;
        img.style.display = i === 0 ? 'block' : 'none'; 
        slider.appendChild(img);
    }
    slider.style.display = 'block';
    
    parcourInfos.style.display = 'block';
    parcourstitle.innerHTML = pastille.titre;
    parcoursdescription.innerHTML = pastille.description;
    parcourstemp.innerHTML = pastille.tempsDeParcours;
    parcoursprix.innerHTML = pastille.prix;
    
    var currentIndex = 0;
    
    clearInterval(intervalId);
    intervalId = setInterval(function() { 
        slider.children[currentIndex].style.display = 'none';
        console.log("new index")
        currentIndex = (currentIndex + 1) % slider.children.length;
        slider.children[currentIndex].style.display = 'block';
    }, 2000); 
}

function hideSlider() {
    parcourstitle.innerHTML = '';
    parcoursdescription.innerHTML = '';
    parcourstemp.innerHTML = '';
    parcoursprix.innerHTML = '';


    slider.style.display = 'none';
    parcourInfos.style.display = 'none';
    clearInterval(slider.intervalId);
}