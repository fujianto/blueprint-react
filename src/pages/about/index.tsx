import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logoWeb from '@images/logo.jpg';
import { useGetUserByNameQuery } from '../../services/user';
import { User } from '../../types';

export default function About() {
  const { data, error, isLoading } = useGetUserByNameQuery('fujix');
  
  const renderUserData = (data: User): ReactNode => {
    const render = [];
    if (error) {
      if ('status' in error) {
        return <p>ERROR: {error.status}</p>;
      }
    }

    if (data) {
      for (const key in data) {
        render.push(
          <p key={key}>
            {key} : {data[key as keyof User]}
          </p>
        );
      }
    }

    return isLoading ? <>Loading...</> : render;
  };

  return (
    <div className="container">
      <img src={logoWeb} />
      <Link to="/">Home</Link>
      <h1>About</h1>

      {renderUserData(data as User)}
    </div>
  );
}
