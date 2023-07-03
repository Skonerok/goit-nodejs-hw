const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

// fs.readFile(filename, [options]) - читання файлу
// fs.writeFile(filename, data, [options]) - запис файлу

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
    const contact = allContacts.find((item) => item.id === contactId);
    
  return contact || null;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const removedContact = allContacts.find((contact) => contact.id === contactId);
    if (!removedContact) {
      
    return null;
  }

  const updatedContacts = allContacts.filter((contact) => contact.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    
  return removedContact;
};

const addContact = async (name, email, phone) => {
  const allContacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  allContacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
