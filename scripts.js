
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("darkModeToggle").addEventListener("click", function () {
        const body = document.body;
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            this.innerText = "Light Mode";
        } else {
            this.innerText = "Dark Mode";
        }
    });

    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            window.location.hash = `#${targetId}`;
        });
    });

    document.querySelectorAll('.homepage-image-container').forEach(element => {
        element.addEventListener('click', () => {
            const targetId = element.querySelector('.text').textContent === "Artworks" ? "artworks" : "coding";
            window.location.hash = `#${targetId}`;
        });
    });

    function showPage(id) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if (page.id === id) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    }

    function handleHashChange() {
        const hash = window.location.hash.substr(1);
        if (hash) {
            showPage(hash);
        } else {
            showPage('home');
        }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    // Add event listeners for projectNewPage elements
    document.querySelectorAll('.projectNewPage').forEach(element => {
        element.addEventListener('click', () => {
            const pageId = element.dataset.page;
            if (pageId) {
                window.location.hash = `#${pageId}`;
            }
        });
    });

    // Add event listeners for class elements
    document.querySelectorAll('.class').forEach(element => {
        element.addEventListener('click', () => {
            const pageId = element.dataset.page;
            if (pageId) {
                window.location.hash = `#${pageId}`;
            }
        });
    });

    //back button function
    var backButtons=document.getElementsByClassName("back-button");
    for(var i=0;i<backButtons.length;i++){
        backButtons[i].onclick=function(){
            window.history.back();
        }
    }

    //for coding page
    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', function() {
            toggleDetails(this);
        });
    });

    function toggleDetails(button) {
        var hiddenDetails = button.nextElementSibling;
        if (hiddenDetails.classList.contains('hidden')) {
            hiddenDetails.classList.remove('hidden');
            button.innerHTML = "Hide Details";
        } else {
            hiddenDetails.classList.add('hidden');
            button.innerHTML = "More Details";
        }
    }

     

});


// //second draft
// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.getElementById("randomButton");
//     button.addEventListener("click", generateRandomNumber);

//     function generateRandomNumber() {
//         const min = 1;
//         const max = 100;
//         const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//         displayRandomNumber(randomNumber);
//     }

//     function displayRandomNumber(number) {
//         const displayElement = document.getElementById("randomNumberDisplay");
//         displayElement.textContent = number;
//     }

//     document.getElementById("darkModeToggle").addEventListener("click", function () {
//         const body = document.body;
//         body.classList.toggle("dark-mode");

//         if (body.classList.contains("dark-mode")) {
//             this.innerText = "Light Mode";
//         } else {
//             this.innerText = "Dark Mode";
//         }
//     });


//     document.querySelectorAll('#navbar a').forEach(anchor => {
//         anchor.addEventListener('click', function (event) {
//             event.preventDefault();
//             const targetId = this.getAttribute('data-target');
//             window.location.hash = `#${targetId}`;
//         });
//     });
     
//     document.getElementById("artworksCategory").addEventListener("click", function () {
//         window.location.hash = "artworks";
//     });
    
//     document.getElementById("codingCategory").addEventListener("click", function () {
//         window.location.hash = "coding";
//     });    

//     function showPage(id) {
//         const pages = document.querySelectorAll('.page');
//         pages.forEach(page => {
//             if (page.id === id) {
//                 page.style.display = 'block';
//             } else {
//                 page.style.display = 'none';
//             }
//         });
//     }    

//     function handleHashChange() {
//         const hash = window.location.hash.substr(1);
//         if (hash) {
//             showPage(hash);
//         } else {
//             showPage('home');
//         }
//     }    

//     window.addEventListener('hashchange', handleHashChange);

//     // This is the correct location for the initial call to handleHashChange.
//     handleHashChange();

//     // Add event listeners for projectNewPage elements
//     document.querySelectorAll('.projectNewPage').forEach(element => {
//         element.addEventListener('click', () => {
//             const pageId = element.dataset.page;
//             if (pageId) {
//                 window.location.hash = `#${pageId}`;
//             }
//         });
//     });

//     // Add event listeners for class elements
//     document.querySelectorAll('.class').forEach(element => {
//         element.addEventListener('click', () => {
//             const pageId = element.dataset.page;
//             if (pageId) {
//                 window.location.hash = `#${pageId}`;
//             }
//         });
//     });
// });






// //first draft
// document.addEventListener("DOMContentLoaded", function () {
//     document.addEventListener("DOMContentLoaded", function() {
//         const button = document.getElementById("randomButton");
//         button.addEventListener("click", generateRandomNumber);
//     });

//     function generateRandomNumber() {
//         const min = 1;
//         const max = 100;
//         const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//         displayRandomNumber(randomNumber);
//     }

//     function displayRandomNumber(number) {
//         const displayElement = document.getElementById("randomNumberDisplay");
//         displayElement.textContent = number;
//     }

//     document.getElementById("darkModeToggle").addEventListener("click", function () {
//         const body = document.body;
//         body.classList.toggle("dark-mode");
    
//         if (body.classList.contains("dark-mode")) {
//             this.innerText = "Light Mode";
//         } else {
//             this.innerText = "Dark Mode";
//         }
//     });

//     document.querySelectorAll('#navbar a').forEach(anchor => {
//         anchor.addEventListener('click', function (event) {
//             event.preventDefault();
//             window.location.hash = this.getAttribute('data-href');
//         });
//     });  
  
//     document.getElementById("artworksCategory").addEventListener("click", function () {
//         window.location.hash = "artworks";
//     });
  
//     document.getElementById("codingCategory").addEventListener("click", function () {
//         window.location.hash = "coding";
//     });
  
//     function showPage(id) {
//         const pages = document.querySelectorAll('.page');
//         pages.forEach(page => {
//             if (page.id === id) {
//                 page.style.display = 'block';
//             } else {
//                 page.style.display = 'none';
//             }
//         });
//     }

//     function handleHashChange() {
//         const hash = window.location.hash.substr(1);
//         if (hash) {
//             showPage(hash);
//         } else {
//             showPage('home');
//         }
//     }
    
//     window.addEventListener('hashchange', handleHashChange);
    
//     // This is the correct location for the initial call to handleHashChange.
//     handleHashChange();
    
//     // Add event listeners for projectNewPage elements
//     document.querySelectorAll('.projectNewPage').forEach(element => {
//         element.addEventListener('click', () => {
//             const pageId = element.dataset.page;
//             if (pageId) {
//                 window.location.hash = `#${pageId}`;
//             }
//         });
//     });
    
//     // Add event listeners for class elements
//     document.querySelectorAll('.class').forEach(element => {
//         element.addEventListener('click', () => {
//             const pageId = element.dataset.page;
//             if (pageId) {
//                 window.location.hash = `#${pageId}`;
//             }
//         });
//     });
// }); 