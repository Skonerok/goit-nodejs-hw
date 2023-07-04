const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

// const listContacts = async () => {
//     const data = await fs.readFile(contactsPath);
    
//   return JSON.parse(data);
// };

// const getContactById = async (contactId) => {
//   const allContacts = await listContacts();
//     const contact = allContacts.find((item) => item.id === contactId);
    
//   return contact || null;
// };

// const removeContact = async (contactId) => {
//   const allContacts = await listContacts();
//   const removedContact = allContacts.find((contact) => contact.id === contactId);
//     if (!removedContact) {
      
//     return null;
//   }

//   const updatedContacts = allContacts.filter((contact) => contact.id !== contactId);
//     fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    
//   return removedContact;
// };

// const addContact = async (name, email, phone) => {
//   const allContacts = await listContacts();
//   const newContact = { id: nanoid(), name, email, phone };
//   allContacts.push(newContact);
//     fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    
//   return newContact;
// };


const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
  const allContacts = await listContacts();
    const contact = allContacts.find((item) => item.id === contactId);

    return contact || null;
    } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
  const allContacts = await listContacts();
  const removedContact = allContacts.find((contact) => contact.id === contactId);
    if (!removedContact) {
      
      return null;
  }

  const updatedContacts = allContacts.filter((contact) => contact.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    
    return removedContact;
    } catch (error) {
    console.log(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
  const allContacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  allContacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    
    return newContact;
    } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
