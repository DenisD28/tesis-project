import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"
import useEarningsForMonth from "./useEarningsForMonth"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
)

export default function GananciasMensuales() {
    const { EarningsForMonth } = useEarningsForMonth()
    const last30Days = [];
    for(let i = 0; i < 30; i++){
        let date = new Date();
        date.setDate(date.getDate() - i);
        last30Days.push(date.toISOString().split('T')[0]);
    }
    const label = last30Days.reverse();
    const data = [];
    const ganancias = EarningsForMonth!==undefined ? EarningsForMonth : [];
    for(let i = 0; i < 30; i++){
        let total = 0;
        for(let j = 0; j < ganancias.length; j++){
            if(ganancias[j].date == label[i]){
                total = parseFloat(ganancias[j].total.replace(/,/g, ''));
            }
        }
        data.push({
            label: label[i],
            total: total
        });
    }
    const midata = {
        labels: data.map((item) => item.label),
        datasets: [{
            label: 'Ganancias ultimos 30 días',
            data: data.map((item) => item.total),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgb(79, 70, 229)',
            borderWidth: 1,
            fill: true,
            tension: 0.4
        }]
    }
    return <Line data={midata} />
}
