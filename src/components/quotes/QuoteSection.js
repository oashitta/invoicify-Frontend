import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const QuoteSection = () => {
  const [quotes, setQuotes] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [newQuote, setNewQuote] = useState({
    sn: '',
    quoteNo: '',
    customer: '',
    itemDescription: '',
    qty: '',
    validExpr: '',
    status: '',
  })
  const [isEditing, setIsEditing] = useState(false)
  const [quoteToDelete, setQuoteToDelete] = useState(null)

  useEffect(() => {
    const savedQuotes = localStorage.getItem('quotes')
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('quotes', JSON.stringify(quotes))
  }, [quotes])

  const handleShow = () => {
    const lastQuote = quotes[quotes.length - 1]
    const lastQuoteNumber = lastQuote
      ? parseInt(lastQuote.quoteNo.slice(1), 10)
      : 0
    const newQuoteNumber = `Q${String(lastQuoteNumber + 1).padStart(3, '0')}`

    setNewQuote({
      sn: quotes.length + 1,
      quoteNo: newQuoteNumber,
      customer: '',
      itemDescription: '',
      qty: '',
      validExpr: '',
      status: '',
    })
    setIsEditing(false)
    setShowModal(true)
  }

  const handleEditShow = (quote) => {
    setNewQuote(quote)
    setIsEditing(true)
    setShowModal(true)
  }

  const handleClose = () => setShowModal(false)

  const handleDeleteClose = () => {
    setShowDeleteModal(false)
    setQuoteToDelete(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewQuote((prevQuote) => ({
      ...prevQuote,
      [name]: value,
    }))
  }

  const handleSave = () => {
    if (isEditing) {
      setQuotes(
        quotes.map((quote) => (quote.sn === newQuote.sn ? newQuote : quote))
      )
    } else {
      setQuotes([...quotes, newQuote])
    }
    handleClose()
  }

  const confirmDelete = (quote) => {
    setQuoteToDelete(quote)
    setShowDeleteModal(true)
  }

  const handleDelete = () => {
    setQuotes(quotes.filter((quote) => quote.sn !== quoteToDelete.sn))
    handleDeleteClose()
  }

  return (
    <div
      className="d-flex flex-column"
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <div className="d-flex justify-content-end mb-4">
        <Button variant="dark" size="sm" onClick={handleShow}>
          New Quote
        </Button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Quote No</th>
            <th>Customer</th>
            <th>Item Description</th>
            <th>Qty</th>
            <th>Valid Expr</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote, index) => (
            <tr key={index}>
              <td>{quote.sn}</td>
              <td>{quote.quoteNo}</td>
              <td>{quote.customer}</td>
              <td>{quote.itemDescription}</td>
              <td>{quote.qty}</td>
              <td>{quote.validExpr}</td>
              <td>{quote.status}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEditShow(quote)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => confirmDelete(quote)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Quote' : 'New Quote'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formQuoteNo">
              <Form.Label className="fw-bold">Quote No</Form.Label>
              <Form.Control
                type="text"
                name="quoteNo"
                value={newQuote.quoteNo}
                onChange={handleChange}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formCustomer" className="mt-2">
              <Form.Label className="fw-bold">Customer</Form.Label>
              <Form.Control
                type="text"
                name="customer"
                value={newQuote.customer}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formItemDescription" className="mt-2">
              <Form.Label className="fw-bold">Item Description</Form.Label>
              <Form.Control
                type="text"
                name="itemDescription"
                value={newQuote.itemDescription}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formQty" className="mt-2">
              <Form.Label className="fw-bold">Qty</Form.Label>
              <Form.Control
                type="number"
                name="qty"
                value={newQuote.qty}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formValidExpr" className="mt-2">
              <Form.Label className="fw-bold">Valid Expr</Form.Label>
              <Form.Control
                type="date"
                name="validExpr"
                value={newQuote.validExpr}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formStatus" className="mt-2">
              <Form.Label className="fw-bold">Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={newQuote.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Open">Open</option>
                <option value="Converted">Converted</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {isEditing ? 'Save Changes' : 'Save Quote'}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the quote "{quoteToDelete?.quoteNo}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default QuoteSection
