import React, { useEffect, useRef, useState } from "react";
import ImageSettingsInput from "../components/ImageSettingsInput";

const EditImage = () => {
    const [imageSettings, setImageSettings] = useState({
        blur: "0",
        opacity: "100",
        grayscale: "0",
        invert: "0",
        saturate: "100",
        brightness: "100"
    });
    const [imageURL, setImageURL] = useState(null);
    const [isEditable, setIsEditable] = useState(true);
    const canvasRef = useRef(null);

    useEffect(() => {
        drawEditedImage(imageURL);
        // eslint-disable-next-line
    }, [imageURL, imageSettings]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileType = file.type.split('/')[1].toString().toLowerCase();
        const fileSize = (file.size / 1000).toFixed(0);
        console.log(fileType, fileSize);

        if((fileType === 'png' || fileType === 'jpeg' || fileType === 'jpg') && fileSize <= 2000){
            const imageUrl = URL.createObjectURL(file);
            setIsEditable(true);
            setImageURL(imageUrl);
            drawEditedImage(imageUrl);
        }else{
            setIsEditable(false);
        }
    };

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL('image/png'); // Скачивание в формате PNG
        downloadLink.download = 'edited_image.png'; // Имя файла для скачивания
        downloadLink.click();
    };

    const drawEditedImage = (imageUrl) => {
        const canvas = canvasRef.current;

        if(canvas){
            const ctx = canvas.getContext("2d");
            const image = new Image();
    
            image.crossOrigin = "anonymous"; // Установка crossOrigin, если изображение загружается с другого домена
    
            image.onload = function () {
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.filter = `
                    blur(${imageSettings.blur}px) 
                    opacity(${imageSettings.opacity}%) 
                    grayscale(${imageSettings.grayscale}%)
                    invert(${imageSettings.invert}%)
                    saturate(${imageSettings.saturate}%)
                    brightness(${imageSettings.brightness}%)
                `;
                ctx.drawImage(image, 0, 0);
            };
    
            image.src = imageUrl;
        }
    };

    const resetFilters = () =>{
        setImageSettings({
            blur: "0",
            opacity: "100",
            grayscale: "0",
            invert: "0",
            saturate: "100",
            brightness: "100"
        })
    }

    return (
        <div className="edit__image">
            <div className="edit__image-upload">
                <form class="file-upload-form">
                    <label htmlFor="file" class="file-upload-label">
                        <div class="file-upload-design">
                            <svg viewBox="0 0 640 512" height="1em">
                                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                            </svg>
                            <span class="browse-button">Browse file</span>
                            <p>*png, *jpeg, *jpg (2mB)</p>
                        </div>
                        <input id="file" type="file" onChange={handleFileChange}/>
                    </label>
                </form>
            </div>
            {imageURL
            ?
            <div className="edit__image-nav">
                <ImageSettingsInput title="blur" value={imageSettings.blur} setImageSettings={setImageSettings} imageSettings={imageSettings} />
                <ImageSettingsInput title="opacity" value={imageSettings.opacity} setImageSettings={setImageSettings} imageSettings={imageSettings} />
                <ImageSettingsInput title="grayscale" value={imageSettings.grayscale} setImageSettings={setImageSettings} imageSettings={imageSettings} />
                <ImageSettingsInput title="invert" value={imageSettings.invert} setImageSettings={setImageSettings} imageSettings={imageSettings} />
                <ImageSettingsInput title="saturate" value={imageSettings.saturate} setImageSettings={setImageSettings} imageSettings={imageSettings} min="0" max="500"/>
                <ImageSettingsInput title="brightness" value={imageSettings.brightness} setImageSettings={setImageSettings} imageSettings={imageSettings} min="0" max="500"/>
            </div>
            :
            null
            }
            {isEditable
            ?
            <div className="edit__image-result">
                    {imageURL && (
                        <div className="edit__image-result-nav">
                            <button onClick={resetFilters}>Reset all</button>   
                            <button onClick={handleDownload}>Download</button>
                        </div>
                    )}            
                <canvas ref={canvasRef} />
            </div>
            :
            <p style={{textAlign: 'center', fontSize: '20px', paddingTop: '20px'}}>Wrong file type or file size greater than 2 MB</p>
            }
        </div>
    );
};

export default EditImage;
