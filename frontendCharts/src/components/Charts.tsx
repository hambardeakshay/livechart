import LineChart from "./LineChart";

function Charts() {
  const data = [
    { x: 0, y: 5 },
    { x: 1, y: 9 },
    { x: 2, y: 7 },
    { x: 3, y: 13 },
    { x: 4, y: 11 },
  ];
  return (
    <div>
      <LineChart data={data} width={500} height={500}></LineChart>
    </div>
  );
}

export default Charts;
