import React from 'react';
import style from '../Quanlyloaiphong/Quanlyloaiphong.module.css'
import MenuLeft from '../../components/Menu';
import Content from './Content';
const QuanlyloaiphongPage = () => {
  
  return (
    <div className={style.container}> 
      <MenuLeft children={<Content/>}/>
    </div>
  );

}
export default QuanlyloaiphongPage;