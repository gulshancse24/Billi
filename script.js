function showPage(pageId) {
    // Hide all content sections
    document.querySelectorAll('content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show selected content
    document.getElementById(pageId).style.display = 'block';
}

// Show main content by default when page loads
window.onload = function() {
    showPage('mainContent');
};