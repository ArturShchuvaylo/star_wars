import React from "react";
import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
    return (
        <>
            <ul className={styles.list__container}>
                {
                    people.map(elem =>
                        <li
                            className={styles.list__item}
                            key={elem.id}>
                            <a href="#">
                                <img className={styles.person__photo} src={elem.img} />
                                <p> {elem.name}</p>
                            </a>



                        </li>)
                }
            </ul>
        </>
    );
}

export default PeopleList;