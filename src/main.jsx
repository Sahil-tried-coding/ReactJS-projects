import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ImgProvider } from './Context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ImgProvider>

        <App />
    </ImgProvider>
)
