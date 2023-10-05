# RESTAURANT REVIEW APP

Restaurant Review App Welcome to the Restaurant Review App.

This project allows users to create accounts, login, and share their reviews and ratings for various restaurants. Users can also explore restaurant locations, read other people's reviews, and search for restaurants by location and amenities. Below, you will find an overview of the project's structure, including the frontend and backend components.

Problem Statement In today's fast-paced world, dining out at restaurants has become a common part of our lives. However, with an abundance of dining options available, customers often face challenges when it comes to making informed decisions about where to eat. They rely on reviews and ratings from fellow diners to choose the right restaurant. Yet, finding reliable and comprehensive reviews can be a daunting task, and the process of sharing one's dining experiences needs to be user-friendly and efficient.

The Restaurant Review App aims to address these issues by providing a platform where users can easily create accounts, share their dining experiences, and access a wealth of restaurant information

The key problems this project seeks to solve are:Lack of Comprehensive Reviews , inefficient User Experience providing a user-friendly experience by making it easy for users to share their thoughts and opinions about restaurants,Limited Search Capabilities by including a robust search functionality that allows users to filter and discover restaurants based on their preferences, Lack of Interaction by enabling users to not only rate and review restaurants but also engage with other users' reviews and ratings. and Limited Restaurant Information by providing detailed restaurant profiles to give users a better understanding of their options.

Project Structure Frontend The frontend of the Restaurant Review App provides a user-friendly interface for interacting with the system. Here are the key functionalities that users can perform on the frontend:

User Authentication: Users can create an account. Users can log in to their accounts.

Restaurant Reviews: Users can write reviews for restaurants. Users can rate restaurants using a star rating system. Users can view and edit their own reviews. Users can delete their own reviews.

Restaurant Information: Users can view the location of each restaurant. Users can see a list of available amenities for each restaurant.

Exploring Reviews: Users can read reviews and ratings submitted by other users. Users can view a list of all restaurants.

Search Functionality: Users can search for restaurants based on location and amenities.

Backend The backend of the Restaurant Review App manages the data, user authentication, and interactions with the database. Here's an overview of the backend structure: Models The project has three main models:

User Model: User ID (Primary Key) Username Email Password Other user-related attributes (e.g., name, profile picture)

Restaurant Model: Restaurant ID (Primary Key) Name Location Amenities Other restaurant-related attributes (e.g., description, images)

Review Model: Review ID (Primary Key) Rating (e.g., star rating) Content (the text of the review) Date Created User ID (Foreign Key, linking the review to the user who created it) Restaurant ID (Foreign Key, linking the review to the restaurant it's about)

Relationships The models have the following relationships:

Users and Reviews: A User can create multiple Reviews. A Review belongs to a User.

Restaurants and Reviews: A Restaurant can have multiple Reviews. A Review belongs to a Restaurant.

Restaurants and Users: A User can rate multiple Restaurants. A Restaurant can be rated by multiple Users.

License This project is licensed under the MIT License.
