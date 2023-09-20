import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Screen from './components/Screen';
import Button from './components/Button';
import Loader from './components/Loader';
import getJokeApi from './Apis/getJokeAPi';

const App = () => {
  const [jokeData, setJokeData] = useState(null);
  const [isLoader, setIsLoader] = useState(true);
  const [error, setError] = useState('');

  const nextJokeHandler = async () => {
    const data = await getJokeApi();
    if (data.ok) {
      setIsLoader(false);
      setJokeData(data.data);
    } else {
      setError(data.err.message);
    }
  };

  useEffect(() => {
    nextJokeHandler();
  }, []);

  return (
    <>
      <Card>
        <Header />
        {isLoader && <Loader />}
        {error && <p>{error}</p>}
        {jokeData && <Screen jokeData={jokeData} />}
        <Button nextJokeHandler={nextJokeHandler} />
      </Card>
    </>
  );
};

export default App;
