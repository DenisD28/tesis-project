import { useEffect, useState } from 'react'
import { getGanaciasMensuales } from '../../services/Services'
import { gananciasMensuales } from './GananciasType'

export default function useGetEarnings() {
    const [earnings, setEarnings] = useState<gananciasMensuales>()

    useEffect(() => {
        getGanaciasMensual()
    }, [])

    const getGanaciasMensual = async () => {
        try {
            const { last_month, last_week, today } = await getGanaciasMensuales()
            setEarnings({
                last_month,
                last_week,
                today
            })
        } catch (e) {
            console.log(e)
        }
    }
    return {
        earnings,
    }
}
