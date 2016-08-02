# template-longform
A template for longform and in-depth stories at The Baltimore Sun. Stripped, updated and reconfigured from the [Unsettled Journeys series][http://data.baltimoresun.com/news/unsettled-journeys/splash/]. It's written with HTML, CSS, Javascript, SASS/SCSS, and Jade/Pug and compiled using npm.

## File structure
The template files are separated into two folders, dist and src. The dist files are the files that will eventually be served on the website, you shouldn't need to touch those. The src files are the files that create the files in the dist folder, so this is where you should be working. Also included is the folder of all the node modules used and the package.json file where there's a bunch of npm scripts that should help with compiling and compressing SASS/SCSS and Jade/Pug as well as minifying/uglifying Javascript.

## Scripts
The scripts folder in src includes all the Javascript libraries used in the template. There are only two Javascript files you should edit: javascript.js and barchartdata.js. Obviously barchartdata.js is where the JS for the bar chart is, if you choose to have one. javascript.js is where the main javascript functions for the template live. 

## Styles
The sass folder in src contains all the SASS and SCSS files, as well as libraries for bourbon and neat. 
