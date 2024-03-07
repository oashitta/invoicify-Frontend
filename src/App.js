import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/homepage/LandingPage'
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory'
import WelcomePage from './components/welcome/WelcomePage'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()
const App = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory history={history}>
        <div className="container-fluid">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/user" element={<WelcomePage />} />
          </Routes>
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  )
}

export default App
