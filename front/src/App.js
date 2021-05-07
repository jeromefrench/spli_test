import './App.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import animalsList from './animals.js'

function App() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
              form.classList.add('was-validated')
            }, false)
          })
      })()
  }, []);

  const handleSubmit = (e) => {
    setFormData({
      city: e.target.favoriteCity.value.toUpperCase(),
      animal: e.target.favoriteAnimal.value.toLowerCase(),
      percentage: parseInt(e.target.favoritePercentage.value, 10),
      age: parseInt(e.target.age.value, 10),
      bank: {
        amount: parseFloat(e.target.amount.value),
        currency: e.target.currency.value
      }
    })
    e.preventDefault();
    console.log('On submit');
    setFormIsValid(true);
  }

  return (
    <div>
      {formIsValid && (
        <div><pre>{JSON.stringify(formData, null, 2) }</pre></div>
      )}

      {!formIsValid && (
        <Container>
          <h1>My super form</h1>
          <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="favoriteCity" className="form-label">Favorite City</label>
              <input type="text" className="form-control" id="favoriteCity" placeholder="Enter your favorite city" required/>
              <div className="invalid-feedback">
                Please enter your favorite city.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleDataList" className="form-label">Favorite Animal</label>
              <input className="form-control" list="datalistOptions" id="favoriteAnimal" placeholder="Type to search..." required/>
              <datalist id="datalistOptions">
                {animalsList.map((animal, index) => {
                  return (
                    <option key={index} value={animal}/>
                  )
                })}
              </datalist>
              <div className="invalid-feedback">
                Please enter your favorite animal.
              </div>
            </div>

            <div className="mb-3 position-relative">
              <label htmlFor="favoritePercentage" className="form-label">Favorite Percentage</label>
              <input type="number" min="1" max="100" step="1" className="form-control" id="favoritePercentage" placeholder="Enter your favorite percentage" required/>
              <div id="favoritePercentageHelp" className="form-text">Between 1 to 100</div>
              <div className="invalid-feedback">
                Please choose an integer between 1 and 100.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" min="1" max="199" step="1" className="form-control" id="age" placeholder="Enter your age" required/>
              <div className="invalid-feedback">
                Please enter a valid age.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Current money on bank account</label>
              <input type="number" step="0.01" className="form-control" id="amount" placeholder="Enter your current money on bank account" required/>
              <div className="invalid-feedback">
                Please enter your current money on bank account.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="currency" className="form-label">Currency</label>
              <select id="currency" className="form-select" defaultValue="" required>
                <option value="" disabled hidden>Select your option</option>
                <option value="EUR">Euro</option>
                <option value="USD">Dollar</option>
                <option value="BTC">Bitcoin</option>
                <option value="INR">Rupee</option>
                <option value="CLP">Pesos</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Container>
      )}
    </div>
  );
}

export default App;
