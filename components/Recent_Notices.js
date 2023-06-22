import styles from "../styles/Recent_Notices.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import { IoMdNotifications } from "react-icons/io";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      apiDataMain: data,
    },
  };
};

const Recent_Notices = ({ apiDataMain }) => {
  return (
    <>
      <button className={styles.container_right_button}>Recent Updates</button>
      {apiDataMain.map((datas) => (
        <div key={datas.id}>
          <ListGroup>
            <ListGroup.Item>
              <a
                href="/notices"
                target="_blank"
                className={styles.link_text_recent}
              >
                <IoMdNotifications /> {datas.id}{" "}
              </a>
            </ListGroup.Item>
          </ListGroup>
        </div>
      ))}
    </>
  );
};

export default Recent_Notices;
