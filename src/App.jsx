import Table from "./componets/Table";
import Button from "./componets/Button";
import Search from "./componets/Search";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Search />
      </div>
      <div className="main">
        <Table />
      </div>
      <div className="footer">
        <Button children="PREV" />
        <Button children="NEXT" />
      </div>
    </div>
  );
}

export default App;
