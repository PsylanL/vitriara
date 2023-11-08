import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'f4u7hyie',
    dataset: 'production'
  },
  vite: {
    resolve: {
      alias: {
        '@': __dirname,
      },
    }
  },
})