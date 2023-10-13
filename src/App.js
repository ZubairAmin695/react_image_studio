import React from "react";
import { useState } from "react";
import "./App.css";
import img from "./Image.jpeg";
import { useDropzone } from "react-dropzone";
import { Button } from "bootstrap";

import { saveAs } from 'file-saver';

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
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleResetFilters = () => {
    setBlur({ ...blur, value: 0 });
    // setBrightness({...brightness,value:0});
    // setContrast({...contrast,value:0});
    setGreyscale({ ...grayscale, value: 0 });
    setSepia({ ...sepia, value: 0 });
  };

  const handleResetImage = () => {
    setUploadedImage("");
  };

  const handleDownload = () => {
    if (uploadedImage) {
      fetch(uploadedImage)
        .then((res) => res.blob())
        .then((blob) => {
          saveAs(blob, "edited_image.jpeg");
        });
    }
  };

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
                      filter: `${brightness.property}(${brightness.value}${brightness.unit})${grayscale.property}(${grayscale.value}${grayscale.unit}) ${contrast.property}(${contrast.value}${contrast.unit}) ${saturation.property}(${saturation.value}${saturation.unit}) ${sepia.property}(${sepia.value}${sepia.unit}) ${hueRotate.property}(${hueRotate.value}${hueRotate.unit}) ${blur.property}(${blur.value}${blur.unit})`,
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
            <div>
              <button
                className="btn btn-primary me-2"
                onClick={handleResetImage}
              >
                Reset Image
              </button>

              <button className="btn btn-primary" onClick={handleResetFilters}>
                Reset Filters
              </button>
            </div>
            <div className="mode mt-3 ">
              <h3>Editor Controls</h3>

              <span className="col-4 m">Brightness</span>
              <br></br>
              <input
                className="col-8"
                type="range"
                max={brightness.range.max}
                min={brightness.range.min}
                onChange={(e) => {
                  setBrightness({ ...brightness, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span className="col-4">Contrast</span> <br></br>
              <input
                className="col-8"
                type="range"
                max={contrast.range.max}
                min={contrast.range.min}
                onChange={(e) => {
                  setContrast({ ...contrast, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span className="col-4">Saturation</span> <br></br>
              <input
                className="col-8"
                type="range"
                max={saturation.range.max}
                min={saturation.range.min}
                onChange={(e) => {
                  setSaturation({ ...saturation, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span className="col-4">Grayscale</span> <br></br>
              <input
                className="col-8"
                type="range"
                max={grayscale.range.max}
                min={grayscale.range.min}
                onChange={(e) => {
                  setGreyscale({ ...grayscale, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span className="col-4">Sepia</span> <br></br>
              <input
                className="col-8"
                type="range"
                max={sepia.range.max}
                min={sepia.range.min}
                onChange={(e) => {
                  setSepia({ ...sepia, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span className="col-4">Hue Rotate</span> <br></br>
              <input
                className="col-8"
                type="range"
                max={hueRotate.range.max}
                min={hueRotate.range.min}
                onChange={(e) => {
                  setHueRotate({ ...hueRotate, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className="mode">
              <span className="col-4">Blur</span> <br></br>
              <input
                className="col-8"
                type="range"
                max={blur.range.max}
                min={blur.range.min}
                onChange={(e) => {
                  setBlur({ ...blur, value: `${e.target.value}` });
                }}
              />
            </div>

            <div className=" mt-3">
              <button className="btn btn-primary" onClick={handleDownload}>
                Download Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
