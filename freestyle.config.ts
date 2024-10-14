import { defineConfig} from 'freestyle-sh'
import 'dotenv/config'

export default defineConfig({
    dev: {
        proxy: "http://localhost:3000",
        command: "bun run vinxi dev"
    },
    deploy: {
        web: {
            entryPoint: ".output/server/index.ts"
        }
    }
});