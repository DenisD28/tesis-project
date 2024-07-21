class GetDateHelper{
    private monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    public getDayMonthYear(date: string): string{
        date = date.split("T")[0];
        const dateFormat = new Date(date);
        return `${dateFormat.getDate()} ${this.monthNames[dateFormat.getMonth()]} ${dateFormat.getFullYear()}`;
    }
}

export default new GetDateHelper();