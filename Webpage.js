/*
    Probably does not need to do very much apart from hold info for the moment.
    Could make subclasses do things like generare its specific parts from spec.

*/

class Webpage {
    constructor(spec) {
        Object.assign(this, spec);
    }
}


module.exports = Webpage;