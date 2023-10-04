// import React from "react";

// function Restaurantlist() {
//   return <div>Restaurantlist</div>;
// }

// export default Restaurantlist;

import React, { Component } from 'react';

class Restaurantlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [], // An array to store the list of restaurants
    };
  }

  componentDidMount() {
    // You can fetch the list of restaurants from your backend API here
    // For simplicity, I'll use a sample data array
    const sampleRestaurants = [
      { id: 1, name: 'Restaurant 1', location: 'Location 1' },
      { id: 2, name: 'Restaurant 2', location: 'Location 2' },
      { id: 3, name: 'Restaurant 3', location: 'Location 3' },
    ];

    this.setState({ restaurants: sampleRestaurants });
  }

  render() {
    const { restaurants } = this.state;

    return (
      <div>
        <h2>Restaurant List</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <p>Location: {restaurant.location}</p>
              {/* Add more restaurant information as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Restaurantlist;
