// import React from 'react'
// import NavWelcomeSection from '../components/welcome/NavWelcomeSection'

// const Layout = ({ children, sideLinks }) => {
//   return (
//     <div>
//       <NavWelcomeSection />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3">
//             {/* Side Links */}
//             {sideLinks}
//           </div>
//           <div className="col-md-9 d-flex align-items-center justify-content-center">
//             {/* Main Content */}
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Layout
import React from 'react'
import NavWelcomeSection from '../components/welcome/NavWelcomeSection'
import SideLinks from './SideLinks' // Import the SideLinks component

const Layout = ({ children }) => {
  return (
    <div>
      <NavWelcomeSection />
      <div>
        <div className="row">
          <div className="col-md-3">
            {/* Side Links */}
            <SideLinks />
          </div>
          <div className="col-md-9">
            {/* Main Content */}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
