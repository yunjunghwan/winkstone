import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductItem from "./component/ProductItem";
const menuList = [
  {
    category: '법인신용',
    status: '모집중',
    title: '물류채권 선장산 A_28차',
    profit: 40,
    period: 100,
    price: 123456789,
    progress: 70,
    path: '/'
  },
];

test('renders learn react link', () => {
  render(<ProductItem list={menuList} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
