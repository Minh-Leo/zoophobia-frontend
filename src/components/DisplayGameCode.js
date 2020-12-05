import React, { useState, useRef } from 'react';

const DisplayGameCode = ({ gameID }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const textInputRef = useRef(null);

  const copyToClipboard = (e) => {
    textInputRef.current.select();
    document.execCommand('copy');
    setCopySuccess(true);
  };

  return (
    <div className='row my-5 text-center'>
      <div className='col-md-12'>
        <h4>Send this code to your friends to join</h4>
        <div className='input-group mb-3'>
          <input
            type='text'
            ref={textInputRef}
            value={gameID}
            readOnly
            className='form-control'
          />
          <div className='input-group-append'>
            <button
              className='btn btn-warning'
              type='button'
              onClick={copyToClipboard}
            >
              Copy Game Code
            </button>
          </div>
        </div>
        {copySuccess ? (
          <div className='alert alert-success'>
            Sucessfully Copied Game Code
          </div>
        ) : (
          <div className='alert alert-info'>Game Code is ready</div>
        )}
      </div>
    </div>
  );
};

export default DisplayGameCode;
