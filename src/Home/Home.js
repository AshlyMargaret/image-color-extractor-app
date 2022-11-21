import React from 'react'
import './Home.css'
import  { useState ,useEffect,useCanvas} from "react";
import { ColorExtractor } from 'react-color-extractor';




function Home() {

    const [file, setFile] = useState();
    const [colors, setColors] = useState([]);
    const [shade, setShade] = useState();

    const handleChange = (e)=> {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
		// setFile(e.target.files)
    }
    
    const getColors = (colors )=>{
        setColors(colors)
        {console.log('colors: ', colors)}
    }

    const generateColor = (e)=>{
        console.log("clicked color",e);
        // setShade(shade)
        // console.log("clicked color",shade);
    }

   

  return (
    <div className="home">
          <h1>Image Color Extractor</h1>
            <div className="container">
				{/* <div className="preview"></div> */}
                <ColorExtractor  getColors={getColors} >
                 <img src={file} id="image-display" alt="preview" onClick={generateColor}/>
                </ColorExtractor>
				<input type="file" className='image-input' onChange={handleChange}/>
				{/* <label for="image-input" className='choose'>Choose Image</label> */}
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
                              height: 100,
                            }}/>
                            <div className="hexCodes">{colors[index]}</div>
                            </div>
                        )
                    })
                    
                }
            </div>
			<canvas id="cs">{shade}canvas</canvas>
            
    </div>
  )
}

export default Home