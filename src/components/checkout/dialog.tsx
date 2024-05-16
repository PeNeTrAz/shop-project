"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { StepUser } from "./step-user"
import { StepFinish } from "./step-finish"
import { StepId } from "./step-id"

type Steps = "user" | "id" | "finish"

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}



export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
    const [step, setStep] = useState<Steps>('user')

    let progressPct = 0
    switch (step) {
        case 'user':
            progressPct = 30
            break

        case 'id':
            progressPct = 70
            break

        case 'finish':
            progressPct = 100
            break
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'id' && 'ID no Servidor'}
                        {step === 'finish' && 'Envio para o WhatsApp'}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct} />

                <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep} />}
                    {step === 'id' && <StepId setStep={setStep} />}
                    {step === 'finish' && <StepFinish />}
                </div>
            </DialogContent>
        </Dialog>
    )
}