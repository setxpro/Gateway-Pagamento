import Cart from '../Models/Cart';
import Transaction from '../Models/Transaction';

class TransactionService {
    async process({
        cartCode,
        paymentType,
        installments,
        customer,
        billing,
        creditCard
    }) {

        const cart = Cart.findOne({ code: cartCode });

        if (!cart) {
            throw `Cart ${cartCode} was not found.`
        }

        const transaction = await Transaction.create({
            cartCode: cart.code,
            code: "q1w2e3r4",
            total: cart.price,
            paymentType,
            installments,
            status: "started",
            customerName: customer.name,
            customerEmail: customer.email,
            customerMobile: customer.mobile,
            customerDocument: customer.document,

            billingAddress: billing.addres,
            billingNumber: billing.number,
            billingNeighborhood: billing.neighborhood,
            billingCity: billing.city,
            billingState: billing.state,
            billingZipCode: billing.zipcode,

        });

        return transaction;
    }
}

export default TransactionService;