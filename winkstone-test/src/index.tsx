import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/normalize.scss';
import reportWebVitals from './reportWebVitals';
import ProductItem from "./component/ProductItem";
import classnames from "classnames/bind";
import style from "./index.module.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const cx = classnames.bind(style);
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
  {
    category: '개인신용',
    status: '모집예정',
    title: '물류채권 선장산 A_298차',
    profit: 10,
    period: 40,
    price: 1234,
    progress: 30,
    path: '/'
  },
  {
    category: '신용',
    status: '모집완료',
    title: '물류채권 선장산 A_1298차',
    profit: 100,
    period: 23,
    price: 12345678,
    progress: 100,
    path: '/'
  },
];
root.render(
  <React.StrictMode>
    <section className={cx("container")}>
      <div className={cx("contents")}>
        <h2 className={cx("h2-title")}>윙크스톤 투자 상품</h2>
        <ul className={cx("product-list")}>
          <ProductItem list={menuList} />
        </ul>
      </div>
    </section>
  </React.StrictMode>
);

reportWebVitals();
