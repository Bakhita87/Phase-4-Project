<<<<<<< HEAD
from dbconfig import db
=======
from config import db
>>>>>>> refs/remotes/origin/main

class Review(db.Model):
    __tablename__ = 'reviews'

    Review_ID = db.Column(db.Integer, primary_key=True)
    Rating = db.Column(db.Float(5, 2))
    Content = db.Column(db.Text)
<<<<<<< HEAD
    Date_Created = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
=======
    Date_Created = db.Column(db.DateTime(timezone=True), server_default=sqlalchemy.func.now())
>>>>>>> refs/remotes/origin/main
    User_ID = db.Column(db.Integer, db.ForeignKey('users.User_ID'))
    Restaurant_ID = db.Column(db.Integer, db.ForeignKey('restaurants.Restaurant_ID'))

    user = db.relationship("User", back_populates="reviews")
<<<<<<< HEAD
    restaurant = db.relationship("Restaurant", back_populates="reviews")
=======
    restaurant = db.relationship("Restaurant", back_populates="reviews")
>>>>>>> refs/remotes/origin/main
