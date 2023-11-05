import fs from "fs/promises";
import { nanoid } from "nanoid";
import path, { resolve } from "path";

const contactsPath = resolve("db", "contacts.json");

const getContactIndex = (contacts, contactId) =>
  contacts.findIndex((contact) => contact.id === contactId);

const updateContacts = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export async function listContacts() {
  try {
    const contactsBuffer = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(contactsBuffer);
    return contacts;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export async function getContactById(contactId) {
  try {
    const contactsData = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(contactsData);
    const index = getContactIndex(contacts, contactId);
    return index === -1 ? null : contacts[index];
  } catch (error) {
    console.error(error.message);
  }
}

export async function removeContact(contactId) {
  try {
    const contactsData = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(contactsData);
    const index = getContactIndex(contacts, contactId);

    if (index === -1) return null;

    const [result] = contacts.splice(index, 1);
    updateContacts(contacts);
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export async function addContact(name, email, phone) {
  try {
    const contactsBuffer = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(contactsBuffer);
    const newContact = { id: nanoid(), name, email, phone };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
