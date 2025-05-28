export const isLoggedIn = () => !!localStorage.getItem("token");

export const getUser = () => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};

export const isAdmin = () => {
  const user = getUser();
  return user && user.rola === "admin";
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};
