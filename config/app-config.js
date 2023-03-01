//Plugin that provides a simple way to display notifications when a Gulp task completes.
const notify = require("gulp-notify");

module.exports = {
    // ------------------------------------------- HTML -------------------------------------
    htmlmin_html: {
        collapseWhitespace: true,
    },
    plumber_html: {
        errorHandler: notify.onError((error) => ({
            title: "HTML",
            message: error.message,
        })),
    },
    //prettier_html: {
    //    trailingComma: "es5",
    //    tabWidth: 4,
    //    semi: false,
    //    singleQuote: true,
    //},
    // ------------------------------------------- PUG --------------------------------------
    htmlmin_pug: {
        collapseWhitespace: true,
    },
    pug: {
        pretty: true,
        data: {
            news: require("../data/news.json"),
        },
    },
    plumber_pug: {
        errorHandler: notify.onError((error) => ({
            title: "PUG",
            message: error.message,
        })),
    },
    // ------------------------------------------- Clear ------------------------------------
    clean: {
        force: true,
    },
};
