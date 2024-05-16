import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"
// import { generateMessage } from "@/lib/generate-message"

export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state)
    
    // const message = generateMessage()
    const linkDc = `https://discord.gg/razecup`  /* ?text=${encodeURI(message)} */

    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong></p>
            <p>Agora envie seu pedido ao nosso Discord para concluir. Nosso atendente irá te guiar sobre o andamento do pedido.</p>
            <Button>
                <Link target="blank" href={linkDc}>Enviar para o Discord</Link>
            </Button>
        </div>
    )
}