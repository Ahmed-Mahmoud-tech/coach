import React, { useState, useEffect, useRef } from 'react';
import './DataList.scss';

const DataList = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [showlist, setShowlist] = useState(false);
  const [errorMassage, setErrorMassage] = useState();
  const inputEl = useRef();

  const check = (e) => {
    const error = () => {
      setErrorMassage(props.error);
      setShowlist(false);
      setTimeout(() => {
        setErrorMassage('');
      }, 2000);
    };

    if (props.pattern.test(e.target.value)) {
      setInputValue(e.target.value);
      setShowlist(true);
    } else {
      error();
    }
  };

  const changeInput = (e) => {
    check(e);
    let changedData = props.items.filter((items) =>
      items.includes(inputEl.current.value)
    );
    setData(changedData);
  };

  useEffect(() => {
    setData(props.items);
  }, []);

  useEffect(() => {
    if (props.getValue) {
      props.getValue(inputValue ? inputValue : 5);
    }
  }, [inputValue]);

  return (
    <div
      className="listcont"
      onBlur={() =>
        setTimeout(() => {
          setShowlist(false);
        }, 200)
      }
      style={{ width: props.inputWidth }}
    >
      <input
        type="text"
        ref={inputEl}
        value={inputValue}
        onChange={(e) => {
          changeInput(e);
        }}
        onFocus={() => setShowlist(true)}
      />
      <span className="error dataListError" style={{ width: props.inputWidth }}>
        {errorMassage}
      </span>
      <div
        className="options"
        style={{ width: props.inputWidth, display: showlist ? 'block' : 'none' }}
      >
        {data.map((item, index) => (
          <span
            className={index}
            key={index}
            onClick={(e) => {
              setInputValue(e.target.innerText);
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DataList;
