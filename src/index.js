import express from 'express';
import routes from './routes/index.js';

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Start server: http://localhost:${port}`);
    app.use('/', routes);
});
