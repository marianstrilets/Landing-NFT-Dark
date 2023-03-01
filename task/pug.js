const { src, dest } = require("gulp");

// --------------------------------------- Plugins --------------------------------------
//Prevent pipe breaking caused by errors from gulp plugins
const plumber = require("gulp-plumber");

//Plugin that provides a simple way to display notifications when a Gulp task completes.
const notify = require("gulp-notify");

//Plugin to minify HTML.
const htmlmin = require("gulp-htmlmin");

//Gulp plugin for compiling Pug templates.
const pugs = require("gulp-pug");
//=======================================================================================

// ---------------------------------------- Config --------------------------------------
const path = require("../config/path.js");
const app = require("../config/app-config.js");
//=======================================================================================

// ----------------------------------------- PUG ----------------------------------------
const pug = () => {
    return src(path.pug.src)
        .pipe(plumber(app.plumber_pug))
        .pipe(pugs(app.pug))
        .pipe(dest(path.pug.dest))
        .pipe(htmlmin(app.htmlmin_pug))
        .pipe(dest(path.pug.public));
};
//=======================================================================================

module.exports = pug;
