var mostlabel = ['and', 'of', 'the', 'to', 'in', 'for', 'is'];
var mostval = [51525, 41196, 39023, 25635, 24765, 21029, 14162];
var meanlabel = ['about', 'love', 'twitter', 'account', 'university', 'like', 'life'];
var meanval = [4034, 3150, 2981, 2149, 2129, 2029, 1929];

var bioctx = document.getElementById('biochart').getContext('2d');
var biochart = new Chart(bioctx, {
    type: 'line',
    data: {
        labels: meanlabel,
        datasets: [{
            label: "Popular Words",
            data: meanval,
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            }
        ]
    }
});

var biomeanbtn = document.getElementById("biomeanbtn");
var biooverbtn = document.getElementById("biooverbtn");

function biomean(){
    biomeanbtn.classList.add("btn_main");
    biomeanbtn.classList.remove("btn_sec");
    biooverbtn.classList.remove("btn_main");
    biooverbtn.classList.add("btn_sec");
    biochart.data.labels = meanlabel;
    biochart.data.datasets[0].data = meanval;
    window.biochart.update();
}
function bioover(){
    biooverbtn.classList.add("btn_main");
    biooverbtn.classList.remove("btn_sec");
    biomeanbtn.classList.remove("btn_main");
    biomeanbtn.classList.add("btn_sec");
    biochart.data.labels = mostlabel;
    biochart.data.datasets[0].data = mostval;
    window.biochart.update();
}