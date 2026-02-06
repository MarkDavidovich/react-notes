import style from "./CategoryPicker.module.css";

const ColorPicker = ({ onSelectCategory }) => {
  const categories = [
    { category: "personal", color: "#a0c4ff" },
    { category: "work", color: "#fdffb6" },
    { category: "study", color: "#ffc6ff" },
    { category: "other", color: "#caffbf" },
  ];

  //style[categories[0].category]
  // categories.map((c) => {
  //   return (
  //     <button
  //       type="button"
  //       className={style[c.category]}
  //       onClick={() => {
  //         onSelectCategory(c.color, c.category);
  //       }}
  //     ></button>
  //   );
  // });

  return (
    <div className={style.menu}>
      <button type="button" className={style.personal}>
        personal
      </button>
      <button type="button" className={style.work}>
        work
      </button>
      <button type="button" className={style.study}>
        studying
      </button>
      <button type="button" className={style.other}>
        other
      </button>
    </div>
  );
};

export default ColorPicker;
