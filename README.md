<h1>Please checkout <a href="https://i5m.github.io" target="_BLANK">i5m.github.io</a></h1>

<p style="font-size:18px;">
    It is a collection of about <b>quater-a-million</b> (250,000) Twitter users data (available open) including thier:<br/><br/>
    <h4>
        <li>Image URL's</li>
        <li>Original Name</li>
        <li>Biography</li>
        <li>Joined Date</li>
        <li>Location (subject to availablity)</li>
        <li>Birthday (subject to availablity)</li>
        <li>Number of Tweets</li>
        <li>Number of Likes</li>
        <li>Number of Followers</li>
        <li>Number of Following</li>
    </h4><br/>
</p>

<p style="font-size:18px;">
    Files:
    <br/><b><a href="https://github.com/i5m/i5m.github.io/blob/master/data/people.csv">people.csv</a></b> includes all data in csv format for clear visiblity and further machine learning process for our dev community!
    <br/><br/><b><a href="https://github.com/i5m/i5m.github.io/blob/master/data/people.json">people.json</a></b> key & value pair including same data with username being the key!
    <br/><br/><b><a href="https://github.com/i5m/i5m.github.io/blob/master/data/img_url.txt">img_url.txt</a></b> text files which contains all image urls of twitter users <span class="hero-color">dated between 1st Nov 2019 - 3rd Nov 2019</span>
    <br/><br/>Images downloaded from url's aren't being put here for now.
</p><br/>

<h1>The webesite shows a lot of charts to graphical analyse Twitter users statstics <a href="https://i5m.github.io" target="_BLANK">i5m.github.io</a></h1>

<h4>
    Use getimages.py program to download all the images with usernames as the image file name.<br/>
    <b>Requirements:</b><br/>
    <li>Python 3.x</li>
    <li>BeautifulSoup</li>
    <li>requests</li>
    <li>random</li>
    <li>csv</li>
    <li>sys</li><br/>
    <b>Usage:</b><br/>
    <u>Works only with CSV Files</u>
    User have to provide 2 Aruments on the command out of which being the program name itself (getimages.py) and second is the location of CSV file<br/>
    <b>Example</b><br/>
    ~/ python3 getimages.py data/1/people.csv
</h4>

<h2>Random Data Generation</h2>
