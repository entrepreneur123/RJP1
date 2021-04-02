

function App() {
  const firstName= 'John';
  const lastName = 'WICk';
  const age = 28;
  const job = 'Gentleman';

  const inputPlaceholder = 'Enter your details'

  const getFuLLName = (firstName,lastName) => `${firstName} ${lastName}`
  const mArr = [1,2,3,4]

  const detailsInputBox = <input placeholder ={inputPlaceholder} autocomplete />;

  
  return (
    <div className="App">
      <h3>Full Name: {getFuLLName(firstName, lastName)}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      <imput placeholder= {inputPlaceholder}/>
      {mArr[0]}
      {
        mArr[0] > 0 ? "True" :"False"      }
      {detailsInputBox}
      
    </div>
  );
}

export default App;
