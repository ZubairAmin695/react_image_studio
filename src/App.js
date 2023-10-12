import React from "react";
import { useState } from "react";
import "./App.css";
import img from "./Image.jpeg";
import { useDropzone } from "react-dropzone";
import { Button } from "bootstrap";

function App() {
  const [brightness, setBrightness] = useState({
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });

  const [contrast, setContrast] = useState({
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });

  const [saturation, setSaturation] = useState({
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });

  const [grayscale, setGreyscale] = useState({
    name: "Grayscale",
    property: "grayscale",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });

  const [sepia, setSepia] = useState({
    name: "Sepia",
    property: "sepia",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });

  const [hueRotate, setHueRotate] = useState({
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  });
  const [blur, setBlur] = useState({
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  });
  const [uploadedImage, setUploadedImage] = useState(null);


  const onDrop = (acceptedFiles) => {
    // Handle the dropped files here
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Accept only image files
  });

  return (
    <>
      <div className="wrapper">
        <div className="row">
          <div className=" col-8 image-wrapper">
            <div className="image mt-5 p-5">
             
            <div
              {...getRootProps()}
              style={{
                width: "100%",
                height: "300%",
                border: "2px dashed #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  width="auto"
                  height={500}
                  alt="Uploaded"
                  style={{
                    filter: `${brightness.property}(${brightness.value}${brightness.unit}) ${contrast.property}(${contrast.value}${contrast.unit}) ${saturation.property}(${saturation.value}${saturation.unit}) ${sepia.property}(${sepia.value}${sepia.unit}) ${hueRotate.property}(${hueRotate.value}${hueRotate.unit}) ${blur.property}(${blur.value}${blur.unit})`,
                  }}
                />
              ) : (

                <>

<p>Drop an image here or click here to upload file </p>
 
                </>
              


              )}
            </div>
             
              
            </div>
          </div>

          <div className="col-4 options mt-5 p-5">
            <div className="mode">
              <span>Brightness</span>
              <input
                type="range"
                max={brightness.range.max}
                min={brightness.range.min}
                onChange={(e) => {
                  setBrightness({ ...brightness, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span>Contrast</span>
              <input
                type="range"
                max={contrast.range.max}
                min={contrast.range.min}
                onChange={(e) => {
                  setContrast({ ...contrast, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span>Saturation</span>
              <input
                type="range"
                max={saturation.range.max}
                min={saturation.range.min}
                onChange={(e) => {
                  setSaturation({ ...saturation, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span>Sepia</span>
              <input
                type="range"
                max={sepia.range.max}
                min={sepia.range.min}
                onChange={(e) => {
                  setSepia({ ...sepia, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span>Hue Rotate</span>
              <input
                type="range"
                max={hueRotate.range.max}
                min={hueRotate.range.min}
                onChange={(e) => {
                  setHueRotate({ ...hueRotate, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span>Blur</span>
              <input
                type="range"
                max={blur.range.max}
                min={blur.range.min}
                onChange={(e) => {
                  setBlur({ ...blur, value: `${e.target.value}` });
                }}
              />
            </div>

            <div>
              <button className="btn btn-primary" onClick={handleResetImage}>
                Reset Image 

              </button>

              <button className="btn btn-primary" onClick={handleResetFilters}>
                Reset Filters 

              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;







 

 
 



  
