// @desc Get all contacts
// @routes GET /api/contacts
// @access public

const getContacts = (req, res) => {
    res.status(200).json({message:`get all contacts`})
}


// @desc Get individula contacts
// @routes GET /api/contacts/:id
// @access public

const getContact = (req, res) => {
    res.status(200).json({message:`get contacts for ${req.params.id}`})
}

// @desc create new contacts
// @routes POST  /api/contacts
// @access public

const createContact = (req, res) => {
    res.status(201).json({message:`create contacts`})
}


// @desc Update new contacts
// @routes PUT  /api/contacts
// @access public

const updateContact = (req, res) => {
    res.json({message:`update contacts for ${req.params.id}`})
}


// @desc Delete new contacts
// @routes delete  /api/contacts
// @access public

const deleteContact = (req, res) => {
    res.json({message:`delete contact for ${req.params.id}`})
}


module.exports = {getContacts, getContact, createContact,updateContact, deleteContact}