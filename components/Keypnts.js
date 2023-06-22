import React from "react";
import style from "../styles/Keypnts.module.css";
import { SiAtom } from "react-icons/si";
import { GiDeadWood } from "react-icons/gi";
import { RiEarthLine } from "react-icons/ri";
const Keypnts = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.heading}>
          <h2>Dynamic Academic Center</h2>
          <p>
            Thapathali Campus: Empowering Minds, Igniting Creativity, Shaping
            Leaders, and Paving the Way for Excellence in Education and
            Innovation.
          </p>
        </div>
        <div className={style.keypoints}>
          <div className={style.keycontainer}>
            <div className={style.img}>
              <SiAtom className={style.icon} />
            </div>
            <div className={style.content}>
              <h3>Empowerment</h3>
              <p>
                Thapathali Campus fosters personal growth, confidence, and
                self-belief, empowering students to reach their full potential,
                explore their passions, and make a positive impact in their
                communities and beyond.
              </p>
            </div>
          </div>
          <div className={style.keycontainer}>
            <div className={style.img}>
              <GiDeadWood className={style.icon} />
            </div>
            <div className={style.content}>
              <h3>Innovation</h3>
              <p>
                Thapathali Campus encourages a culture of creativity, curiosity,
                and forward thinking, nurturing innovative ideas and solutions
                for real-world challenges, fostering an entrepreneurial spirit
                and driving societal progress.
              </p>
            </div>
          </div>
          <div className={style.keycontainer}>
            <div className={style.img}>
              <RiEarthLine className={style.icon} />
            </div>
            <div className={style.content}>
              <h3>Collaboration</h3>
              <p>
                Thapathali Campus emphasizes the value of collaboration,
                creating a supportive and inclusive environment where students,
                faculty, and staff work together to achieve shared goals,
                fostering teamwork, communication, and the exchange of diverse
                perspectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypnts;
