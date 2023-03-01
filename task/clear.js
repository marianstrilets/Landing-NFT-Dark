const { src } = require("gulp");

// ----------------------------------------- Plugins ------------------------------------
//Removes files and folders.
const clean = require("gulp-clean");
//=======================================================================================

// ---------------------------------------- Config --------------------------------------
const path = require("../config/path.js");
const app = require("../config/app-config.js");
//=======================================================================================

// ----------------------------------------- Clear --------------------------------------
const clear = () => {
    return (
        src(path.public, { read: false }).pipe(clean(app.clean)) &&
        src(path.dest, { read: false }).pipe(clean(app.clean))
    );
};
//=======================================================================================

module.exports = clear;
