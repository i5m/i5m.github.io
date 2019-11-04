var locationctx = document.getElementById('locationchart').getContext('2d');
var locationchart = new Chart(locationctx, {
    type: 'pie',
    data: {
        labels: ['London, UK', 'Los Angeles, US', 'New York, US', 'Paris, FR', 'Washinton DC, US', 'Indonesia'],
        datasets: [{
            label: "% of users joined in particuar year",
            data: [1.85, 1.00, 0.79, 0.56, 0.36, 0.35],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    }
});