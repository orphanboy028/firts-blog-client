"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./createBlog.module.css";
import dynamic from "next/dynamic"; // If using Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import {
  CreateEditorModules,
  CreateEditorformats,
} from "../../staticUtlis/JsonData/textEditorDesign";

import { blogwithThumblin } from "../../Actions/blogActions";
import AddBlogTag from "./AddBlogTag";
import SubmitBtn from "../../staticUtlis/elements/buttons/SubmitBtn";
import useImageUpload from "../../custome-hooks/useImageUpload";
import { useParams, useRouter } from "next/navigation";

export default function CreateBlog() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const fileInputRef = useRef(null);
  const [editorValue, seteditorValue] = useState("");
  const [loadingBtn, setloadingBtn] = useState(false);
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    metaDescription: "",
    BlogThumblin: null,
  });

  const { originalFile, image, handleImageChange } = useImageUpload();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blogDetails.title);
    formData.append("metaDescription", blogDetails.metaDescription);
    formData.append("BlogThumblin", originalFile);
    formData.append("descreption", editorValue);
    // formData.append("posteBy", editorValue);

    try {
      const response = await blogwithThumblin(formData);
      console.log(response);
      if (response.data.status === "success") {
        router.push(`/user-dashboard//blog/update/${response.data.result._id}`);
      }
    } catch (error) {
      console.error("Error submitting blog:", error.message);
      // Handle network error
    }
  };

  const handelEditorOnChange = (e) => {
    seteditorValue(e);
  };

  const handleClick = () => {
    // Check if the ref has been assigned before attempting to access its properties
    if (fileInputRef.current) {
      // Trigger the click event on the file input
      fileInputRef.current.click();
    }
  };

  console.log(id);

  return (
    <div className={styles.main_container}>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.top_btnBar}>
            <SubmitBtn
              btnText="Publish"
              disabled={false}
              btnSize="inline_btn"
              loading={loadingBtn}
            />
          </div>

          <div className={styles.form_section}>
            <div className={styles.form_leftPart}>
              <div className={styles.blog_title}>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleInputChange}
                  className={styles.inputStyle}
                />
              </div>
              <div className={styles.blog_thumblin}>
                <div className={styles.card_body}>
                  <div className={styles.uploadImage_container}>
                    {image && (
                      <Image
                        src={image}
                        alt="image-preview"
                        width={200}
                        height={200}
                      />
                    )}

                    {!image && (
                      <div className={styles.dropBox} onClick={handleClick}>
                        {" "}
                        <p>Drop File</p>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    ccept="image/*"
                    name="BlogThumblin"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className={styles.imageInput}
                  />
                </div>
              </div>
              <div className={styles.blog_title}>
                <input
                  type="text"
                  placeholder="meta descreption"
                  name="metaDescription"
                  onChange={handleInputChange}
                  className={styles.inputStyle}
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  modules={CreateEditorModules}
                  formats={CreateEditorformats}
                  value={editorValue}
                  onChange={handelEditorOnChange}
                  className={styles.reactQuill_style}
                />
              </div>
            </div>
            {id && (
              <div className={styles.form_rightPart}>
                <div className={styles.addTag_box}>
                  <AddBlogTag />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
