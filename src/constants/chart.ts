export const OPTIONS_CHART = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 50,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
}

export const OPTIONS_EMPTY_DATA_CHART = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 708,
      max: 850,
      ticks: {
        stepSize: 50,
      },
      grid: {
        display: false,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
}
