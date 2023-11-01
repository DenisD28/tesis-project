export interface gananciasMensuales {
    today: detailsGanancias
    last_week: detailsGanancias
    last_month: detailsGanancias
}
export interface detailsGanancias {
    range: dates
    earnings_total: number
    sales_total: number
}

export interface dates{
    start: string
    end: string
}