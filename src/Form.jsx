import React, { useState, useEffect } from 'react'

const Form = () => {

  const [textValue, setTextValue]           = useState('');
  const [textAreaValue, setTextAreaValue]   = useState('');
  const [selectValue, setSelectValue]       = useState('');

  useEffect(() => {
    // Récupère les données du localStorage lors du montage du composant
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData) {

        setTextValue    (storedData.textValue || '');
        setTextAreaValue(storedData.textareaValue || '');
        setSelectValue  (storedData.selectValue || '');
    }
}, []);

useEffect(() => {
    // Enregistre les données dans le localStorage à chaque changement
    localStorage.setItem('formData', JSON.stringify({ textValue, textAreaValue, selectValue }));
}, [textValue, textAreaValue, selectValue]);

  return (

    <div>

      <h2>Form</h2>

      <label>
          Text:
          <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
      </label>

      <br/>

      <label>
          Textarea:
          <textarea value={textAreaValue} onChange = { (e) => setTextAreaValue(e.target.value)} />
      </label>

      <br/>

      <label>
          Select:
          <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>
      </label>

  </div>

    );
};

export default Form;