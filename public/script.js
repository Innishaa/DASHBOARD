document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    console.log('Username:', username);
    console.log('Password:', password);

    
    if (username === "admin" && password === "password") {
        window.location.href = 'dashboard.html'; 
    } else {
        alert('Invalid username or password!'); 
    }
});


document.querySelector('.open-sidebar-btn').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    

    sidebar.classList.toggle('collapsed-sidebar');
    mainContent.classList.toggle('collapsed-content');
    mainContent.style.marginLeft = sidebar.classList.contains('collapsed-sidebar') ? '0' : '250px';
});


document.getElementById('openSidebar').onclick = function() {
    const sidebar = document.getElementById('mySidebar');
    sidebar.style.width = '250px'; 
    document.getElementById('mainContent').style.marginLeft = '250px'; 
};

document.getElementById('closeSidebar').onclick = function() {
    const sidebar = document.getElementById('mySidebar');
    sidebar.style.width = '0'; 
    document.getElementById('mainContent').style.marginLeft = '0'; 
};


document.querySelector('.close-btn').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('#main-content');

    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');

    
    if (chartInstance) {
        chartInstance.resize();  
    }
});
