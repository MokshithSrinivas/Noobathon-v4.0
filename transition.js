function smoothPageTransition(url) {
    document.body.style.opacity = '0'; // Fade out the page
    setTimeout(() => {
        window.location.href = url; // Navigate to the new page after the fade out effect
    }, 350); // Wait for 500ms (equal to the transition duration) before navigating
}
