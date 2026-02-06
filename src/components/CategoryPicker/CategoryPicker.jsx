import style from "./CategoryPicker.module.css";

const ColorPicker = ({ onSelectCategory }) => {
  const categories = [
    { category: "personal", color: "#cddafd" },
    { category: "work", color: "#eae4e9" },
    { category: "study", color: "#fad2e1" },
    { category: "other", color: "#fff1e6" },
  ];

  return (
    <div className={style.menu}>
      {categories.map((c) => {
        return (
          <button
            type="button"
            key={c.color}
            style={{ backgroundColor: c.color }}
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
