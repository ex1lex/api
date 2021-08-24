import express from 'express';
import routes from './routes/index.js';

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Start server on port: ${port}`);
    app.use('/', routes);
});
