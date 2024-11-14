import Label from "./label";
import "./listItem.css"

const ListItem = function (props) {
  return (

    <div className='list-item'>
      <hr />
      <div className='list-title'>
        <h4>{props.title}</h4>
      </div>
      
      <div className='list-desc'>
      {props.descr}
      </div>
      <div className='list-label'>
        <Label />
        <Label />
        <Label />
      </div>
  
      <hr />
    </div>

  )
}
export default ListItem