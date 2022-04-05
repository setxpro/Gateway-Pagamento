import { Router } from "express";
import CartController from './Controllers/CartController';
import TransactionsController from './Controllers/TransactionsController';

const routes = new Router();

//carts
routes.get("/carts", CartController.index);
routes.post("/carts", CartController.create);
routes.put("/carts/:id", CartController.update);
routes.delete("/carts/:id", CartController.destroy);

//transactions
routes.post("/transactions", TransactionsController.create);

export default routes;