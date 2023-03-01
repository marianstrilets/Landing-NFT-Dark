const { watch, series, parallel } = require("gulp");

// ----------------------------------------- Plugins ------------------------------------
//Keep multiple browsers & devices in sync when building websites.
const browserSync = require("browser-sync").create();
//=======================================================================================

// ---------------------------------------- Tasks js ------------------------------------
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const pug = require("./task/pug.js");
//=======================================================================================

// ---------------------------------------- Config --------------------------------------
const path = require("./config/path.js");
//=======================================================================================

// ------------------------------------- Change Tracking --------------------------------
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.stream);
    watch(path.pug.watch, pug).on("all", browserSync.stream);
};
//=======================================================================================

// ---------------------------------------- Browser Sync --------------------------------
const server = () => {
    browserSync.init({ server: { baseDir: path.dest } });
};
//=======================================================================================

// ------------------------------------------- Tasks ------------------------------------
exports.html = html;
exports.pug = pug;
exports.watch = watcher;
exports.clear = clear;
//=======================================================================================

// ------------------------------ Choose preprocesor HTML ??? ---------------------------
const preprocesor_html = exports.html;
//const preprocesor_html = exports.pug;
//=======================================================================================

// ----------------------------------------- Assembly  ----------------------------------
exports.dev = series(
    clear, 
    //preprocesor_html,
    //parallel(watcher, server)
);
//=======================================================================================
