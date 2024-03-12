import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/homepage/LandingPage'
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory'
import WelcomePage from './components/welcome/WelcomePage'
import BillsPage from './components/bills/BillsPage' // Import BillsPage
import QuotesPage from './components/quotes/QuotePage' // Import QuotesPage
import InvoicePage from './components/invoice/InvoicePage' // Import Inv
import EstimatesPage from './components/estimates/EstimatesPage' // Import EstimatesPage
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
            <Route exact path="/bills" element={<BillsPage />} />
            <Route exact path="/quotes" element={<QuotesPage />} />
            <Route exact path="/invoice" element={<InvoicePage />} />
            <Route exact path="/estimates" element={<EstimatesPage />} />
          </Routes>
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  )
}

export default App
