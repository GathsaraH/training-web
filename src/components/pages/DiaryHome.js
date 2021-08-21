import React from 'react';
import classes from './DiaryHome.module.css'
import AddNewDiary from "../DiaryCard/AddNewDiary";

function DiaryHome(props) {
    return (
        <div className={classes.main}>
            <AddNewDiary/>
        </div>
    );
}

export default DiaryHome;