export const genericPagePushHandler = (router, baseRoute, passValue) => {
  router.push(`${baseRoute}/${passValue}`);
};
