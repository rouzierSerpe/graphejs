const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      borderColor: ['teal'],
      borderWidth: 2,
      // hoverBackgroundColor: ['Pink', 'Teal', 'Yellowgreen', 'Greenyellow', 'rebeccapurple', 'Orangered']
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