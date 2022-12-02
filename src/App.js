
function App() {
  return (
    <div className="App">
     <h2>Silverline System Pvt Ltd</h2>
     <small>Add your credentials</small>
     <form>
      <div className="add-details">
        <div className="full-name">
          <label>Full Name:</label>
          <input type="text"/>
        </div>
        <div className="address">
          <label>Address:</label>
          <input type="text"/>
        </div>
        <div className="pan-num">
          <label>PAN number:</label>
          <input type="text"/>
        </div>
        <div className="email">
          <label>Email:</label>
          <input type="text"/>
        </div>
        <div className="phone-num">
          <label>Phone number:</label>
          <input type="text"/>
        </div>
      </div>
     </form>
    </div>
  );
}

export default App;
