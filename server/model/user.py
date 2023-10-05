from config import db

class User(db.Model):
    __tablename__ = 'users'

    User_ID = db.Column(db.Integer, primary_key=True)
    Username = db.Column(db.String)
    Email = db.Column(db.String, unique=True)
    Password = db.Column(db.String)

    contacts = db.relationship('Contact', back_populates='user')
    reviews = db.relationship("Review", back_populates="user")
    owned_restaurant = db.relationship("Restaurant", back_populates="owner")