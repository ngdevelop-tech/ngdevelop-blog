"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COPY_TO_CLIPBOARD = void 0;
const scully_1 = require("@scullyio/scully");
exports.COPY_TO_CLIPBOARD = 'COPY_TO_CLIPBOARD';
const copyToClipboardPlugin = async (html) => {
    console.log(html);
    return html;
};
const validator = async () => [];
scully_1.registerPlugin('render', exports.COPY_TO_CLIPBOARD, copyToClipboardPlugin, validator);
//# sourceMappingURL=plugin.js.map