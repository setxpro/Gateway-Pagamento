import { Router } from "express";
import CartController from './Controllers/CartController';

const routes = new Router();

routes.get("/carts", CartController.index);

export default routes;