import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../config/firebaseConfig";

export default function Upload() {
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [downloadUrl, setDonwloadUrl] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file);
    }

    // Tạo chức năng xem trước hình ảnh
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  const handleUpload = async () => {
    // Tạo tham chiếu đến thư mục được lưu trữ trên firebase
    const storageRef = ref(storage, `images/${fileName.name}`);

    // Tiến hành upload
    const uploadTask = uploadBytes(storageRef, fileName);

    // Dùng để lấy đường dẫn hình ảnh sau khi đã upload
    await getDownloadURL((await uploadTask).ref).then((url) => {
      setDonwloadUrl(url);
    });
  };

  return (
    <div>
      <img height={300} width={500} src={previewUrl} alt="" />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
