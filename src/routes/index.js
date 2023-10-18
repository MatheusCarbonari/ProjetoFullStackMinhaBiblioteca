import express from 'express';
import routesLivros from './livrosRoutes.js';

const routes = (app) => {
    app.use(
        express.json(),
        routesLivros
    )
}

export default routes;