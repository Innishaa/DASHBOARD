// Login Form Submission Handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Log for debugging
    console.log('Username:', username);
    console.log('Password:', password);

    // Example login validation (replace with real authentication)
    if (username === "admin" && password === "password") {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid username or password!'); // Alert for incorrect credentials
    }
});

// Sidebar Toggle Logic
document.querySelector('.open-sidebar-btn').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Toggle sidebar class and adjust margin
    sidebar.classList.toggle('collapsed-sidebar');
    mainContent.classList.toggle('collapsed-content');
    mainContent.style.marginLeft = sidebar.classList.contains('collapsed-sidebar') ? '0' : '250px';
});

// Sidebar Open and Close Logic
document.getElementById('openSidebar').onclick = function() {
    const sidebar = document.getElementById('mySidebar');
    sidebar.style.width = '250px'; // Open sidebar
    document.getElementById('mainContent').style.marginLeft = '250px'; // Shift content
};

document.getElementById('closeSidebar').onclick = function() {
    const sidebar = document.getElementById('mySidebar');
    sidebar.style.width = '0'; // Close sidebar
    document.getElementById('mainContent').style.marginLeft = '0'; // Reset content margin
};

// Close Button Logic
document.querySelector('.close-btn').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('#main-content');

    // Toggle sidebar collapse
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');

    // Recalculate and resize chart if necessary
    if (chartInstance) {
        chartInstance.resize();  // Assuming chartInstance is your Chart.js instance
    }
});
