import { Router } from "express";
import CartController from './Controllers/CartController';

const routes = new Router();

routes.get("/carts", CartController.index);
routes.post("/carts", CartController.create);
routes.put("/carts/:id", CartController.update);
routes.delete("/carts/:id", CartController.destroy);

export default routes;