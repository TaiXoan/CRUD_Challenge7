import axios from 'axios';
import React, { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from 'cloudinary-core';

function Index() {
  const [imageSelected, setImageselected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "jpuaq3o7");

    axios
      .post("https://api.cloudinary.com/v1_1/dfswkp2bn/image/upload", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageselected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      <Image cloudName="jpuaq3o7" publicId="https://res-console.cloudinary.com/dfswkp2bn/thumbnails/v1/image/upload/v1692321284/Y2tqZmRzZm9kb2ZpZG9mamRvcw==/preview"  />
    </div>
  );
}

export default Index;