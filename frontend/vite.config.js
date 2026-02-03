import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{   // y4e pdte time add kra tha ise uncomment na kre otherwise or scripts me bhi thoda change krna hoga
  //   proxy:{
  //     '/api':'http://localhost:3000',  3000 = should be same as backend port, production ready to make the request from any port on frontend
  //   }

  // },
  plugins: [react()],
})