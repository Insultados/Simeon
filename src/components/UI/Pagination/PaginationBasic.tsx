/* eslint-disable eqeqeq */
import Pagination from 'react-bootstrap/Pagination';
import classes from './PaginationBasic.module.css'

function PaginationBasic({ numActive, pageCount }: any) {

  let urlSearch: string = window.location.search.replace(/[^\d]/g, '');
  urlSearch = urlSearch === '' ? '1' : urlSearch;

  let paginationItemList = []
  paginationItemList.push(
    urlSearch != '1'
      ? <Pagination.Prev onClick={() => { window.location.href = `/?news-page=${(Number(urlSearch) - 1)}` }} />
      : <Pagination.Prev onClick={() => { window.location.href = `/?news-page=${1}` }} />
  )
  for (let i = 1; i <= pageCount; i++) {
    if (i === numActive) {
      paginationItemList.push(
        <Pagination.Item
          active
          key={i}
          onClick={() => { window.location.href = `/?news-page=${i}` }}
          id={`pagination-${i}`}
          className={"active_item"}
        >
          {i}
        </Pagination.Item>)
    }
    else {
      paginationItemList.push(
        <Pagination.Item
          key={i}
          onClick={() => { window.location.href = `/?news-page=${i}` }}
          id={`pagination-${i}`}
        >
          {i}
        </Pagination.Item>)

    }
  }

  paginationItemList.push(
    urlSearch != String(pageCount)
      ? <Pagination.Next onClick={() => { window.location.href = `/?news-page=${(Number(urlSearch) + 1)}` }} />
      : <Pagination.Next onClick={() => { window.location.href = `/?news-page=${pageCount}` }} />
  )

  return (
    <Pagination className={classes.pagination}>
      {paginationItemList.map((e: any | any[], index: number) => (
        <div key={index}>{e}</div>
      ))}
    </Pagination>
  );
}

export default PaginationBasic;