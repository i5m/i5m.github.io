var labelmonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var labelyear = ['2007', '2009', '2011', '2013', '2015', '2017'];
var thelabel = ['Avg. Yearly Followers', 'Avg. Yearly Followings', 'Avg. Monthly Followers', 'Avg. Monthly Followings'];
var fgmonthvar = [984, 968, 938, 939, 951, 969, 942, 927, 1035, 946, 1023, 944];
var fgyearvar = [994, 986, 945, 1017, 906, 785];
var fsmonthvar = [4685, 4485, 5485, 5272, 5593, 5520, 5018, 5413, 5975, 5185, 5286, 5466];
var fsyearvar = [5982, 7235, 4885, 4170, 4221, 3388];

var joinedfollowingfollowerctx = document.getElementById('joinedfollowingfollowerchart').getContext('2d');
var joinedfollowingfollowerchart = new Chart(joinedfollowingfollowerctx, {
    type: 'bar',
    data: {
        labels: labelyear,
        datasets: [
            {
                label: thelabel[0],
                data: fsyearvar,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                    ]
                }
        ]
    },
    options: {
        labels: false,
        scales: {
            xAxes: [{stacked: true,}],
            yAxes: [{stacked: true}]
        }
    }
});

var fsyearbtn = document.getElementById("fsyearbtn");
var fgyearbtn = document.getElementById("fgyearbtn");
var fsmonthbtn = document.getElementById("fsmonthbtn");
var fgmonthbtn = document.getElementById("fgmonthbtn");
var jff = document.getElementsByClassName("jff");
var allbtns = [fsyearbtn, fgyearbtn, fsmonthbtn, fgmonthbtn];

function removeclassfrombtn(){
    for(var i = 0; i < 4; i++){
        allbtns[i].classList.remove("btn_main");
        allbtns[i].classList.add("btn_sec");
    }
}

function fsyear(){
    removeclassfrombtn();
    fsyearbtn.classList.add("btn_main");
    fsyearbtn.classList.remove("btn_sec");
    joinedfollowingfollowerchart.data.labels = labelyear;
    joinedfollowingfollowerchart.data.datasets[0].label = thelabel[0];
    joinedfollowingfollowerchart.data.datasets[0].data = fsyearvar;
    window.joinedfollowingfollowerchart.update();
}

function fgyear(){
    removeclassfrombtn();
    fgyearbtn.classList.add("btn_main");
    fgyearbtn.classList.remove("btn_sec");
    joinedfollowingfollowerchart.data.labels = labelyear;
    joinedfollowingfollowerchart.data.datasets[0].label = thelabel[1];
    joinedfollowingfollowerchart.data.datasets[0].data = fgyearvar;
    window.joinedfollowingfollowerchart.update();
}

function fsmonth(){
    removeclassfrombtn();
    fsmonthbtn.classList.add("btn_main");
    fsmonthbtn.classList.remove("btn_sec");
    joinedfollowingfollowerchart.data.labels = labelmonth;
    joinedfollowingfollowerchart.data.datasets[0].label = thelabel[2];
    joinedfollowingfollowerchart.data.datasets[0].data = fsmonthvar;
    window.joinedfollowingfollowerchart.update();
}

function fgmonth(){
    removeclassfrombtn();
    fgmonthbtn.classList.add("btn_main");
    fgmonthbtn.classList.remove("btn_sec");
    joinedfollowingfollowerchart.data.labels = labelmonth;
    joinedfollowingfollowerchart.data.datasets[0].label = thelabel[3];
    joinedfollowingfollowerchart.data.datasets[0].data = fgmonthvar;
    window.joinedfollowingfollowerchart.update();
}