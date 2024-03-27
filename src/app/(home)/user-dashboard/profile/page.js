"use client";

import React, { useContext } from "react";
import UserDashBoardLayout from "../DashBoardlayout";

import {
  userProfileInputs,
  userSocialMediaInputs,
} from "../../../../staticUtlis/JsonData/formfileds";
import { UserContext } from "../../../../contextApi/userContextApi";
import { upadteUserApi } from "../../../../Actions/userAction";
import FormElement from "../../../../components/forms/FormElement";
export default function ProfilePage() {
  const { userDetail, setIsLoading } = useContext(UserContext);
  console.log(userDetail);

  return (
    <UserDashBoardLayout>
      <FormElement
        formInputs={userProfileInputs}
        inputApiDetails={userDetail}
        handelFormSubmitApi={upadteUserApi}
        setIsLoading={setIsLoading}
      />

      <FormElement
        formInputs={userSocialMediaInputs}
        inputApiDetails={userDetail}
        handelFormSubmitApi={upadteUserApi}
        setIsLoading={setIsLoading}
      />
    </UserDashBoardLayout>
  );
}
