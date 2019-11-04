var joinedctx = document.getElementById('joinedchart').getContext('2d');
var joinedchart = new Chart(joinedctx, {
    type: 'line',
    data: {
        labels: ['2006', '2008', '2010', '2012', '2014', '2016', '2018'],
        datasets: [{
            label: "% of users joined in particuar year",
            data: [0.03, 3, 14, 12, 7, 3, 2],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2
        }]
    }
});