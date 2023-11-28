import style from './ProductItem.module.scss';
import classnames from 'classnames/bind';
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress;
const cx = classnames.bind(style);

interface Props {
  list: List[];
}

interface List {
  category: string;
  status: string;
  title: string;
  profit: number;
  period: number;
  price: number;
  progress: number;
  path: string;
}

export default function ProductItem ({list}: Props) {
  return (
    <>
      {list.map((item) => (
      <li className={cx("product-item")}>
        <div className={cx("top-area")}>
          <span className={cx("category")}>{item.category}</span>
          <span className={cx("status")}>{item.status}</span>
        </div>
        <div className={cx("cont-area")}>
          <h3 className={cx("product-title")}>{item.title}</h3>
          <div className={cx("product-info")}>
            <dl className={cx("data-view")}>
              <dt className={cx("label")}>수익률</dt>
              <dd className={cx("value")}>{item.profit}%</dd>
            </dl>
            <dl className={cx("data-view")}>
              <dt className={cx("label")}>투자기간</dt>
              <dd className={cx("value")}>{item.period}일</dd>
            </dl>
          </div>
        </div>
        <div className={cx("bottom-area")}>
          <dl className={cx("data-view")}>
            <dt className={cx("label")}>모집금액</dt>
            <dd className={cx("value")}>{item.price}원</dd>
          </dl>
          <div className={cx("progress")}>
            <span className={cx("inner")} style={{width: item.progress + '%'}}></span>
            <span className={cx("value")}>{item.progress}%</span>
          </div>
          <a href={item.path} className={cx("button-line-primary")}>상세보기</a>
        </div>
      </li>
      ))}
    </>
  );
}
