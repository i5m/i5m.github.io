var colorpallete = ['primary', 'dark', 'success', 'danger', 'warning'];
var i = 0, j = 0;
var printyr = '';

var txt1 = '<div class="lax alert alert-';
var txt2 = '" data-lax-preset="fadeInOut zoomIn" style="border-radius: 10px; max-width: 600px; role="alert"> <img src="';
var imgnum = 1;
var txt3 = '" width="60" height="60" class="rounded float-right" alt="..."> <h5 class="alert-heading">';
var txt4 = ' E';
var epinum = 1;
var epiname = ['With Pilot', 'With the Sonogram at the End', 'With the Thumb', 'With George Stephanopoulos', 'With The East-German Laundry Detergent', 'With the Butt', 'With the Blackout', 'Where Nana Dies Twice', 'Where Underdog Gets Away', 'With the Monkey', 'With Mrs. Bing', 'With the Dozen Lasagnas', 'with the Boobies', 'with the Candy Hearts', 'with the Stoned Guy', 'with the Two Parts, part 1', 'with the Two Parts, part 2', 'with All the Poker', 'Where the Monkey Gets Away', 'with the Evil Orthodontist', 'with Fake Monica', 'with the Ick Factor', 'with the Birth', 'Where Rachel Finds Out'];
var txt5 = '</h5>';

var des =  ["Monica and the gang introduce Rachel to the 'real world' after she leaves her fiancé at the altar.",
            "Ross finds out his estranged lesbian wife and her life partner are going to have his baby.",
            "Phoebe discovers a human thumb floating in her can of soda and gets compensation of $7,000. Chandler starts smoking again.",
            "The girls spy on the sexy politician across the street, while the guys go to a hockey game.",
            "Ross and Rachel wash their laundry together. Joey takes Monica on a fake double date in an attempt to reunite with his ex",
            "Joey finally gets a film role: Al Pacino's butt double. Chandler dates a woman who already has both a husband and a boyfriend.",
            "During a power outage, Chandler is trapped in an automated-teller vestibule with a gorgeous model.",
            "Ross and Monica go to the bedside of their dead grandmother, who momentarily returns to life.",
            "Monica plans a lovely, Thanksgiving feast but her plans go away. Joey appears on medical posters. Rachel plans to go skiing with her family.",
            "Ross arrives at the New Year's Eve party with his new companion, a monkey named Marcel, who is more compatible with the group than he is.",
            "Chandler's flamboyant romance-novelist mother comes to New York for a visit. Monica and Phoebe cause a traffic accident.",
            "Rachel's Italian boyfriend Paolo hits on Phoebe in the massage parlor.",
            "Chandler sees Rachel naked. Joey learns that his father is having an affair with a pet mortician, but his mother already knew.",
            "The girls rebel against Valentine's Day by burning mementos from past relationships. Chandler reunites with an old flame.",
            "Ross asks Joey for advice on how to talk dirty to women. Monica interviews for a chef's position, but the owner shows up stoned.",
            "Phoebe's twin sister causes confusion and conflict when Joey is attracted to her.",
            "Monica and Rachel squabble over two handsome doctors.",
            "The girls lose money in a poker game with the boys. After getting advice from Monica's aunt, they demand a rematch.",
            "Rachel accidentally lets monkey escape. Then she discovers that her old best friend Mindy is engaged to marry her ex-fiance.",
            "Riddled with guilt, Rachel decides to confess her evil sins only to discover that Mindy's been busier than she's let on.",
            "Monica meets her identity thief, who helps her live out her fantasies. Ross's monkey becomes sexually mature.",
            "Monica discovers that she is a cradle snatcher. Ross's ex-wife begins giving birth.",
            "The baby is born, bringing adoration from everyone.",
            "Rachel finds out about Ross's love for her while he is working in China. Aanother surprise awaits as she heads to the airport to meet him."];

var epiwatchnum = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
var epidownnum = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16-E17','16-E17','18','19','20','21','22','23','24'];
var txt6 = '</div>';

for(i = 0, j = 0; i < 24; i++, j++) {

    var imgloc = 'img/s(1)/s01e' + imgnum + '.png';

    var downbtn = '<a href="http://79.127.126.110/Serial/Friends/S01/Friends.S01.E' + epidownnum[i] + '.480p.mkv" style="margin: 5px;" class="btn btn-' + colorpallete[j] + '"><i class="material-icons">get_app</i> Download</a>';
    var watchbtn = '<a target="_BLANK" href="http://s8.bitdownload.ir/Series/friends/S01/Friends.S01E' + epiwatchnum[i] + '.720p.bitdownload.ir.mkv" style="margin: 5px;" class="btn btn-' + colorpallete[j] + '"><i class="material-icons">live_tv</i> Watch</a>';

    printyr += txt1 + colorpallete[j] + txt2 + imgloc + txt3 + txt4 + epinum + " The One " + epiname[i] + txt5 + des[i] + "<br>" + downbtn + watchbtn + txt6;
    document.getElementById("episodes").innerHTML = printyr;
    if(j+1 >= colorpallete.length) { j=-1; }
    epinum++; imgnum++;
}