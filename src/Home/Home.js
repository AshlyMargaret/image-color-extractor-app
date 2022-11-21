import React from 'react'
import './Home.css'
import  { useState } from "react";
import { ColorExtractor } from 'react-color-extractor';
// import {CopyToClipboard} from 'react-copy-to-clipboard';





function Home() {

    const [file, setFile] = useState("https://media.istockphoto.com/id/1204482432/photo/close-up-cheerful-young-woman-laughing-with-sunglasses-against-colourful-background.jpg?s=612x612&w=0&k=20&c=37Qe4X6bPEqkLZsdF809HNsd9OxRlIJdYO1rlSwHtd0=");
    const [colors, setColors] = useState([]);
  

   

    const handleChange = (e)=> {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
		
    }
    
    const getColors = (colors )=>{
        setColors(colors)
        {console.log('colors: ', colors)}
    }

    function copyToClipboard(c) {
      
        navigator.clipboard.writeText(c);
        alert("Copied to clipboard.");
      };


   

  return (
    <div className="home">
          <h2>Image <span className="span1">C</span><span className="span2">o</span>
          <span className="span3">l</span><span className="span4">o</span>
          <span className="span5">r</span> Extractor</h2>
            <div className="container">
				{/* <div className="preview"></div> */}
                <ColorExtractor  getColors={getColors} >
                 <img src={file} id="image-display" alt="preview"/>
                </ColorExtractor>
				<input type="file" className='image-input' onChange={handleChange}/>
			</div>
            <div className="showColor">
                {
                    colors.map((color,index)=>{
                        return(
                            <div className="colorPallete">
                            <div className='pallete'
                            key={index}
                            style={{
                              backgroundColor: color,
                              width: 100,
                              height: 50,
                            }}>
                                <div className="copy" onClick={()=>{
                                copyToClipboard(colors[index])
                            }
                            }>Copy</div>
                            </div>
                            <div className="hexCodes" style={{color:color}}>{colors[index]}</div>
                            </div>
                           
                        )
                    })
                    
                }
            </div>
			<canvas id="cs"></canvas>
            
    </div>
  )
}

export default Home