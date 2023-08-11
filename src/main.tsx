import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/theme/theme.scss'
import 'virtual:uno.css';
import './assets/fonts/iconfont.css'
import './http'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
