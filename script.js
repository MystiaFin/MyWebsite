function toggleSidebar() {
    const sideNav = document.querySelector('.side-nav-links');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    
    sideNav.classList.toggle('open');
    body.classList.toggle('sidebar-open');
    
    if (sideNav.classList.contains('open')) {
        overlay.style.display = 'block';
        overlay.offsetHeight;
        overlay.classList.add('open');
    } else {
        overlay.classList.remove('open');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300); 
    }
}

function hideSidebar() {
    const sideNav = document.querySelector('.side-nav-links');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    
    sideNav.classList.remove('open');
    body.classList.remove('sidebar-open');
    overlay.classList.remove('open');
    
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    hideSidebar(event);
}

function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
    hideSidebar(event);
}