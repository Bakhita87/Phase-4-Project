from flask import Flask, current_app, make_response, request, jsonify, g
from dbconfig import db 


from flask_migrate import Migrate
import os 

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///restaurant.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

