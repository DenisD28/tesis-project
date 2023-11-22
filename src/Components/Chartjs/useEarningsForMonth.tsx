import { useEffect, useState } from "react"
import { getEarningsForDialy } from "../../services/Services"

interface EarningsDialy{
    date: string,
    total: string
}

export default function useEarningsForMonth() {
    const [EarningsForMonth, setEarningsForMonth] = useState<EarningsDialy[]>()

    useEffect(() => {
        getInfo()
    }, [])

    const getInfo = async () => {
        try {
            const { data } = await getEarningsForDialy()
            await setEarningsForMonth(data)
        } catch (e) {
            console.log(e)
        }
    }
    return {
        EarningsForMonth
    }
}
