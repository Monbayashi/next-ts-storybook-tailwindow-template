import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { EditButton } from '@/components/parts/button/edit-button';

type ServerSideProps = {
  book: {
    title: string;
    imageUrl: string;
    description: string;
  };
};

const Home: NextPage<ServerSideProps> = ({ book }) => {
  const [reviews, setReviews] = useState<any[] | null>(null);

  const handleGetReviews = () => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then(setReviews);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>{book.imageUrl}</p>
      <EditButton onClick={handleGetReviews} />

      {reviews && (
        <ul className='max-w-sm'>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  return {
    props: {
      book: {
        title: 'Loard of the Rings',
        imageUrl: '/book-cover.jpg',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien',
      },
    },
  };
}
