import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <h2>Categories Page</h2>
      <p>{categories}</p>
    </div>
  );
};

export default CategoriesPage;
