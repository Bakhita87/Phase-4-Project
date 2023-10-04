from config import db

class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    Restaurant_ID = db.Column(db.Integer, primary_key=True) 
    Name = db.Column(db.String)

    Location = db.Column(db.String)
    Amenities = db.Column(db.String)
    Description = db.Column(db.Text)
    Owner_User_ID = db.Column(db.Integer, db.ForeignKey('users.User_ID'), unique=True)

    owner = db.relationship("User", back_populates="owned_restaurant")

    reviews = db.relationship("Review", back_populates="restaurant")