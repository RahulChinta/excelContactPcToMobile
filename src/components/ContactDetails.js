import { useRef, useState } from "react";
import Button from "./UI/Button";

const ContactDetails = (props) => {
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [error, setError] = useState();
  const searchIndexRef = useRef();
  const dataLength = props.data[0]?.data?.length;
  const columnList = props.data.map((item, index) => {
    let content = <h1 key={index}>{item.data[currentNumberIndex]}</h1>;
    if (item.isMobileNumber) {
      content = (
        <div key={index}>
          <h1>{item.data[currentNumberIndex]}</h1>
          <a href={`tel:${item.data[currentNumberIndex]}`}>Call Now</a>
        </div>
      );
    }
    return content;
  });

  const setSearchIndex = () => {
    const userSearchIndex = +searchIndexRef.current.value;
    if (userSearchIndex < 0 || userSearchIndex > dataLength - 1) {
      setError(`Please enter the number between 0 to ${dataLength - 1}`);
    } else {
      setError(null);
      setCurrentNumberIndex(userSearchIndex);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="searchIndex">Search By Index Number</label>
        <input id="searchIndex" ref={searchIndexRef} />
        {error && <p className="error-text">{error}</p>}
        <Button
          onButtonClick={() => setSearchIndex()}
          type="button"
          value="Search"
        />
      </div>
      {columnList}

      {currentNumberIndex !== 0 && (
        <Button
          onButtonClick={() => setCurrentNumberIndex((prev) => prev - 1)}
          type="button"
          value="Previous"
        />
      )}
      {currentNumberIndex !== dataLength - 1 && (
        <Button
          onButtonClick={() => setCurrentNumberIndex((prev) => prev + 1)}
          type="button"
          value="Next"
        />
      )}
    </div>
  );
};

export default ContactDetails;
