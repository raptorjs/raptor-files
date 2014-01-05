var Walker = require("./DirWalker");
    
function walk(dir, callback, thisObj, options) {
    var walker = new Walker(callback, thisObj, options);
    walker.walkDir(dir);
}

exports.walk = walk;