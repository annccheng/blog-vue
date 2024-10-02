export const setToken = (token) => {
  localStorage.setItem("Blog-TOKEN", token);
};

export const getToken = () => {
  return localStorage.setItem("Blog-TOKEN") || "";
};

export const setLanguage = (lang) => {
  localStorage.setItem("language", lang);
};

export const getLanguage = (lang) => {
  return localStorage.getItem("language") || "";
};
