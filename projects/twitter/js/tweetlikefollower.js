var avglikes = [2159, 2518, 3727, 5732, 10306];
var avgfollowers = [637, 1251, 2756, 6133, 15257];
var totallikes = [99977771, 59970961, 265533763, 167428527, 635054390];
var totalfollowers = [29524552, 29797190, 196354856, 179138377, 940085180];

var tweetlikefollowerctx = document.getElementById('tweetlikefollowerchart').getContext('2d');
var tweetlikefollowerchart = new Chart(tweetlikefollowerctx, {
    type: 'horizontalBar',
    data: {
        labels: ['< 500', '500 - 1k', '1k - 5k', '5k - 10k', '> 10k'],
        datasets: [
            {
                data: avgfollowers,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                    ],
            },
            {
                data: avglikes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)'
                    ],
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{stacked: true,}],
            yAxes: [{stacked: true}]
        }
    }
});

var avgtlfbtn = document.getElementById("avgtlfbtn");
var totaltlfbtn = document.getElementById("totaltlfbtn");
var tlftable = document.getElementById("tlftable");
function avgtlf(){
    avgtlfbtn.classList.add("btn_main");
    avgtlfbtn.classList.remove("btn_sec");
    totaltlfbtn.classList.remove("btn_main");
    totaltlfbtn.classList.add("btn_sec");
    tweetlikefollowerchart.data.datasets[0].data = avgfollowers;
    tweetlikefollowerchart.data.datasets[1].data = avglikes;
    window.tweetlikefollowerchart.update();
    tlftable.innerHTML = '<tr><th>Tweets</th><th>Followers</th><th>Likes</th></tr><tr><td>< 500</td><td>637</td><td>2159</td></tr><tr><td>500 - 1k</td><td>1251</td><td>2518</td></tr><tr><td>1k - 5k</td><td>2756</td><td>3727</td></tr><tr><td>5k - 10k</td><td>6133</td><td>5732</td></tr><tr><td>> 10k</td><td>15257</td><td>10306</td></tr>';
}

function totaltlf(){
    totaltlfbtn.classList.add("btn_main");
    totaltlfbtn.classList.remove("btn_sec");
    avgtlfbtn.classList.remove("btn_main");
    avgtlfbtn.classList.add("btn_sec");
    tweetlikefollowerchart.data.datasets[0].data = totalfollowers;
    tweetlikefollowerchart.data.datasets[1].data = totallikes;
    window.tweetlikefollowerchart.update();
    tlftable.innerHTML = '<tr><th>Tweets</th><th>Followers</th><th>Likes</th></tr><tr><td>< 500</td><td>29.5 M</td><td>99.9 M</td></tr><tr><td>500 - 1k</td><td>29.7 M</td><td>59.9 M</td></tr><tr><td>1k - 5k</td><td>196.3 M</td><td>265.5 M</td></tr><tr><td>5k - 10k</td><td>179.1 M</td><td>167.4 M</td></tr><tr><td>> 10k</td><td>940 M</td><td>635 M</td></tr>';
}