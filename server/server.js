const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);



const publicDir = '/Users/innisha./gdsc/public';
console.log(`Serving static files from: ${publicDir}`);


app.use(express.static(publicDir));


app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'login.html')); 
});


const dataSets = {
    'all': { labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], values: [65, 59, 80, 81, 56, 55, 40] },
    'lastWeek': { labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], values: [12, 19, 3, 5, 2, 3, 7] },
    'lastMonth': { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], values: [45, 35, 60, 75] }
};


io.on('connection', (socket) => {
    console.log('New client connected');
    
    
    socket.emit('chartData', dataSets['all']);
    
    
    socket.on('filterData', (filterValue) => {
        const filteredData = dataSets[filterValue];
        socket.emit('chartData', filteredData);  
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
