import React from "react";
import styles from "./sidebarList.module.css";
import { IoIosArrowRoundForward } from "../../../staticUtlis/ApplicationIcon";

export default function SideBarList(props) {
  const { listTitle } = props;
  return (
    <div>
      <div className={styles.list_title}>
        <h2> {listTitle} </h2>
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
          return (
            <div className={styles.list_card}>
              <div className={styles.list_title}>
                <h4> JSON-based Agents With Ollama & Lang Chain</h4>
              </div>
              <div className={styles.list_footer}>
                <span>12 nov 2023</span>
                <span>
                  <IoIosArrowRoundForward />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
