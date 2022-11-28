import React, { useEffect, useState } from 'react';

function NumberComponent() {
  const [number, setNumber] = useState('');
  const [hit, setHit] = useState(false);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setHit(true);
      setTimeout(() => setHit(false), 2000);
    } else {
      setHit(false);
    }
    setNumber(randomNumber);
    console.log('rodando');
  }

  useEffect(() => {
    const numberInterval = setInterval(generateNumber, 4000);

    return () => {
      clearInterval(numberInterval);
    }
  }, []);
  return (
    <div>
      <p>AND YOUR RANDOM NUMBER IS...</p>
      <p>{number ? number :'I am sorry, our generator needs 4 seconds..'}</p>
      {hit && <p>PATHETIC number</p>}
    </div>
  )
}

export default NumberComponent;
