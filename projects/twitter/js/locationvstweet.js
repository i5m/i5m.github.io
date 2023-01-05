var locationvstweetctx = document.getElementById('locationvstweetchart').getContext('2d');
var locationvstweetchart = new Chart(locationvstweetctx, {
    type: 'pie',
    data: {
        labels: ['Brazil', 'UK', 'Venezuela', 'Indonesia', 'France', 'India'],
        datasets: [{
            label: "Country with lots of Tweets!",
            data: [3.27, 2.15, 1.23, 1.67, 0.97, 1.57],
            backgroundColor: [
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(54, 162, 235, 0.7)'
                ],
                borderWidth: 0
        }]
    }
});