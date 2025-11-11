// Load header and footer components
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
    
    // Set active nav link after header loads
    if (elementId === 'header-container') {
      setActiveNavLink();
    }
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPage = link.getAttribute('data-page');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header-container', '../includes/header.html');
  loadComponent('footer-container', '../includes/footer.html');
});
