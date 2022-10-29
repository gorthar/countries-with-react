import { Component } from "react";
import './countries-list.css';


class Countries extends Component{
    
    render(){
      const {countries} =this.props;
        return(
            <div className="container">
              {
            countries.map((country) => {
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
        )
    }
}
export default Countries;