const NOTES_STORAGE_KEY = "mySavedNotes";

export const saveToLocalStorage = (updatedData) => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedData));
};

export const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(NOTES_STORAGE_KEY);
  return JSON.parse(savedData);
};
