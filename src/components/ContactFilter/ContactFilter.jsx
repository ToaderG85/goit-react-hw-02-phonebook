import React from 'react';
import { nanoid } from 'nanoid';
import style from './ContactFilter.module.css';

export default function ContactFilter({ value, onChange }) {
    const filterID = nanoid();
    return (
      <div className={style.contact__filter}>
        <label htmlFor={filterID}>
          Find contact (name)
          <input
            type="text"
            value={value}
            name="filter"
            onChange={onChange}
            id={filterID}
          />
        </label>
      </div>
    );
}
