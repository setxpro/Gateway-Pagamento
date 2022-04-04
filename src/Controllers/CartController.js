import Cart from "../Models/Cart";
class CartController {
    async index(req, res) {

        try {
            const carts = await Cart.find();
            return res.status(200).json(carts);
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error"});
        }
    }

    async create(req, res) {
        try {
            const { code, price } = req.body;

            const cart = await Cart.create({ code, price });

            return res.status(201).json(cart);

        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error"});
        }
    }
}

export default new CartController();