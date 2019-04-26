var colorpallete = ['primary', 'dark', 'success', 'danger', 'warning'];
var i = 0, j = 0;
var printyr = '';

var txt1 = '<div class="lax alert alert-';
var txt2 = '" data-lax-preset="fadeInOut zoomIn" style="border-radius: 10px; max-width: 600px; role="alert"> <img src="';
var imgnum = 1;
var txt3 = '" width="60" height="60" class="rounded float-right" alt="..."> <h5 class="alert-heading">';
var txt4 = ' E';
var epinum = 1;
var epiname = ['The One With The Princess Leia Fantasy', 'The One Where No One\'s Ready', 'The One With The Jam', 'The One With The Metaphorical Tunnel', 'The One With Frank Jr.', 'The One With The Flashback', 'The One With The Race Car Bed', 'The One With The Giant Poking Device', 'The One With The Football', 'The One Where Rachel Quits', 'The One Where Chandler Can\'t Remember Which Sister', 'The One With All The Jealousy', 'The One Where Monica & Richard Are Friends', 'The One With Phoebe\'s Ex-Partner', 'The One Where Ross & Rachel Take A Break', 'The One With The Morning After', 'The One Without The Ski Trip', 'The One With The Hypnosis Tape', 'The One With The Tiny T-Shirt', 'The One With The Dollhouse', 'The One With A Chick And A Duck', 'The One With The Screamer', 'The One With Ross\'s Thing', 'The One With The Ultimate Fighting Champion', 'The One At The Beach'];
var txt5 = '</h5>';

var des =  ['Ross confides with Rachel. Chandler begins to rekindle ex-girlfriend Janice',
            'Ross gets riled when his friends fail to be ready on time for a museum fundraiser where he\'s giving a speech',
            'Monica makes jam & decides she wants to having a baby, visits a sperm bank as a means of getting over Richard',
            'Ross and Rachel encourage Chandler to commit to Janice. Ross worries when his son plays with a girl\'s doll',
            'Phoebe invited her half-brother Frank Jr. to visit. Ross makes a list of famous women he\'d like to date.',
            'The friends reminisce about a time three years ago and some dark secrets are revealed.',
            'When returning a misdelivered bed back to the store, Monica & Joey catch Janice passionately kissing her ex-husband',
            'When Phoebe believes she killed the ugly naked guy across the street, Joey constructs a long poking device.',
            'It\'s Thanksgiving and the friends start a game of football that reveals some major rivalries and prods a rematch',
            'After quitting her Central Perk gig, Rachel worries she\'ll be jobless. Joey\'s selling Christmas trees upsets Phoebe.',
            'A handsome stranger offers Rachel a fashion-buying job. Chandler forgets which of Joey\'s sisters he fooled around',
            'Ross becomes obsessively jealous of Rachel\'s new co-worker Mark and is convinced he is flirting with Rachel',
            'Monica and ex-boyfriend Richard meet by chance - and the lunch they go to leads to something more.',
            'Phoebe\'s ex-singing partner Leslie wants to use Smelly Cat for a cat-litter ad. Chandler dates a beautiful woman.',
            'Ross and Rachel decide to go on a break. Phoebe becomes involved with a foreign diplomat.',
            'Unaware of Ross\'s one-night stand with another woman, Rachel visits him to declare her undying love.',
            'Rachel asks everyone to go on a ski trip... except Ross',
            'Chandler uses a hypnosis tape to quit smoking which aims only at women. Frank Jr. wants to wed a woman twice his age.',
            'Ross is upset when Rachel returns his belongings. Monica dates a millionaire and yet not quite her dream man.',
            'Monica inherits an exquisite dollhouse from her aunt. Joey winds up in bed with his leading lady. Rachel\'s boss dates Chandler.',
            'Pete buys a restaurant and wants Monica as head chef. Joey buys Chandler a chick',
            'Joey\'s play gets terrible reviews. Ross tries to convince Rachel her date is psychotic.',
            'Ross discovers a strange growth on his buttocks. Phoebe dates a firefighter and a teacher.',
            'Monica begs Pete to stop fighting after he is beaten up. Chandler is unnerved when his boss slaps his butt',
            'Phoebe invites the group to her client\'s beach house. Rachel tricks Ross\'s new girlfriend into shaving her head.'];

var epidownnum = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
var txt6 = '</div>';

for(i = 0, j = 0; i < 25; i++, j++) {

    var imgloc = 'img/s(3)/s03e' + imgnum + '.png';

    var downbtn = '<a href="http://79.127.126.110/Serial/Friends/S03/Friends.S03.E' + epidownnum[i] + '.480p.mkv" style="margin: 5px;" class="btn btn-' + colorpallete[j] + '"><i class="material-icons">get_app</i> Download</a>';

    printyr += txt1 + colorpallete[j] + txt2 + imgloc + txt3 + txt4 + epinum + " The One " + epiname[i] + txt5 + des[i] + "<br>" + downbtn + txt6;
    document.getElementById("episodes").innerHTML = printyr;
    if(j+1 >= colorpallete.length) { j=-1; }
    epinum++; imgnum++;
}