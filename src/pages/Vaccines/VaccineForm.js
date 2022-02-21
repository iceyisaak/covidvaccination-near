import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const VaccineForm = () => {


  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, manufacturer, type, administration, dose } = e.target.elements;

    // console.log('e.target.element:', e.target.elements);


    try {

      fieldset.disable = true;
      // make an update call to the smart contract
      await window.contract.addVaccine({
        // pass the value that the user entered in the greeting field
        id: uuidv4(),
        name: name.value,
        manufacturer: manufacturer.value,
        type: type.value,
        administration: administration.value,
        dose: dose.value
      });
    } catch (e) {
      alert(
        'Something went wrong! ' +
        'Maybe you need to sign out and back in? ' +
        'Check your browser console for more info.'
      );
      throw e;
    } finally {
      // re-enable the form, whether the call succeeded or failed
      fieldset.disabled = false;
    }

    alert('New Vaccine Added');
    location.assign('/vaccines');

  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <fieldset id="fieldset">
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          <label htmlFor="vaccine" className='mb-1' >
            Vaccine Name
          </label>
          <input
            autoComplete="off"
            id="name"
            className='form-input mb-1'
            placeholder='e.g. Comirnaty'
          />
          <label htmlFor="manufacturer" className='mb-1' >
            Vaccine Manufacturer
          </label>
          <input
            autoComplete="off"
            id="manufacturer"
            className='form-input mb-1'
            placeholder='e.g. Pfizer-BionTech'
          />
          <label htmlFor="type" className='mb-1' >
            Vaccine Type
          </label>
          <input
            autoComplete="off"
            id="type"
            className='form-input mb-1'
            placeholder='e.g. RNA'
          />
          <label htmlFor="administration" className='mb-1' >
            Administration
          </label>
          <input
            autoComplete="off"
            id="administration"
            className='form-input mb-1'
            placeholder='e.g. Intramuscular injection'
          />
          <label htmlFor="dose" className='mb-1' >
            Dose
          </label>
          <input
            autoComplete="off"
            id="dose"
            className='form-input mb-1'
            placeholder='Dose'
          />
        </div>
        <button className='btn '>
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default VaccineForm;
