const util = require('util');

function isArray(a) {
    return (!!a) && (a.constructor === Array);
};

function tag1(element) {
    return util.format("<%s>", element);
}
function tag2(element, child) {
    return util.format("<%s>%s</%s>", element, (isArray(child) ? child.join("") : child), element);
}
exports.a = function (child) { return tag2("A", child); }
exports.abbr = function (child) { return tag2("ABBR", child); }
exports.address = function (child) { return tag2("ADDRESS", child); }
exports.area = function () { return tag1("AREA"); }
exports.article = function (child) { return tag2("ARTICLE", child); }
exports.aside = function (child) { return tag2("ASIDE", child); }
exports.audio = function (child) { return tag2("AUDIO", child); }

exports.b = function (child) { return tag2("B", child); }
exports.base = function () { return tag1("BASE"); }
exports.bdi = function (child) { return tag2("BDI", child); }
exports.bdo = function (child) { return tag2("BDO", child); }
exports.blockquote = function (child) { return tag2("BLOCKQUOTE", child); }
exports.body = function (child) { return tag2("BODY", child); }
exports.br = function () { return tag1("BR"); }
exports.button = function (child) { return tag2("BUTTON", child); }

exports.canvas = function (child) { return tag2("CANVAS", child); }
exports.caption = function (child) { return tag2("CAPTION", child); }
exports.cite = function (child) { return tag2("CITE", child); }
exports.code = function (child) { return tag2("CODE", child); }
exports.col = function (child) { return tag1("COL"); }
exports.colgroup = function (child) { return tag2("COLGROUP", child); }

exports.data = function (child) { return tag2("DATA", child); }
exports.datalist = function (child) { return tag2("DATALIST", child); }
exports.dd = function (child) { return tag2("DD", child); }
exports.del = function (child) { return tag2("DEL", child); }
exports.details = function (child) { return tag2("DETAILS", child); }
exports.dfn = function (child) { return tag2("DFN", child); }
exports.dialog = function (child) { return tag2("DIALOG", child); }
exports.div = function (child) { return tag2("DIV", child); }
exports.dl = function (child) { return tag2("DL", child); }
exports.dt = function (child) { return tag2("DT", child); }

exports.em = function (child) { return tag2("EM", child); }
exports.embed = function () { return tag1("EMBED"); }

exports.fieldset = function (child) { return tag2("FIELDSET", child); }
exports.figcaption = function (child) { return tag2("FIGCAPTION", child); }
exports.figure = function (child) { return tag2("FIGURE", child); }
exports.footer = function (child) { return tag2("FOOTER", child); }
exports.form = function (child) { return tag2("FORM", child); }

exports.h1 = function (child) { return tag2("H1", child); }
exports.h2 = function (child) { return tag2("H2", child); }
exports.h3 = function (child) { return tag2("H3", child); }
exports.h4 = function (child) { return tag2("H4", child); }
exports.h5 = function (child) { return tag2("H5", child); }
exports.h6 = function (child) { return tag2("H6", child); }
exports.head = function (child) { return tag2("HEAD", child); }
exports.header = function (child) { return tag2("HEADER", child); }
exports.hr = function () { return tag1("HR"); }
exports.html = function (child) { return tag2("HTML", child); }

exports.i = function (child) { return tag2("I", child); }
exports.iframe = function (child) { return tag2("IFRAME", child); }
exports.img = function () { return tag1("IMG"); }
exports.input = function () { return tag1("INPUT"); }
exports.ins = function (child) { return tag2("INS", child); }

exports.kbd = function (child) { return tag2("KBD", child); }
exports.label = function (child) { return tag2("LABEL", child); }
exports.legend = function (child) { return tag2("LEGEND", child); }
exports.li = function (child) { return tag2("LI", child); }
exports.link = function () { return tag1("LINK"); }
exports.main = function (child) { return tag2("MAIN", child); }
exports.map = function (child) { return tag2("MAP", child); }
exports.mark = function (child) { return tag2("MARK", child); }
exports.meta = function () { return tag1("META"); }
exports.meter = function (child) { return tag2("METER", child); }
exports.nav = function (child) { return tag2("NAV", child); }
exports.noscript = function (child) { return tag2("NOSCRIPT", child); }
exports.object = function (child) { return tag2("OBJECT", child); }
exports.ol = function (child) { return tag2("OL", child); }
exports.optgroup = function (child) { return tag2("OPTGROUP", child); }
exports.option = function (child) { return tag2("OPTION", child); }
exports.output = function (child) { return tag2("OUTPUT", child); }
exports.p = function (child) { return tag2("P", child); }
exports.param = function () { return tag1("PARAM"); }
exports.picture = function (child) { return tag2("PICTURE", child); }
exports.pre = function (child) { return tag2("PRE", child); }
exports.progress = function (child) { return tag2("PROGRESS", child); }
exports.q = function (child) { return tag2("Q", child); }
exports.rb = function (child) { return tag2("RB", child); }
exports.rp = function (child) { return tag2("RP", child); }
exports.rt = function (child) { return tag2("RT", child); }
exports.rtc = function (child) { return tag2("RTC", child); }
exports.ruby = function (child) { return tag2("RUBY", child); }
exports.s = function (child) { return tag2("S", child); }
exports.samp = function (child) { return tag2("SAMP", child); }
exports.script = function (child) { return tag2("SCRIPT", child); }
exports.section = function (child) { return tag2("SECTION", child); }
exports.select = function (child) { return tag2("SELECT", child); }
exports.small = function (child) { return tag2("SMALL", child); }
exports.source = function () { return tag1("SOURCE"); }
exports.span = function (child) { return tag2("SPAN", child); }
exports.strong = function (child) { return tag2("STRONG", child); }
exports.style = function (child) { return tag2("STYLE", child); }
exports.sub = function (child) { return tag2("SUB", child); }
exports.summary = function (child) { return tag2("SUMMARY", child); }
exports.sup = function (child) { return tag2("SUP", child); }
exports.table = function (child) { return tag2("TABLE", child); }
exports.tbody = function (child) { return tag2("TBODY", child); }
exports.td = function (child) { return tag2("TD", child); }
exports.template = function (child) { return tag2("TEMPLATE", child); }
exports.textarea = function (child) { return tag2("TEXTAREA", child); }
exports.tfoot = function (child) { return tag2("TFOOT", child); }
exports.th = function (child) { return tag2("TH", child); }
exports.thead = function (child) { return tag2("THEAD", child); }
exports.time = function (child) { return tag2("TIME", child); }
exports.title = function (child) { return tag2("TITLE", child); }
exports.tr = function (child) { return tag2("TR", child); }
exports.track = function () { return tag1("TRACK"); }
exports.u = function (child) { return tag2("U", child); }
exports.ul = function (child) { return tag2("UL", child); }
exports.var = function (child) { return tag2("VAR", child); }
exports.video = function (child) { return tag2("VIDEO", child); }
exports.wbr = function () { return tag1("WBR"); }
