// User Profile

export const userProfileInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "name",
    lable: "Name",
    validation: {
      required: "Name is required.",
    },
  },
  {
    id: 2,
    name: "businessWebsite",
    type: "text",
    placeholder: "Business Website",
    lable: "Business Website",
  },
  {
    id: 3,
    name: "bio",
    type: "textarea",
    placeholder: "Your Sort Bio",
    lable: "Bio",
  },
];

export const userSocialMediaInputs = [
  {
    id: 1,
    name: "facebook",
    type: "text",
    placeholder: "facebook",
    lable: "Name",
  },
  {
    id: 2,
    name: "twitter",
    type: "text",
    placeholder: "twitter",
    lable: "Business Website",
  },
  {
    id: 3,
    name: "instagram",
    type: "text",
    placeholder: "instagram",
    lable: "instagram",
  },
];

export const userNameInputs = [
  {
    id: 1,
    name: "userName",
    type: "text",
    placeholder: "username",
    lable: "user name",
    validation: {
      required: "Name is required.",
    },
  },
];

export const updatePasswordInputs = [
  {
    id: 1,
    name: "CurrentPassword",
    type: "text",
    placeholder: "Current Password",
    lable: "Current Password",
    validation: {
      required: "Current Password is required.",
    },
  },
  {
    id: 2,
    name: "newPassword",
    type: "text",
    placeholder: "New Password",
    lable: "New Password",
    validation: {
      required: "New Password is required.",
    },
  },
];

export const drawerMenuList = [
  {
    id: 1,
    name: "DashBoard",
    hrfLink: "/admins/dashboard",
  },
  {
    id: 2,
    name: "New Users",
    hrfLink: "/admins/new-user",
  },
  {
    id: 2,
    name: "All BLOGS",
    hrfLink: "/admins/blog/all-blogs",
  },
];

// Table data
