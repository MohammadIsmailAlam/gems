import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {

  const data = {
    labels: [
      'পুরুষ',
      'কর্মরত কর্মচারী',
      'মহিলা',
      'পেনশন',
      'মন্ত্রণালয় ও বিভাগ',
      'অধিদপ্তর ও দপ্তর',
      'স্বায়ত্তশাসিত প্রতিষ্ঠান',
      'কর্মচারী ও কল্যাণ',
      'গ্রেডভিত্তিক পদসংখ্যা',
      'মঞ্জুরিকৃত পদ',
    ],
    datasets: [
      {
        data: [9, 8, 8, 7, 7, 9, 9, 8, 9, 11],
        backgroundColor: [
          '#0d6e0d',
          '#681f1b',
          '#000045',
          '#6d851c',
          '#782e70',
          '#0d738e',
          '#0d457f',
          '#512a6d',
          '#af2616',
          '#7185ce',
        ],
        datalabels: {
          color: 'white',
          font: {
            weight: 'bold',
            size: 10,
          },
          anchor: 'center',
          align: 'center',
          formatter: (value, context) => {
            const label = context.chart.data.labels[context.dataIndex];
            // Split the label into two lines
            const lines = label.split(' ');
            return lines.join('\n');
          },
        },
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        display: true,
      },
      legend: {
        display: false, // This will hide the legend
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart;
