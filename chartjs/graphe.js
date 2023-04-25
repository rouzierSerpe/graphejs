const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar', // ou pie, doughnut, line, polarArea, bar, radar
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'white'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 16],
      borderWidth: 1,
      backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'white'],
      borderColor: ['teal'],
      borderWidth: 2,
      // hoverBackgroundColor: ['Pink', 'Teal', 'Yellowgreen', 'Greenyellow', 'rebeccapurple', 'Orangered', 'grey']
      // hoverBorderWidth: 0,
      borderRadius: 10
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      tooltip: {
        backgroundColor: 'teal',
        padding: 20,
        labelTextColor: 'purple'
        // labelFontSize: 70,
        // bodyFontStyle: 'bold italic',
        // bodyFontColor: 'black',
        // bodyAlign: 'center',
      }
    }
    
  }
 
});