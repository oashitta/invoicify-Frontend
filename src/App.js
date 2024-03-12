import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/homepage/LandingPage'
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory'
import WelcomePage from './components/welcome/WelcomePage'
import { createBrowserHistory } from 'history'
import ReportsPage from './components/reports/ReportsPage'
import ItemPage from './components/items/ItemPage'
import VendorPage from './components/vendors/VendorPage'
import ClientPage from './components/clients/ClientPage'
import InvoicePage from './components/invoice/InvoicePage'
import QuotePage from './components/quotes/QuotePage'
import BillsPage from './components/bills/BillsPage'
import EstimatesPage from './components/estimates/EstimatesPage'
const history = createBrowserHistory()

const App = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory history={history}>
        <div className="container-fluid">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/user" element={<WelcomePage />} />
            <Route exact path="/items" element={<ItemPage />} />
            <Route exact path="/vendors" element={<VendorPage />} />
            <Route exact path="/clients" element={<ClientPage />} />
            <Route exact path="/reports" element={<ReportsPage />} />
            <Route exact path="/bills" element={<BillsPage />} />
            <Route exact path="/invoices" element={<InvoicePage />} />
            <Route exact path="/estimates" element={<EstimatesPage />} />
            <Route exact path="/quotes" element={<QuotePage />} />
          </Routes>
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  )
}

export default App
