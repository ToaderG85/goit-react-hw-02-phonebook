import React from 'react';
import style from './ContactList.module.css'

export default function ContactList({contacts, onDelete}) {
  return (
    <div className={style.contact__list}>
      <h4 className={style.contacts__title}>Contacts</h4>
      <ul>
      {contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                onClick={() => onDelete(id)}
              >
                {' '}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
