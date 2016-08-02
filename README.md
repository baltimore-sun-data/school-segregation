# template-longform
A template for longform and in-depth stories at The Baltimore Sun. Stripped, updated and reconfigured from the <a href="http://data.baltimoresun.com/news/unsettled-journeys/splash/">Unsettled Journeys series</a>. It's written with HTML, CSS, Javascript, SASS/SCSS, and Jade/Pug and compiled using npm.

## File structure
The template files are separated into two folders, dist and src. The dist files are the files that will eventually be served on the website, you shouldn't need to touch those. The src files are the files that create the files in the dist folder, so this is where you should be working. Also included is the folder of all the node modules used and the package.json file where there's a bunch of npm scripts that should help with compiling and compressing SASS/SCSS and Jade/Pug as well as minifying/uglifying Javascript.

## Scripts
The scripts folder in src includes all the Javascript libraries used in the template. There are only two Javascript files you should edit: javascript.js and barchartdata.js. Obviously barchartdata.js is where the JS for the bar chart is, if you choose to have one. javascript.js is where the main javascript functions for the template live. The javascript is minified into dist/min/app.min.js.

## Styles
The sass folder in src contains all the SASS and SCSS files, as well as libraries for bourbon and neat. Filenames are generally pretty self-explanatory -- there are dedicated SASS files for different parts of the template. _article.sass and _general.sass are the files that contain styles for the overall template. All of the sass files are compiled into dist/stylesheets/styles.css (fonts.css in the same folder is for the font icons for social buttons).

## HTML
The index file is compiled from three different pug sources: a _base file, includes, and index.pug. Includes are for non-text elements that don't repeat -- ads, comments, story menus, interactives, etc. _base.pug contains the header and footer code as well as scripts and meta tags. index.pug extends _base.pug and is where the actual story lives. All inline and text elements are encased in .container.container--article and .article divs, and inline media (photos, photo galleries, pull quotes, charts) is encased in an inline-media div (with other inline media classes that define the type of media and size of the element). Full-width items that break out of the container dimensions are created outside of the .container.container--article and .article divs.
