"use client";

import React, { useContext } from "react";
import UserDashBoardLayout from "../DashBoardlayout";
import {
  userNameInputs,
  updatePasswordInputs,
} from "../../../../staticUtlis/JsonData/formfileds";
import { UserContext } from "../../../../contextApi/userContextApi";
import {
  upadteUserNameApi,
  upadteUserPasswordApi,
} from "../../../../Actions/userAction";
import FormElement from "../../../../components/forms/FormElement";

export default function SettingsPage() {
  const { userDetail, setIsLoading } = useContext(UserContext);

  return (
    <UserDashBoardLayout>
      <FormElement
        formInputs={userNameInputs}
        inputApiDetails={userDetail}
        handelFormSubmitApi={upadteUserNameApi}
        setIsLoading={setIsLoading}
      />

      <FormElement
        formInputs={updatePasswordInputs}
        inputApiDetails={userDetail}
        handelFormSubmitApi={upadteUserPasswordApi}
        setIsLoading={setIsLoading}
      />
    </UserDashBoardLayout>
  );
}
