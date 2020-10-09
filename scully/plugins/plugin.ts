
import { registerPlugin, getPluginConfig } from '@scullyio/scully';

export const COPY_TO_CLIPBOARD = 'COPY_TO_CLIPBOARD';

const copyToClipboardPlugin = async (html: string): Promise<string> => {
  console.log(html);
  return html;
};

const validator = async () => [];

registerPlugin('render', COPY_TO_CLIPBOARD, copyToClipboardPlugin, validator);
