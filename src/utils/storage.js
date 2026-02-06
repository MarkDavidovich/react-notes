const NOTES_STORAGE_KEY = "mySavedNotes";

export const saveToLocalStorage = (updatedData) => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedData));
  console.log("Data saved!");
};

export const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(NOTES_STORAGE_KEY);
  console.log("Data loaded!");
  return JSON.parse(savedData);
};
