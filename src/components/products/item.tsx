"use client"

import { Product } from "@/types/product"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useCartStore } from "@/stores/cart-store"

type Props = {
    item: Product
}

export const ProductItem = ({ item }: Props) => {
    const { toast } = useToast()
    const { upsertCartItem } = useCartStore(state => state)

    const handleAddButton = () => {
        upsertCartItem(item, 1)
        toast({
            title: 'Adicionado ao carrinho!',
            description: item.name,
            action: <ToastAction altText="fechar">Fechar</ToastAction>
        })
    }

    return (
        <div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-2xl font-bold text-center mb-2">{item.name}</p>
                <div className="rounded-md overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-60 object-cover"
                    />
                </div>
                <p className="text-2xl font-bold mt-3">R$ {item.price.toFixed(2)}</p>
                <Button 
                    className="mb-5"
                    onClick={handleAddButton}>Adicionar</Button>
            </div>
        </div>
    )
}