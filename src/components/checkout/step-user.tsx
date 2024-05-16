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
    name: z.string().min(2, 'Preencha seu nome'),
    email: z.string().email('E-mail inválido')
})

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export const StepUser = ({ setStep }: Props) => {
    const { name, setName } = useCheckoutStore(state => state)
    const { email, setEmail } = useCheckoutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name, email }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setName(values.name)
        setEmail(values.email)
        setStep('id')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome Completo</FormLabel>
                                <FormControl>
                                    <Input
                                        autoFocus
                                        placeholder="Digite seu nome"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        autoFocus
                                        placeholder="Digite seu email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" variant="outline">Próximo</Button>
            </form>
        </Form>
    )
}