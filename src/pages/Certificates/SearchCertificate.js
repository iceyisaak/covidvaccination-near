import { Contract } from 'near-api-js';
import React, { useEffect, useState } from 'react';

const SearchCertificate = (props) => {

  const { certificateList, personList, vaccineList } = props;
  const [searchResult, setSearchResult] = useState({});
  const [searchTerm, setSearchTerm] = useState('');


  const onSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await window.contract.getCertificateByPersonID({
    //     id: id.value,
    //   });
    //   // HOW TO RETRIEVE RESULT FROM FUNCTION?
    //   setSearchResult(personCertificate);
    // } catch (e) {
    //   alert(
    //     'Something went wrong! ' +
    //     'Maybe you need to sign out and back in? ' +
    //     'Check your browser console for more info.'
    //   );
    //   throw e;
    // } finally {
    //   // fieldset.disabled = false;
    // }
    // alert('New Certificate Added');
    // location.assign('/certificates');

    setSearchTerm(e.target.value);
    console.log(searchResult);
  };


  const fetchCertificateByPersonID = async (searchTerm) => {
    const res = await contract.getCertificateByPersonID({ id: id.value });
    setSearchResult(res);
  };

  useEffect(() => {
    fetchCertificateByPersonID();
  }, [searchTerm]);




  return (
    <>
      <h1>Search Certificate</h1>
      <form onSubmit={onSubmit} className='searchBox'>
        <label htmlFor="person_id">Search Certicate by Person</label>
        <select name="person_id" id="id">
          {personList.map((p, i) => <option value={p.id} key={i}>{p.name}</option>)}
        </select>
        <button>Submit</button>
      </form>
      <div>

      </div>


    </>


  );
};

export default SearchCertificate;
