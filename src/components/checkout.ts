import { loadStripe, RedirectToCheckoutClientOptions, Stripe } from "@stripe/stripe-js";

interface ICheckout {
    lineItems: Array<{
        /**
         * The ID of the price that the customer would like to purchase. SKU or plan IDs may also be used.
         */
        price?: string;
    
        /**
         * The quantity of units for the item.
         */
        quantity?: number;
      }>
}
async function checkout({ lineItems }: ICheckout) {
    let stripePromise: Promise<Stripe | null> | null = null;
    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY || "");
        }
        return stripePromise;
    }
    const stripe = await getStripe()
    if (stripe) {
        await stripe.redirectToCheckout({
            mode: "payment",
            lineItems,
            successUrl: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: window.location.origin,
        })
    }
}

export default checkout;