
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
            // const targetId = element.querySelector('.text').textContent === "Artworks" ? "artworks" : "coding";
            const targetId = element.getAttribute('data-page');
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

    //for the back to top button
    let backToTopButton = document.getElementById('back-to-top-btn');

    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    backToTopButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

});