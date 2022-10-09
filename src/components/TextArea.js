import React, {useState} from 'react'

function TextArea(props) {
   const handleUpClick = () => {
    if(text.trim().length>0)
      {
        console.log("UPPERCASE button is clicked");
        let upper = text.toUpperCase();
        setText(upper);
        if(upper === text)
        {props.showAlert('Attention! Your text is already in upper case')}
        else
        props.showAlert('Your text is coverted into uppercase','Success!');
      }
    }
    const handleLowClick = () => {
      if(text.trim().length>0)
      {
        console.log("LOWERCASE button is clicked");
        let lower = text.toLowerCase();
        setText(lower);
        if(lower === text)
        {props.showAlert('Attention! Yourtext is already in lower case')}
        else
        props.showAlert(' Your text is coverted into lower case','Success!');
      }
    }
    
    const clearText = () => {
      console.log("text-cleared");
      let newText = "";
      setText(newText);
      if(newText === text)
      {props.showAlert('Attention! Yourtext is already cleared')}
      else
      props.showAlert('Your text is cleared','Success!');
    }
      
    const handleOnChange = (e) => {
      console.log("on-change");
      setText(e.target.value);
    }
    const handleCopy = () =>{
      if(text.trim().length>0)
      {
        const text = document.getElementById('myBox');
        console.log("text copied");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Your text is copied','Success!');
      }
    }
    const handleSpaces = () =>{
        let spaces = text.split(/[ ]+/)
        setText(spaces.join(' '))
        if(spaces.join(' ') === text)
        {
          props.showAlert('Extra spaces is already removed')
        }
        else
        props.showAlert('Extra spaces is removed','Success!');
    };
   
    const[text,setText] = useState("");

  return (
    <div>
            <div className='container' style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
                <h1 className='my-4'> { props.heading } </h1>
                <div div className = "mb-3" >
                <textarea className = "form-control" id = "myBox" rows = "8" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode === 'light' ? 'white' : '#14456F' , color : props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className='btn btn-primary'  onClick = {handleUpClick}>UPPERCASE</button>
                <button className='btn btn-danger mx-2 my-1' onClick = {handleLowClick}>LOWERCASE</button>
                <button className='btn btn-success' onClick = {clearText}>CLEAR</button>
                <button className='btn btn-secondary mx-2 my-1' onClick = {handleCopy}>COPY</button>
                <button className='btn btn-warning' onClick = {handleSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3' style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
              <h1>Analytics of the text -</h1>
              <p>Your text has <b>{text.length}</b> letters and <b>{text.length===0?0:text.trim().split(" ").length}</b> words</p>
            </div>
            <div className='container my-3' style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
              <h2>PREVIEW</h2>
              <p>{text.trim().length>0?text:'Enter something to preview'}</p>
            </div>
    </div>
  )
}

export default TextArea