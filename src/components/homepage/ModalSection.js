import React from 'react'
import ResendVerificationEmail from './ResendVerificationEmail'
import { Link } from 'react-router-dom'

const ModalSection = ({ errorMessage, onClose }) => {
  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Email Verification</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              {errorMessage} or email <Link>support@billify.ca</Link>
            </p>

            {/* Render the ResendVerificationEmail component */}
            <Link>
              <ResendVerificationEmail />
            </Link>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-login" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSection
