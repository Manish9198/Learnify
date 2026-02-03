import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     '/api':'http://localhost:3000',  3000 = should be same as backend port, production ready to make the request from any port on frontend
  //   }

  // },
  plugins: [react()],
})