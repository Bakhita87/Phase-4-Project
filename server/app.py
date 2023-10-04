from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from config import db
from datetime import datetime
from model.review import Review
from model.restaurant import Restaurant
from model.user import User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)


migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return 'Review All Restaurants!!!'

@app.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    user_list = []

    for user in users:
        user_data = {
            "User_ID": user.User_ID,
            "Username": user.Username,
            "Email": user.Email,
            "Password": user.Password
        }
        user_list.append(user_data)

    return jsonify(user_list)

@app.route('/users', methods=['POST'])
def create_new_user():
    data = request.json

    if 'Username' not in data or 'Email' not in data or 'Password' not in data:
        return jsonify({'message': 'Please provide Username, Email, and Password'}), 400

    username = data['Username']
    email = data['Email']
    password = data['Password']

    existing_user = User.query.filter_by(Email=email).first()
    if existing_user:
        return jsonify({'message': 'Email already in use'}), 400

    new_user = User(
        Username=username,
        Email=email,
        Password=generate_password_hash(password)
    )

    try:
        db.session.add(new_user)
        db.session.commit()

        user_data = {
            "User_ID": new_user.User_ID,
            "Username": new_user.Username,
            "Email": new_user.Email,
            "Password": new_user.Password
        }

        return jsonify(user_data), 201  
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Failed to create user'}), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.json

    if 'email' not in data or 'password' not in data:
        return jsonify({'message': 'Please provide email and password'}), 400

    email = data['email']
    password = data['password']

    user = User.query.filter_by(Email=email).first()
    print("User found:", user)

    if user and check_password_hash(user.Password, password):
        print("Login successful")
        return jsonify({'message': 'Login successful'}), 200
    else:
        print("Invalid email or password")
        return jsonify({'message': 'Invalid email or password'}), 401

@app.route('/restaurants', methods=['GET'])
def get_all_restaurants():
    restaurants = Restaurant.query.all()
    restaurant_list = []

    for restaurant in restaurants:
        restaurant_data = {
            "Restaurant_ID": restaurant.Restaurant_ID,
            "Name": restaurant.Name,
            "Location": restaurant.Location,
            "Amenities": restaurant.Amenities,
            "Description": restaurant.Description,
            "Owner_User_ID": restaurant.Owner_User_ID,
            "Image_URL": restaurant.Image_URL  
        }
        restaurant_list.append(restaurant_data)

    return jsonify(restaurant_list)

@app.route("/reviews", methods=["GET"])
def get_reviews():
    reviews = Review.query.all()
    review_list = []
    for review in reviews:
        review_data = {
            "Review_ID": review.Review_ID,
            "Rating": review.Rating,
            "Content": review.Content,
            "Date_Created": review.Date_Created,
            "User_ID": review.User_ID,
            "Restaurant_ID": review.Restaurant_ID,
        }
        review_list.append(review_data)
    return jsonify(review_list)

@app.route('/reviews', methods=['POST'])
def create_review():
    data = request.json

    if 'user_id' not in data or 'restaurant_id' not in data or 'rating' not in data or 'content' not in data:
        return jsonify({'message': 'Please provide user_id, restaurant_id, rating, and content'}), 400

    user_id = data['user_id']
    restaurant_id = data['restaurant_id']
    rating = data['rating']
    content = data['content']

    user = User.query.get(user_id)
    restaurant = Restaurant.query.get(restaurant_id)

    if not user or not restaurant:
        return jsonify({'message': 'User or restaurant not found'}), 404

    new_review = Review(
        User_ID=user_id,
        Restaurant_ID=restaurant_id,
        Rating=rating,
        Content=content
    )

    try:
        db.session.add(new_review)
        db.session.commit()
        return jsonify({'message': 'Review created successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Failed to create review'}), 500

@app.route("/delete-review/<int:review_id>", methods=["DELETE"])
def delete_review(review_id):
    review_entry = Review.query.get(review_id)
    if review_entry:
        db.session.delete(review_entry)
        db.session.commit()
        return jsonify({"message": "Review deleted successfully"})
    else:
        return jsonify({"message": "Review not found"}), 404



if __name__ == '__main__':
    app.run(debug=True)
