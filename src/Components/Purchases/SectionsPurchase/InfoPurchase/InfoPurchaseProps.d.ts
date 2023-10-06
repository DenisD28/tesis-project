export interface InfoPurchaseProps {
    statusInfo: boolean
    provider: string
    numberBill: string
    handleSubmit: (e: FormEvent<HTMLFormElement>, infoNumberBill: string, infoProvider: string) => void
}