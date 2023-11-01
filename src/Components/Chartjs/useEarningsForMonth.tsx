import { useEffect, useState } from "react"
import { getEarningsForDialy } from "../../services/Services"

interface EarningsForMonth{
    data: EarningsDialy[],
}

interface EarningsDialy{
    date: string,
    total: string
}

export default function useEarningsForMonth() {
    const [EarningsForMonth, setEarningsForMonth] = useState<EarningsForMonth>()

    useEffect(() => {
        getInfo()
    }, [])

    const getInfo = async () => {
        try {
            const { data } = await getEarningsForDialy()
            setEarningsForMonth(data)
        } catch (e) {
            console.log(e)
        }
    }
    return {
        EarningsForMonth
    }
}
