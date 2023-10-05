export interface InfoPurchaseProps {
    statusInfo: boolean
    provider: string
    numberBill: string
    total: number
    handleSubmit: (e: FormEvent<HTMLFormElement>, infoNumberBill: string, infoProvider: string) => void
}