// Splash screen handler
document.addEventListener('DOMContentLoaded', () => {
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  const enterBtn = document.getElementById('enter-btn');
  
  // Handle splash screen on home page only
  if (splashScreen && enterBtn) {
    enterBtn.addEventListener('click', () => {
      splashScreen.style.transition = 'opacity 0.5s ease-out';
      splashScreen.style.opacity = '0';
      
      setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.classList.remove('main-content-hidden');
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease-in';
        
        // Scroll to top immediately
        window.scrollTo(0, 0);
        
        setTimeout(() => {
          mainContent.style.opacity = '1';
        }, 50);
      }, 500);
    });
  }
  
  // Add fade-in class to body for other pages
  if (!splashScreen) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }
  
  // Animate navigation cards on home page
  const navCards = document.querySelectorAll('.nav-card');
  if (navCards.length > 0) {
    navCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 200 + (index * 100));
    });
  }
  
  // Animate experience entries
  const experienceEntries = document.querySelectorAll('.experience-entry');
  if (experienceEntries.length > 0) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, observerOptions);
    
    experienceEntries.forEach((entry, index) => {
      entry.style.opacity = '0';
      entry.style.transform = 'translateX(-30px)';
      entry.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(entry);
    });
  }
  
  // Add typing effect to welcome message
  const welcomeMessage = document.querySelector('.welcome-message');
  if (welcomeMessage) {
    const text = welcomeMessage.textContent;
    welcomeMessage.textContent = '';
    welcomeMessage.style.opacity = '1';
    
    let charIndex = 0;
    const typingSpeed = 30;
    
    function typeWriter() {
      if (charIndex < text.length) {
        welcomeMessage.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      }
    }
    
    setTimeout(typeWriter, 500);
  }
  
  // Add scroll progress indicator
  createScrollProgress();
  
  // Add smooth scroll to top button
  createScrollToTop();
  
  // Add interactive skill tags (if on about page)
  addSkillInteractivity();
  
  // Add timeline animation (if on journey page)
  animateTimeline();
});

// Scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, #2563eb, #1e40af);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Scroll to top button
function createScrollToTop() {
  const button = document.createElement('button');
  button.className = 'scroll-to-top';
  button.innerHTML = '↑';
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2563eb;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  `;
  
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
  
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  document.body.appendChild(button);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });
}

// Add interactivity to skill mentions
function addSkillInteractivity() {
  const aboutSection = document.querySelector('#about');
  if (!aboutSection) return;
  
  const skillKeywords = [
    'Python', 'Bash', 'Java', 'Perl', 'JavaScript',
    'AWS', 'Azure', 'CloudWatch', 'Grafana', 'DataDog',
    'WAF', 'IAM', 'SSO', 'SAML', 'OAuth',
    'XSS', 'SQLi', 'WordPress', 'Drupal',
    'PagerDuty', 'Jira', 'GitHub', 'Linear', 'Notion'
  ];
  
  const paragraphs = aboutSection.querySelectorAll('p');
  paragraphs.forEach(p => {
    let html = p.innerHTML;
    skillKeywords.forEach(skill => {
      const regex = new RegExp(`\\b(${skill})\\b`, 'gi');
      html = html.replace(regex, '<span class="skill-tag">$1</span>');
    });
    p.innerHTML = html;
  });
  
  // Add CSS for skill tags
  const style = document.createElement('style');
  style.textContent = `
    .skill-tag {
      background-color: #dbeafe;
      color: #1e40af;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 500;
      transition: background-color 0.2s ease, transform 0.2s ease;
      display: inline-block;
      cursor: default;
    }
    .skill-tag:hover {
      background-color: #2563eb;
      color: white;
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(style);
}

// Animate timeline on journey page
function animateTimeline() {
  const journeySection = document.querySelector('#journey');
  if (!journeySection) return;
  
  const paragraphs = journeySection.querySelectorAll('p');
  if (paragraphs.length === 0) return;
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, observerOptions);
  
  paragraphs.forEach((p, index) => {
    p.style.opacity = '0';
    p.style.transform = 'translateX(-20px)';
    p.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(p);
  });
}

// Add click effect to experience entries
document.addEventListener('click', (e) => {
  const experienceEntry = e.target.closest('.experience-entry');
  if (experienceEntry) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = experienceEntry.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(37, 99, 235, 0.3);
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      animation: ripple-animation 0.6s ease-out;
    `;
    
    // Add ripple animation
    if (!document.querySelector('#ripple-style')) {
      const style = document.createElement('style');
      style.id = 'ripple-style';
      style.textContent = `
        @keyframes ripple-animation {
          from {
            transform: scale(0);
            opacity: 1;
          }
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
        .experience-entry {
          position: relative;
          overflow: hidden;
        }
      `;
      document.head.appendChild(style);
    }
    
    experienceEntry.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header && window.scrollY < 300) {
    const scrolled = window.scrollY;
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
    header.style.opacity = 1 - (scrolled / 300);
  }
});

// Exit splash screen - Only show exit modal when user tries to leave (mouse leaves viewport)
let exitModalShown = false;

document.addEventListener('mouseleave', (e) => {
  // Only trigger if mouse leaves from the top of the page (typical tab close behavior)
  if (e.clientY < 0 && !exitModalShown) {
    showExitModal();
    exitModalShown = true;
  }
});

function showExitModal() {
  const exitModal = document.createElement('div');
  exitModal.className = 'exit-modal';
  exitModal.innerHTML = `
    <div class="exit-modal-content">
      <h2>Leaving so soon? 👋</h2>
      <p>Thanks for taking the time to check out my portfolio! I appreciate you going the extra mile to learn more about me.</p>
      <p>Hope our paths cross again soon. Until then, keep building amazing things! 🚀</p>
      <button class="exit-modal-close">Close</button>
    </div>
  `;
  
  // Add styles for exit modal
  const style = document.createElement('style');
  style.textContent = `
    .exit-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease;
    }
    .exit-modal-content {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 3rem;
      border-radius: 20px;
      max-width: 600px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      animation: slideUp 0.5s ease-out;
    }
    .exit-modal-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: white;
    }
    .exit-modal-content p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.95);
    }
    .exit-modal-close {
      margin-top: 2rem;
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      color: #667eea;
      background-color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    .exit-modal-close:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(exitModal);
  
  // Close modal on button click
  exitModal.querySelector('.exit-modal-close').addEventListener('click', () => {
    exitModal.style.transition = 'opacity 0.3s ease';
    exitModal.style.opacity = '0';
    setTimeout(() => exitModal.remove(), 300);
  });
  
  // Close modal on background click
  exitModal.addEventListener('click', (e) => {
    if (e.target === exitModal) {
      exitModal.style.transition = 'opacity 0.3s ease';
      exitModal.style.opacity = '0';
      setTimeout(() => exitModal.remove(), 300);
    }
  });
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  const message = document.createElement('div');
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px 50px;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: bounce 0.5s ease;
  `;
  message.textContent = '🎉 You found the secret! 🎉';
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0%, 100% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.1); }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.style.transition = 'opacity 0.5s ease';
    message.style.opacity = '0';
    setTimeout(() => message.remove(), 500);
  }, 3000);
}
