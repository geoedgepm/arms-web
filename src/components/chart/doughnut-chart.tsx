import { Doughnut } from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const DoughnutChart = () => {

    const data = {
        labels: ['Mitigate/Reduce', 'Avoid', 'Transfer'],
        datasets: [
            {
                label: 'Treatment Category', 
                data: [30,50,50],
                backgroundColor: ['#FACC15', '#54E69D', '#85B4F2'],
                borderColor: ['#FACC15', '#54E69D', '#85B4F2'],
                cutout: '78%',
            }
        ]
    }

    const dougnutLabel = {
        id: 'dougnutLabel', 
        afterDatasetsDraw(chart: any, args: any, plugins: any) {
            const {ctx, data} = chart;

            const centerX = chart.getDatasetMeta(0).data[0].x;
            const centerY = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.font = 'bold 14px sans-serif';
            ctx.fillStyle = '#8a92a6';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`Total Value: ${data.datasets[0].data[0]}`, centerX, centerY);
        }
    }

    const options = {
        aspectRatio: 1.8,
        plugins: {
            legend: {
              position: 'top',
            },
        },
    }
    return (
        // <Doughnut 
        //     data={data} 
        //     options={options}
        //     plugins={[dougnutLabel]}
        // />
        <div />
    )
}

export default DoughnutChart;