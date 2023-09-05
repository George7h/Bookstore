import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <p className="construction">{categories}</p>
    </div>
  );
};

export default CategoriesPage;
