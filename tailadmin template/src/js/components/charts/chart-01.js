import ApexCharts from "apexcharts";

// ===== chartOne
const chart01 = () => {
  const chartOneOptions = {
    series: [
      {
        name: "Expected",
        data: [209860, 150000, 175000, 100000],
      },
      {
        name: "Delivered",
        data: [150000, 140000, 160000, 95000],
      },
    ],
    colors: ["#465fff", "#10b981"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 280,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Shift A", "Shift B", "Shift C", "Shift D"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
      markers: {
        radius: 99,
      },
    },
    yaxis: {
      title: false,
      labels: {
        formatter: function (val) {
          return val.toLocaleString();
        },
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        formatter: function (val) {
          return val.toLocaleString() + " units";
        },
      },
    },
  };

  const chartSelector = document.querySelectorAll("#chartOne");

  if (chartSelector.length) {
    const chartInstance = new ApexCharts(
      document.querySelector("#chartOne"),
      chartOneOptions,
    );
    chartInstance.render();

    // Listen for dynamic updates from Alpine.js state controller
    window.addEventListener("update-dashboard-chart", (event) => {
      const data = event.detail;
      if (data && data.expected && data.delivered) {
        chartInstance.updateSeries([
          {
            name: "Expected",
            data: data.expected,
          },
          {
            name: "Delivered",
            data: data.delivered,
          },
        ]);
      }
    });
  }
};

export default chart01;

