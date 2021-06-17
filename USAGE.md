# Usage

- This module allows generate html document using functions.

## To Install

```bash
npm install fn-html [--save]
```

## To use this module

```js
const html = require("fn-html");
```

## API

### Functions

| Function         | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `useUpperCase()` | Return HTML element in uppercase. This is the default behaviour. |
| `useLowerCase()` | Return HTML element in lowercase.                                |

### HTML Element Functions

- `child` - `<string>` | `<array>`

| Function            | Output                           |
| ------------------- | -------------------------------- |
| `a(child)`          | `<A>child</A>`                   |
| `abbr(child)`       | `<ABBR>child</ABBR>`             |
| `address(child)`    | `<ADDRESS>child</ADDRESS>`       |
| `area()`            | `<AREA>`                         |
| `article(child)`    | `<ARTICLE>child</ARTICLE>`       |
| `aside(child)`      | `<ASIDE>child</ASIDE>`           |
| `audio(child)`      | `<AUDIO>child</AUDIO>`           |
| `b(child)`          | `<B>child</B>`                   |
| `base()`            | `<BASE>`                         |
| `bdi(child)`        | `<BDI>child</BDI>`               |
| `bdo(child)`        | `<BDO>child</BDO>`               |
| `blockquote(child)` | `<BLOCKQUOTE>child</BLOCKQUOTE>` |
| `body(child)`       | `<BODY>child</BODY>`             |
| `br()`              | `<BR>`                           |
| `button(child)`     | `<BUTTON>child</BUTTON>`         |
| `canvas(child)`     | `<CANVAS>child</CANVAS>`         |
| `caption(child)`    | `<CAPTION>child</CAPTION>`       |
| `cite(child)`       | `<CITE>child</CITE>`             |
| `code(child)`       | `<CODE>child</CODE>`             |
| `col()`             | `<COL>`                          |
| `colgroup(child)`   | `<COLGROUP>child</COLGROUP>`     |
| `data(child)`       | `<DATA>child</DATA>`             |
| `datalist(child)`   | `<DATALIST>child</DATALIST>`     |
| `dd(child)`         | `<DD>child</DD>`                 |
| `del(child)`        | `<DEL>child</DEL>`               |
| `details(child)`    | `<DETAILS>child</DETAILS>`       |
| `dfn(child)`        | `<DFN>child</DFN>`               |
| `dialog(child)`     | `<DIALOG>child</DIALOG>`         |
| `div(child)`        | `<DIV>child</DIV>`               |
| `dl(child)`         | `<DL>child</DL>`                 |
| `dt(child)`         | `<DT>child</DT>`                 |
| `em(child)`         | `<EM>child</EM>`                 |
| `embed()`           | `<EMBED>`                        |
| `fieldset(child)`   | `<FIELDSET>child</FIELDSET>`     |
| `figcaption(child)` | `<FIGCAPTION>child</FIGCAPTION>` |
| `figure(child)`     | `<FIGURE>child</FIGURE>`         |
| `footer(child)`     | `<FOOTER>child</FOOTER>`         |
| `form(child)`       | `<FORM>child</FORM>`             |
| `h1(child)`         | `<H1>child</H1>`                 |
| `h2(child)`         | `<H2>child</H2>`                 |
| `h3(child)`         | `<H3>child</H3>`                 |
| `h4(child)`         | `<H4>child</H4>`                 |
| `h5(child)`         | `<H5>child</H5>`                 |
| `h6(child)`         | `<H6>child</H6>`                 |
| `head(child)`       | `<HEAD>child</HEAD>`             |
| `header(child)`     | `<HEADER>child</HEADER>`         |
| `hr()`              | `<HR>`                           |
| `html(child)`       | `<HTML>child</HTML>`             |
| `i(child)`          | `<I>child</I>`                   |
| `iframe(child)`     | `<IFRAME>child</IFRAME>`         |
| `img()`             | `<IMG>`                          |
| `input()`           | `<INPUT>`                        |
| `ins(child)`        | `<INS>child</INS>`               |
| `kbd(child)`        | `<KBD>child</KBD>`               |
| `label(child)`      | `<LABEL>child</LABEL>`           |
| `legend(child)`     | `<LEGEND>child</LEGEND>`         |
| `li(child)`         | `<LI>child</LI>`                 |
| `link()`            | `<LINK>`                         |
| `main(child)`       | `<MAIN>child</MAIN>`             |
| `map(child)`        | `<MAP>child</MAP>`               |
| `mark(child)`       | `<MARK>child</MARK>`             |
| `meta()`            | `<META>`                         |
| `meter(child)`      | `<METER>child</METER>`           |
| `nav(child)`        | `<NAV>child</NAV>`               |
| `noscript(child)`   | `<NOSCRIPT>child</NOSCRIPT>`     |
| `object(child)`     | `<OBJECT>child</OBJECT>`         |
| `ol(child)`         | `<OL>child</OL>`                 |
| `optgroup(child)`   | `<OPTGROUP>child</OPTGROUP>`     |
| `option(child)`     | `<OPTION>child</OPTION>`         |
| `output(child)`     | `<OUTPUT>child</OUTPUT>`         |
| `p(child)`          | `<P>child</P>`                   |
| `param()`           | `<PARAM>`                        |
| `picture(child)`    | `<PICTURE>child</PICTURE>`       |
| `pre(child)`        | `<PRE>child</PRE>`               |
| `progress(child)`   | `<PROGRESS>child</PROGRESS>`     |
| `q(child)`          | `<Q>child</Q>`                   |
| `rb(child)`         | `<RB>child</RB>`                 |
| `rp(child)`         | `<RP>child</RP>`                 |
| `rt(child)`         | `<RT>child</RT>`                 |
| `rtc(child)`        | `<RTC>child</RTC>`               |
| `ruby(child)`       | `<RUBY>child</RUBY>`             |
| `s(child)`          | `<S>child</S>`                   |
| `samp(child)`       | `<SAMP>child</SAMP>`             |
| `script(child)`     | `<SCRIPT>child</SCRIPT>`         |
| `section(child)`    | `<SECTION>child</SECTION>`       |
| `select(child)`     | `<SELECT>child</SELECT>`         |
| `small(child)`      | `<SMALL>child</SMALL>`           |
| `source()`          | `<SOURCE>`                       |
| `span(child)`       | `<SPAN>child</SPAN>`             |
| `strong(child)`     | `<STRONG>child</STRONG>`         |
| `style(child)`      | `<STYLE>child</STYLE>`           |
| `sub(child)`        | `<SUB>child</SUB>`               |
| `summary(child)`    | `<SUMMARY>child</SUMMARY>`       |
| `sup(child)`        | `<SUP>child</SUP>`               |
| `table(child)`      | `<TABLE>child</TABLE>`           |
| `tbody(child)`      | `<TBODY>child</TBODY>`           |
| `td(child)`         | `<TD>child</TD>`                 |
| `template(child)`   | `<TEMPLATE>child</TEMPLATE>`     |
| `textarea(child)`   | `<TEXTAREA>child</TEXTAREA>`     |
| `tfoot(child)`      | `<TFOOT>child</TFOOT>`           |
| `th(child)`         | `<TH>child</TH>`                 |
| `thead(child)`      | `<THEAD>child</THEAD>`           |
| `time(child)`       | `<TIME>child</TIME>`             |
| `title(child)`      | `<TITLE>child</TITLE>`           |
| `tr(child)`         | `<TR>child</TR>`                 |
| `track()`           | `<TRACK>`                        |
| `u(child)`          | `<U>child</U>`                   |
| `ul(child)`         | `<UL>child</UL>`                 |
| `var(child)`        | `<VAR>child</VAR>`               |
| `video(child)`      | `<VIDEO>child</VIDEO>`           |
| `wbr()`             | `<WBR>`                          |
