import style from "./CategoryPicker.module.css";
import categories from "../../utils/categories";

const ColorPicker = ({ onSelectCategory }) => {
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
