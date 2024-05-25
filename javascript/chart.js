const dataBase = {
    Animais: [120, 115, 132, 140],
    Caprinos: [60, 57, 64, 75],
    Ovinos: [60, 58, 68, 65],
  };
  
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('myChart').getContext('2d');
  

  const labels = Object.keys(dataBase);
  const datasets = Object.values(dataBase).map((values) => ({
    label: values[0], 
    data: values,
  }));
  
  const chartConfig = {
    type: 'bar',
    data: {
      labels,
      datasets,
      backgroundColor: [
        'red',
        'blue',
        'green'
      ],
    },
    options: {
      responsive: true, 
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true, 
          },
        }],
      },
      title: {
        display: true,
        text: 'Quantitativo Animal',
      },
    },
  }
  new Chart(ctx, chartConfig);
});

  /*
  document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        width: 100,
        height: 60,
        type: 'bar',
        data: {
            labels: ['Animais', 'Ovinos', 'Caprinos'],
            datasets: [{
                label: 'Quantitativo animal',
                data: [120, 57, 63],
                backgroundColor: [
                    'red',
                    'blue',
                    'green'
                ],
                borderColor: [
            
                ],
                borderWidth: 0.5
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}); */
