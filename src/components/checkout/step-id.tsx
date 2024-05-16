import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from "@/stores/checkout-store"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    id: z.string().min(1, 'Preencha seu id')
})

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export const StepId = ({ setStep }: Props) => {
    const { id, setId } = useCheckoutStore(state => state)
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { id }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setId(values.id)
        setStep('finish')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField 
                    control={form.control}
                    name="id"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    autoFocus
                                    placeholder="Digite seu ID"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-between mt-4">
                    <Button onClick={() => setStep('user')} variant="link">Voltar</Button>
                    <Button type="submit" variant="outline">Concluir</Button>
                </div>
            </form>
        </Form>
    )
}