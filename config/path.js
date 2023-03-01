const pathSrc = "./src";
const pathDest = "./dest";
const pathPublic = "./public";

module.exports = {
    dest: pathDest,
    public: pathPublic,
    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest,
        public: pathPublic,
    },
    pug: {
        src: pathSrc + "/pug/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest,
        public: pathPublic,
    },
};
