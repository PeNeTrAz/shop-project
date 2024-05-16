/* 

import { useCartStore } from "@/stores/cart-store"
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = () => {
    const { name, email, id } = useCheckoutStore(state => state)
    const { cart } = useCartStore(state => state)

    let orderProducts = []
    for(let item of cart) {
        orderProducts.push(`${item.quantity}x ${item.product.name}`)
    }

    return `**Dados do cliente:**
    Nome: ${name}
    Email: ${email}
    ID: ${id}
    -------
    **Pedido:**
    ${orderProducts.join("\n")}
    `
} 

*/