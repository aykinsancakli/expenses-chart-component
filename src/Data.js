const weeklyData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

// Days array
const days = weeklyData.map((days) => days.day);

// Amounts array
const amounts = weeklyData.map((days) => days.amount);

// Maximum amount
const maxData = Math.max(...amounts);

// Background colors array
const backgroundColors = amounts.map((amount) =>
  amount === maxData ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
);

// Background colors on hover array
const hoverBackgroundColors = amounts.map((amount) =>
  amount === maxData ? "hsl(186, 34%, 75%)" : "hsl(10, 79%, 75%)"
);

const BarChartData = {
  labels: days,
  datasets: [
    {
      label: "",
      data: amounts,
      backgroundColor: backgroundColors,
      hoverBackgroundColor: hoverBackgroundColors,
      borderRadius: 5,
    },
  ],
};

export default BarChartData;
