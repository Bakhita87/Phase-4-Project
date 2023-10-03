from flask import Flask, current_app, make_response, request, jsonify, g
from dbconfig import db
from model import restaurant,review,user,DietaryTag, MenuItem 



from flask_migrate import Migrate
import os


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///restaurant.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return 'Review All Restaurants!!!'


if __name__ == '__main__':
    app.run(port=5555)
