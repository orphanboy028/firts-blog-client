"use client";

import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contextApi/ThemeContextApi";
import styles from "./addblogTag.module.css";
import { upadteBlogTags } from "../../Actions/blogActions";
import { createTagsByUsers } from "../../Actions/tagAction";

import SubmitBtn from "../../staticUtlis/elements/buttons/SubmitBtn";
import { useParams } from "next/navigation";
export default function AddBlogTag() {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const [loadingBtn, setloadingBtn] = useState(false);

  const { handleSearch, suggestions, searchTerm, setSearchTerm } =
    useContext(ThemeContext);
  const [seletedTags, setseletedTags] = useState([]);

  const handleSelectTags = (tag) => {
    setseletedTags([...seletedTags, tag]);
    setSearchTerm("");
  };

  console.log(seletedTags);

  const handelUpdateBlogTag = async (e) => {
    e.preventDefault();
    try {
      const tagObj = {
        tagName: seletedTags,
      };

      const objTags = {
        tags: seletedTags,
      };
      const res = await upadteBlogTags(tagObj, id);
      console.log(res);
      if (res.data.status === "success") {
        await createTagsByUsers(objTags);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChipRemove = (index) => {
    const updatedChips = [...seletedTags];
    updatedChips.splice(index, 1);
    setseletedTags(updatedChips);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      e.preventDefault();
      setseletedTags([...seletedTags, searchTerm.trim()]);
      setSearchTerm("");
    }
  };

  return (
    <div>
      <div className={styles.tag_container}>
        <form onSubmit={handelUpdateBlogTag}>
          <div className={styles.inputContainer}>
            {seletedTags.map((chip, index) => (
              <div key={index} className={styles.chip}>
                {chip}
                <span
                  className={styles.removeIcon}
                  onClick={() => handleChipRemove(index)}
                >
                  &#10006;
                </span>
              </div>
            ))}
            <div className={styles.input_wrapper}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                onKeyDown={handleInputKeyDown}
                placeholder=""
                className={styles.tag_input}
              />
              {suggestions.map((tag, index) => (
                <div
                  key={index}
                  className={styles.tagchip}
                  onClick={() => handleSelectTags(tag.tagName)}
                >
                  {tag.tagName}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.submitBtn_wrapper}>
            <SubmitBtn
              btnText="Submit"
              disabled={false}
              btnSize="inline_btn"
              loading={loadingBtn}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
