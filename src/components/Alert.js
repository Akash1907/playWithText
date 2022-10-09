import React from 'react'

function Alert(props) {
  return (
    <div  style = {{height:'50px' , transition:'all 0.3s'}}>
      {props.alert && <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong> {props.alert.message}
        </div>
    </div>}
    </div>
  )
}

export default Alert;