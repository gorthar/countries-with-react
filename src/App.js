
import './App.css';
import { Component } from 'react';


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
          },
          () => {
            console.log(this.state + "1")
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
        <div className="container">
          {
            this.state.filteredCountries.map((country) => {
              return (
                <div key={country.name.official} className="card">
                  <img src={country.flags.png} alt="" />
                  <h1>{country.name.common}</h1>
                  <p>Population:{country.population} </p>
                  <p>Location: {country.subregion}, {country.region}</p>
                </div>
              )



            })
          }

        </div>
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