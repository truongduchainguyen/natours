const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('unhandledRejection', (err) => {
    console.log('Unhandled rejection. Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    console.log('Unhandled exception. Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful'));
// .catch((err) => console.log('Error'));

const port = process.env.PORT || 3000;
server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

