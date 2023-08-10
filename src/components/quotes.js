import { useState, useEffect } from 'react';

const ComputerQuotes = () => {
  const [quote, setQuote] = useState([]);
  const [loadingComment, setLoadingComment] = useState(true);
  const [errorFound, setErrorFound] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const category = 'hapiness';
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
      <p>Loading Comment...</p>
    );
  }
  if (errorFound) {
    return (
      <p>Sorry, an error has been found. Try again</p>
    );
  }
  return (
    <p>{quote}</p>
  );
};

export default ComputerQuotes;
