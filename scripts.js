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
  
    document.getElementById("artworksCategory").addEventListener("click", function () {
        window.location.hash = "artworks";
    });
  
    document.getElementById("codingCategory").addEventListener("click", function () {
        window.location.hash = "coding";
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
    
    // This is the correct location for the initial call to handleHashChange.
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

}); 