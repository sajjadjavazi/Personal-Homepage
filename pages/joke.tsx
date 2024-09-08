import { useState } from 'react';
import { useQuery } from 'react-query';
import Head from 'next/head';

// Define the joke types
interface SingleJoke {
  type: 'single';
  joke: string;
}

interface TwoPartJoke {
  type: 'twopart';
  setup: string;
  delivery: string;
}

type Joke = SingleJoke | TwoPartJoke;

interface JokesApiResponse {
  jokes: Joke[];
}

export default function Jokes() {
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);

  // Fetch jokes using React Query with proper typing
  const { data, isLoading, error, refetch } = useQuery<JokesApiResponse, Error>(
    ['jokes'],
    async () => {
      const res = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=sexist&amount=10');
      const data: JokesApiResponse = await res.json();
      return data; // Return the entire JokesApiResponse object
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  // Generate new joke on button click
  const generateNewJoke = () => {
    if (data?.jokes && data.jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.jokes.length);
      setCurrentJoke(data.jokes[randomIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <Head>
        <title>Joke Generator</title>
      </Head>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Random Joke Generator</h1>

        {isLoading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error.message}</p>}

        {currentJoke ? (
          <div className="text-center">
            {currentJoke.type === 'single' ? (
              <p className="text-lg">{currentJoke.joke}</p>
            ) : (
              <>
                <p className="text-lg font-semibold">{currentJoke.setup}</p>
                <p className="text-lg mt-2">{currentJoke.delivery}</p>
              </>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-600">Click the button to generate a joke!</p>
        )}

        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={generateNewJoke}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Generate New Joke
          </button>
        </div>
      </div>
    </div>
  );
}
