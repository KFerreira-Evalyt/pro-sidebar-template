// Function to toggle the logo source
function toggleLogo() {
    const sidebar = document.getElementById('sidebar');
    const logoImage = document.querySelector('.pro-sidebar-logo img');
  
    // Check if the sidebar has a class that indicates it is collapsed
    // You might need to adjust the class name based on your actual implementation
    if (sidebar.classList.contains('collapsed-sidebar-class')) {
      logoImage.src = 'path_to_collapsed_logo.png'; // Set the path to your collapsed logo image
    } else {
      logoImage.src = 'assets/images/Evalyt_DarkMode.png'; // Set the path to your default logo image
    }
  }
  
  // Event listener for the sidebar toggle button
  document.getElementById('btn-toggle').addEventListener('click', function() {
    // This assumes the sidebar toggling class is added/removed on click immediately
    // If there's a delay or transition, you might need to set a timeout
    toggleLogo();
  });
  