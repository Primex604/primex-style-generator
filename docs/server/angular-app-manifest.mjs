
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/primex-style-generator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/primex-style-generator"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 702, hash: '09b3c41942a268dfacfa0f27eaa07255d6362b6eea2428c715a884eb140c9a6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '70acf61b5add6218e80f81fc6edd1a025559d59e0ccc092bbeb56b85da5bbd5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28224, hash: '6128df3422621a00dd70276b825bed520bbdc2a76496d692f18f3abcc64e591b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RGLYDYL5.css': {size: 50, hash: 'C2JxkohjSro', text: () => import('./assets-chunks/styles-RGLYDYL5_css.mjs').then(m => m.default)}
  },
};
