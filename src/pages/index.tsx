import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from 'react-query';

type ReviewType = {
  id: string;
  author: string;
  text: string;
};

const useQueryReviews = () => {
  const getReviews = async () => {
    const { data } = await axios.get<ReviewType[]>('/api/reviews');
    return data;
  };

  return useQuery<ReviewType[], Error>('reviews', getReviews, {
    staleTime: 1000,
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
    retry: false,
  });
};

const Home: NextPage = () => {
  const { data, isFetching, isError } = useQueryReviews();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {isFetching && <p className='text-blue-700'>loading...</p>}
      {isError && <p className='text-red-700'>error...</p>}
      {data && !isError && (
        <ul className='max-w-sm'>
          {data.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}

      <nav className='m-4'>
        <Link href='/about'>
          <a className='text-blue-700 underline'>About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
