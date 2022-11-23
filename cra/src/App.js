import './App.css'
import logo from './logo.svg'
import { API_URL, currentEnv } from './const'
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>当前运行环境：{currentEnv}</p>
        <p>当前请求接口地址：{API_URL}</p>
      </header>
    </div>
  )
}

export default App
