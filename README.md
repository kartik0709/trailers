Yarn is used instead of NPM, as NPM has a tendency of breaking dependencies.

TO RUN APPLICATION, First install, using 'yarn install', then run using 'yarn start'.

Used in Frontend - React.js (CRA), jquery, SASS

How does it work - First it renders all the movies using flex and wraps it. On clicking the movie, we identify which row is that movie on and create a new div in front of that row with width and height set to 100% (this is done using jquery). Then we simply render the Trailer component in the newly created div.

App.js - Holds the entire logic of the app.

Card.js - Container for movie.

Trailer.js - Render trailer and information of the movie

constants.js - Holds two constants, one for card width and another for container padding which are required in calculating where to add the container for rendering trailer.

Header.js - Header component.

Things to note :

Due receiving cors error, I had put the entire JSON response in API/data.json.

To download images of each movie, I wrote a bash script, which looped over array of eventcodes(which were added to an array and joined with the help of javascript) and used wget to download each image. You can find the bash script below.

The method I've used for showing trailer is bit of a hack due to time constraints. Same hack can be implemented in react only itself.

Some votes and stats have been hardcoded because I couldn't find them in the API response.

Filters have not been created as per the instructions.

There is only one tab at the top i.e. 'coming soon' instead of two - 'coming soon', 'now showing' because all the API response was for coming soon movies. However, in the event of both responses, we can easily use filter and show movies according to their respective tabs.

Font used is Roboto (which I don't personally like at all). To compile SASS to CSS, I've used node-sass-chokidar. npm-run-all is used to run both the react app and the compiler.

Website is responsive to some extend.


### BASH SCRIPT TO DOWNLOAD POSTERS:

#### declare an array variable
declare -a array=( {list of event codes here. ex - "ET00072278" "ET00075253"}  )

#### get length of an array
arraylength=${#array[@]}

#### use for loop to read all values and substitute in api url to get images
<pre>
for (( i=1; i<${arraylength}+1; i++ )); <br/>
do
</br>
  foo="https://in.bmscdn.com/events/moviecard/${array[$i-1]}.jpg"<br/>
  wget $foo<br/>
done
</pre>