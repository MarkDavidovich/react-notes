import style from "./CategoryPicker.module.css";

const ColorPicker = ({ onSelectCategory }) => {
  const categories = [
    { category: "personal", color: "#a0c4ff" },
    { category: "work", color: "#fdffb6" },
    { category: "study", color: "#ffc6ff" },
    { category: "other", color: "#caffbf" },
  ];

  return (
    <div className={style.menu}>
      {categories.map((c) => {
        return (
          <button
            type="button"
            key={c.color}
            className={style[c.category]}
            onClick={() => {
              onSelectCategory(c.color, c.category);
            }}
          >
            {c.category}
          </button>
        );
      })}
    </div>
  );
};

export default ColorPicker;
