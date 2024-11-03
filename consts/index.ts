export const linkList = [
  { label: "главная", path: "/" },
  { label: "займы", path: "/loan" },
  { label: "скоринг", path: "" },
  { label: "контакты", path: "" },
  { label: "о компании", path: "" },
];

export const baseURL = "http://localhost:5000/api";

export function camelToSnake(obj) {
  const newObj = {};

  for (const key in obj) {
    // Convert camelCase to snake_case
    const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    newObj[snakeKey] = obj[key];
  }
  return newObj;
}
