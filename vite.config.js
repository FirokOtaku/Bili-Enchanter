import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: '*',
      name: 'biliEnchanter',
      formats: ['umd'],
    },
  },
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.js',
      // build: {
      //   externalGlobals: {
      //     react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
      //   },
      //   externalResource: {
      //     'element-plus/dist/index.css': cdn.jsdelivr(),
      //   },
      // },
      server: {
        mountGmApi: true,
      },
      userscript: {
        name: {
          '': 'Bili Enchanter',
          // zh: 'Bili Enchanter',
        },
        namespace: 'https://github.com/FirokOtaku',
        copyright: 'Mulan PSL v2',
        version: '0.1.0',
        author: 'Firok',
        icon: 'https://i.mcmod.cn/item/icon/128x128/0/53.png?v=11',
        homepage: 'https://github.com/FirokOtaku/bili-enchanter',
        // updateURL: '',
        description: {
          '': 'Some enchantments to improve your Bilibili experience',
          zh: '一些提升你 Bilibili 使用体验的附魔',
        },
        match: ['*.bilibili.com/*'],
      },
      build: {
        externalGlobals: {
        },
        externalResource: {
        },
      },
    }),
  ],
})
