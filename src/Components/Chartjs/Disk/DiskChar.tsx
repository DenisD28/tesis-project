import { Pie } from "react-chartjs-2"
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
)

interface DiskCharProps {
    disk: {
        unit: string;
        totalSpace: number;
        freeSpace: number;
        usedSpace: number;
    };
}

export default function DiskChar({ disk }: DiskCharProps) {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }        
    const midata = {
        labels: [
            'Espacio libre',
            'Espacio usado'
        ],
        datasets: [{
        label: 'Espacio en disco',
        data: [disk.freeSpace, disk.usedSpace],
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
        }]
    }
    return <Pie data={midata} options={options} />
}
