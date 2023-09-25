export default interface AddFormType {
    handleSubmition: (e: React.FormEvent<HTMLFormElement>, infoNumberBill: string, infoProvider: string) => void
}