from flask import Flask, current_app, make_response, request, jsonify, g
<<<<<<< HEAD
from config import db 
=======
from dbconfig import db
<<<<<<< HEAD
from model import restaurant,review,user,DietaryTag, MenuItem 

=======
from model import dietarytag,menuitem,restaurant,review,user
>>>>>>> refs/remotes/origin/main
>>>>>>> refs/remotes/origin/main


from flask_migrate import Migrate
import os


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///restaurant.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/main
@app.route('/')
def home():
    return 'Review All Restaurants!!!'


if __name__ == '__main__':
    app.run(port=5555)
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/main
