const App = React.createElement(
  "h1",
  { style: { color: "red" } },
  "hello world"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(App);
