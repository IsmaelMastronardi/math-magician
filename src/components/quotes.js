import { useState, useEffect } from 'react';

const ComputerQuotes = () => {
  const [quote, setQuote] = useState([]);
  const [loadingComment, setLoadingComment] = useState(true);
  const [errorFound, setErrorFound] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const category = 'computers';
      const result = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        method: 'GET',
        headers: { 'X-Api-Key': 'St8XblZ+dlsMEoh/ukYC8Q==JuLsC7tTNp0OCP2V' },
        contentType: 'application/json',
      });
      try {
        const json = await result.json();
        setQuote(json[0].quote);
        setLoadingComment(false);
      } catch (error) {
        setErrorFound(true);
        setLoadingComment(false);
      }
    };
    fetchQuote();
  }, []);
  if (loadingComment) {
    return (
      <p className="quotes">Loading Comment...</p>
    );
  }
  if (errorFound) {
    return (
      <p className="quotes">Sorry, an error has been found. Try again</p>
    );
  }
  return (
    <p className="quotes">{quote}</p>
  );
};

export default ComputerQuotes;
