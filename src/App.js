
import './App.css';
import { Component } from 'react';
import Countries from "./components/countries-list/countries-list.component";


class App extends Component {

  constructor() {
    super();
    this.state = {
      countries: [],
      filteredCountries: [],

    };
  }
  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countryData) =>
        this.setState(
          () => {
            return { countries: countryData, filteredCountries: countryData }
          }
        )
      );
  }

  onTextChange = (event) => {

    const filteredCountriesRaw = this.state.countries.filter((country) => {
      return country.name.common.toLowerCase().includes(event.target.value.toLowerCase());
    })
    this.setState(() => {
      return { filteredCountries: filteredCountriesRaw }
    })
  }

  render() {

    return (
      <div className="App">
        <div className="header">
          <h1>Country Info</h1>
          <input type="text" placeholder='Search' onChange={this.onTextChange} />
        </div>

        <Countries countries={this.state.filteredCountries} />

      </div>
    );
  }
}


export default App;


/*this.state.countries.map(country)=>{
  return
<div className="card">
  <img src={this.state.countries.flags.png} alt="" />
  <h1>{this.state.countries.name.common}</h1>
  <p>Population: </p>
  <p>Location: </p>
</div>*/