import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { COPY_TO_CLIPBOARD } from './scully/plugins/plugin';

setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "ngdevelop-blog",
  outDir: './dist/static',
  defaultPostRenderers: [COPY_TO_CLIPBOARD],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};