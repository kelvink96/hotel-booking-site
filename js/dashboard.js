const chartInit = () => {
  var newBookingsChartCtx = document.getElementById('new-bookings-chart').getContext('2d');
  var myChart = new Chart(newBookingsChartCtx, {
    type: 'doughnut',
    data: {
      labels: ['', '',],
      datasets: [{
        label: 'haha',
        data: [300, 50],
        backgroundColor: [
          '#6f42c1',
          '#f8f9fa',
        ],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        }
      },
    },
  });

  var scheduledRoomChartCtx = document.getElementById('scheduled-rooms-chart').getContext('2d');
  var myChart = new Chart(scheduledRoomChartCtx, {
    type: 'doughnut',
    data: {
      labels: ['', '',],
      datasets: [{
        label: 'haha',
        data: [40, 50],
        backgroundColor: [
          '#d63384',
          '#f8f9fa',
        ],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        }
      },
    },
  });

  var reservationsChartCtx = document.getElementById('reservations-stats-chart').getContext('2d');
  var myChart = new Chart(reservationsChartCtx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
      datasets: [
        {
          label: 'check ins',
          data: [512, 1512, 1992, 1029, 1718, 1810, 2139, 1881, 1217],
          backgroundColor: [
            '#fd7e14',
          ],
        },
        {
          label: 'check outs',
          data: [1452, 512, 692, 529, 718, 810, 139, 881, 641],
          backgroundColor: [
            '#20c997',
          ],
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: true
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
};

setTimeout(() => {
  chartInit();
}, 50)
