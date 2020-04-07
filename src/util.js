export const isBrowserEnv = () => {
  return typeof (window) !== "undefined";
};

export const inferEnv = () => {

  if (!isBrowserEnv()) {
    return "node";
  }

  const { host } = window.location;
  switch (true) {
    case /localhost/.test(host):
      return "development";
    default:
      return "production";
  }
}