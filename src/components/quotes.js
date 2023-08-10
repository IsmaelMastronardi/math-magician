import { useState, useEffect } from 'react';

const ComputerQuotes = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      const category = 'happiness';
      const result = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        method: 'GET',
        headers: { 'X-Api-Key': 'St8XblZ+dlsMEoh/ukYC8Q==JuLsC7tTNp0OCP2V' },
        contentType: 'application/json',
      });
      const json = await result.json();
      console.log(json);
      setQuote(json[0].quote);
    };
    fetchQuote();
  }, []);

  return (
    <p>{quote}</p>
  );
};

export default ComputerQuotes;
