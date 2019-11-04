<h2>Please checkout <a href="https://i5m.github.io" target="_BLANK">i5m.github.io</a></h2>

<li>
    <p>
        It is a collection of about <b>quater-a-million</b> (250,000) Twitter users data (available open) including thier:<br/>
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
    </p>
</li>

<li>
    <h3>Files:</h3>
    <b><a href="https://github.com/i5m/i5m.github.io/blob/master/data/people.csv">people.csv</a></b> includes all data in csv format for clear visiblity and further machine learning process for our dev community! <br/>
    <b><a href="https://github.com/i5m/i5m.github.io/blob/master/data/people.json">people.json</a></b> key & value pair including same data with username being the key! <br/>
    <b><a href="https://github.com/i5m/i5m.github.io/blob/master/data/img_url.txt">img_url.txt</a></b> text files which contains all image urls of twitter users dated between 1st Nov 2019 - 3rd Nov 2019
</li>

<h3>The webesite shows a lot of charts to graphical analyse Twitter users statstics <a href="https://i5m.github.io" target="_BLANK">i5m.github.io</a></h3>

<li>
    <h3>Get Images</h3>
    Use getimages.py program to download all the images with usernames as the image file name.<br/>
    <b>Requirements:</b><br/>
    <li>Python 3.x</li>
    <li>BeautifulSoup</li>
    <li>requests</li><br/>
    <b>Usage:</b><br/>
    #  Works only with CSV Files<br/>
    User have to provide 2 Aruments on the command out of which being the program name itself (getimages.py) and second is the location of CSV file<br/><br/>
    <b>Example:</b><br/>
    ~/ python3 getimages.py data/1/people.csv
</li>

<li>
    <h3>Random Data Generation (Under Construction)</h3>
    This feature aims at generating random data from the collected chunk in mainly 3 catagories:
    <li>Image</li>
    <li>User Info</li>
    <li>Name List</li>
</li>
