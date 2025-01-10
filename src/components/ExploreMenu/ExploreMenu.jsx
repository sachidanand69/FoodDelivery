import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCatecory}) => {
  return (
    <div className='exlpore-menu' id='explore-menu'>
        <h1>Explpore our menu</h1>
         <p className='explore-menu-text'>We are going to talk about the top seven ways to write a menu that sells more by making you very hungry.</p>
        <div className="explore-menu-list">
           {menu_list.map((item,index)=>{
             return (
                <div onClick={()=>setCatecory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
             )
           })}
        </div>
        <hr/>
     </div>
  )
}
export default ExploreMenu
