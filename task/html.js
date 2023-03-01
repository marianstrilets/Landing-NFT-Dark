const { src, dest } = require("gulp");

// ----------------------------------------- Plugins ------------------------------------
//Prevent pipe breaking caused by errors from gulp plugins
const plumber = require("gulp-plumber");

//Plugin that provides a simple way to display notifications when a Gulp task completes.
const notify = require("gulp-notify");

//Plugin for file includes
const fileinclude = require("gulp-file-include");

//Plugin to minify HTML.
const htmlmin = require("gulp-htmlmin");

//Format files with Prettier
//const prettier = require('gulp-prettier');
//=======================================================================================

// ------------------------------------------- Config -----------------------------------
const path = require("../config/path.js");
const app = require("../config/app-config.js");
//=======================================================================================

// -------------------------------------------- HTML ------------------------------------
const html = () => {
    return src(path.html.src)
        //.pipe(plumber(app.plumber_html))
        //.pipe(fileinclude())
        ////.pipe(prettier(app.prettier_html))
        //.pipe(dest(path.html.dest))
        //.pipe(htmlmin(app.htmlmin_html))
        //.pipe(dest(path.html.public));
};
//=======================================================================================

module.exports = html;
