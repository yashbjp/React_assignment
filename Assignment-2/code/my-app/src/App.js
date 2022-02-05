import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
<div className="container">
  <div className="img-content">
    <img className="profile-img" src={employee.profileImg} width="200" height="200" alt="profile img"/>
  </div> 
  <div className="employee-name">
    <h1>{employee.name}</h1>
  </div> 
  <div className="employee-info">
    <label>Location</label>
    <strong>{employee.location}</strong>
  </div>
  <div className="employee-info">
    <label>Blood group</label>
    <strong>{employee.bloodGroup}</strong>
  </div>
  <div className="employee-info">
    <label>Age</label>
    <strong>{employee.age}</strong>
  </div>
</div>
)
}



export default App;
