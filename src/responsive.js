
import React from 'react';
import styles from './responsive.module.css';


export default function ResonsiveDatePicker() {



    return (
        <React.Fragment>

            <div className={styles.responsive_datepicker}>

                <div className={styles.item}>
                    <div className={styles.title}> روز</div>
                    <div className={styles.items}>
                        <div className={styles.border}></div>
                        <div className={styles.box}>1</div>
                        <div className={styles.box}>2</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}> ماه</div>
                    <div className={styles.items}>
                        <div className={styles.border}></div>
                        <div className={styles.box}>1</div>
                        <div className={styles.box}>2</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}> سال</div>
                    <div className={styles.items}>
                        <div className={styles.border}></div>
                        <div className={styles.box}>1</div>
                        <div className={styles.box}>2</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                        <div className={styles.box}>3</div>
                    </div>
                </div>


            </div>



        </React.Fragment>
    )


}