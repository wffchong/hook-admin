import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { wrapperEnv } from './src/utils/getEnv'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd())
	const viteEnv = wrapperEnv(env)

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		},
		// global css
		css: {
			preprocessorOptions: {
				less: {
					// modifyVars: {
					// 	"primary-color": "#1DA57A",
					// },
					javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
		// server config
		server: {
			host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// https: false,
			// 代理跨域（mock 不需要配置，这里只是个事列）
			proxy: {
				'/api': {
					target: 'https://mock.mengxuegu.com/mock/62abda3212c1416424630a45', // easymock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		}
	}
})
