const express = require('express');
const os = require('os');
const { createClient } = require('redis');
const app = express();

const redisClient = createClient({
    socket: {
        host: 'redis',
        port: 6379
    }
});

redisClient.on('error', (err) => console.error('Redis error:', err));

// Connect before starting server
(async () => {
    await redisClient.connect();

    app.get('/', async (req, res) => {
        try {
            let numVisit = await redisClient.get('numVisit');
            let numVisitToDisplay = parseInt(numVisit);

            if (isNaN(numVisitToDisplay)) {
                numVisitToDisplay = 1;
            } else {
                numVisitToDisplay += 1;
            }

            await redisClient.set('numVisit', numVisitToDisplay);

            res.send(`${os.hostname()}: Number of visits is: ${numVisitToDisplay}`);
        } catch (error) {
            console.error('Unexpected error:', error);
            res.send("INTERNAL SERVER ERROR...");
        }
    });

    app.listen(3000, '0.0.0.0', () => {
        console.log('Server is running on port 3000');
    });
})();