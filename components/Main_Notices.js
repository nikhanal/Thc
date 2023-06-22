import styles from '../styles/Main_Notices.module.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { FiClock } from 'react-icons/fi';
import { FaDownload } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Recent_Notices from './Recent_Notices';

export const getStaticProps = async () => {
    const res = await fetch('http://10.10.100.216:8000/api/notice/notices/');
    const data = await res.json();

    return {
        props: {
            apiDataMain: data
        }
    }
}

const Single_Notice = (props) => {
  // Parse the date string into a Date object
  const dateObject = new Date(props.created);
  // Format the date to a string like "2021-01-01" "year-month-day"
  const formattedDate = dateObject.toISOString().split('T')[0];


  return (
      <Card className={styles.cards_container}>
          <div className={styles.cards}>
              <div className={styles.cards_left}>
                  <Card.Body>
                      <a href='/notices' target='_blank' className={styles.link_text}>
                          {props.title}
                      </a>
                      <div className={styles.infos}>
                          <FiClock className={styles.icons} /> <p className={styles.sub_texts}>{formattedDate}</p>
                      </div>
                  </Card.Body>
              </div>
              <div className={styles.cards_right}>
                  <a href={props.download_file} target='_blank'>
                      {' '}
                      <button className={styles.cards_right_button}>Download</button>{' '}
                  </a>
              </div>
              <div className={styles.cards_right_hides}>
                  <FaDownload />
              </div>
          </div>
      </Card>
  )
}

const Main_Notices = ({ apiDataMain }) => {
  const [date, setDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await fetch('/api/date');
        const data = await response.json();
        setDate(data.date);
      } catch (error) {
        console.error('Error fetching date:', error);
      }
    };
    fetchDate();
  }, []);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = apiDataMain.slice(indexOfFirstItem, indexOfLastItem);

  const renderButtons = () => {
    const pageNumbers = Math.ceil(apiDataMain.length / itemsPerPage);
    const visibleButtons = 5; // Number of visible buttons (excluding "..." and Last Page Number)
  
    if (pageNumbers <= visibleButtons) {
      // If the total number of pages is less than or equal to the number of visible buttons,
      // render all the buttons from 1 to the last page number
      return (
        <div className={styles.pagination}>
          {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`${styles.pageButton} ${currentPage === pageNumber ? styles.active : ''}`}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      );
    } else {
      // If the total number of pages is greater than the number of visible buttons,
      // render buttons with a structure like "1, 2, 3, ..., Last Page Number"
      const firstPage = 1;
      const lastPage = pageNumbers;
      const middlePages = Math.min(visibleButtons - 2, pageNumbers - 2); // Number of buttons between first and last page
  
      const buttons = [];
  
      // Render first page button
      buttons.push(
        <button
          key={firstPage}
          className={`${styles.pageButton} ${currentPage === firstPage ? styles.active : ''}`}
          onClick={() => handleClick(firstPage)}
        >
          {firstPage}
        </button>
      );
  
      // Render middle buttons with "..." in between
      const start = Math.max(2, currentPage - Math.floor(middlePages / 2));
      const end = Math.min(start + middlePages - 1, lastPage - 1);
  
      if (start > 2) {
        buttons.push(
          <span key="ellipsisStart" className={styles.ellipsis}>
            ...
          </span>
        );
      }
  
      for (let i = start; i <= end; i++) {
        buttons.push(
          <button
            key={i}
            className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        );
      }
  
      if (end < lastPage - 1) {
        buttons.push(
          <span key="ellipsisEnd" className={styles.ellipsis}>
            ...
          </span>
        );
      }
  
      // Render last page button
      buttons.push(
        <button
          key={lastPage}
          className={`${styles.pageButton} ${currentPage === lastPage ? styles.active : ''}`}
          onClick={() => handleClick(lastPage)}
        >
          {lastPage}
        </button>
      );
  
      return <div className={styles.pagination}>{buttons}</div>;
    }
  };
  

  return (
    <>
      <div className={`${styles.container} container`}>
        <div className={styles.container_left}>
          {currentItems.map((datas) => (
            <div key={datas.id}>
              <Single_Notice title={datas.title} created={datas.created} download_file={datas.download_file} />
            </div>
          ))}
          {renderButtons()}
        </div>
        <div className={styles.container_right}>
          <Recent_Notices apiDataMain={currentItems} />
        </div>
      </div>
    </>
  );
};

export default Main_Notices;
