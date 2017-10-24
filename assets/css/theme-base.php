/*
Theme Name: Los Camachos
Theme URI: http://loscamachos.com/
Author: Blue Terrier Studio team
Author URI: http://www.blueterrier.mx
Description: Los Camachos custom theme was developed with a focus on business needs. Looks great on any device.
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: Los Camachos
Tags: one-column, two-columns, right-sidebar, flexible-header, accessibility-ready, custom-colors, custom-header, custom-menu, custom-logo, editor-style, featured-images, footer-widgets, post-formats, rtl-language-support, sticky-post, theme-options, threaded-comments, translation-ready

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/

/*--------------------------------------------------------------
1.0 Normalize
Styles based on Normalize v5.0.0 @link https://github.com/necolas/normalize.css
--------------------------------------------------------------*/

html {
	font-family: sans-serif;
	line-height: 1.15;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

body {
	margin: 0;
}

article,
aside,
footer,
header,
nav,
section {
	display: block;
}

h1 {
	font-size: 2em;
	margin: 0.67em 0;
}

figcaption,
figure,
main {
	display: block;
}

figure {
	margin: 1em 0;
}

hr {
	-webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box;
	height: 0;
	overflow: visible;
}

pre {
	font-family: monospace, monospace;
	font-size: 1em;
}

a {
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
	outline-width: 0;
}

abbr[title] {
	border-bottom: 1px #767676 dotted;
	text-decoration: none;
}

b,
strong {
	font-weight: inherit;
}

b,
strong {
	font-weight: 700;
}

code,
kbd,
samp {
	font-family: monospace, monospace;
	font-size: 1em;
}

dfn {
	font-style: italic;
}

mark {
	background-color: #eee;
	color: #222;
}

small {
	font-size: 80%;
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

audio,
video {
	display: inline-block;
}

audio:not([controls]) {
	display: none;
	height: 0;
}

img {
	border-style: none;
}

svg:not(:root) {
	overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
	font-family: sans-serif;
	font-size: 100%;
	line-height: 1.15;
	margin: 0;
}

button,
input {
	overflow: visible;
}

button,
select {
	text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
	-webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
}

fieldset {
	border: 1px solid #bbb;
	margin: 0 2px;
	padding: 0.35em 0.625em 0.75em;
}

legend {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	color: inherit;
	display: table;
	max-width: 100%;
	padding: 0;
	white-space: normal;
}

progress {
	display: inline-block;
	vertical-align: baseline;
}

textarea {
	overflow: auto;
}

[type="checkbox"],
[type="radio"] {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
	height: auto;
}

[type="search"] {
	-webkit-appearance: textfield;
	outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}

::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}

details,
menu {
	display: block;
}

summary {
	display: list-item;
}

canvas {
	display: inline-block;
}

template {
	display: none;
}

[hidden] {
	display: none;
}