const names = ["Vadim", "Alena"];

export const Post = () => {
  const choseName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{choseName}</p>
      <p>React is Awesome!</p>
    </div>
  );
};
