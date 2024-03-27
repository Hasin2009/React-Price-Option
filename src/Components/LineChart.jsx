import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectsMarksData = [
        { id: 1, name: "John", physics: 75, chemistry: 80, math: 85 },
        { id: 2, name: "Emily", physics: 70, chemistry: 85, math: 78 },
        { id: 3, name: "Michael", physics: 85, chemistry: 90, math: 92 },
        { id: 4, name: "Sarah", physics: 65, chemistry: 75, math: 65 },
        { id: 5, name: "David", physics: 80, chemistry: 85, math: 88 },
        { id: 6, name: "Emma", physics: 60, chemistry: 65, math: 70 },
        { id: 7, name: "Jacob", physics: 90, chemistry: 95, math: 95 },
        { id: 8, name: "Olivia", physics: 78, chemistry: 80, math: 82 },
        { id: 9, name: "Matthew", physics: 70, chemistry: 72, math: 75 },
        { id: 10, name: "Sophia", physics: 85, chemistry: 88, math: 90 }
      ];
      

    return (
        <div>
            <LChart width={800} height={400} data={subjectsMarksData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
              <Line dataKey={'math'} stroke='red'></Line>
              <Line dataKey={'physics'} stroke='purple'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;