from dbconfig import db

class MenuItem(db.Model):
    __tablename__ = 'menu_items'

    MenuItem_ID = db.Column(db.Integer, primary_key=True)  # Specify MenuItem_ID as the primary key

    Name = db.Column(db.String)
    Description = db.Column(db.Text)
    Price = db.Column(db.Float(2))
    Image_URL = db.Column(db.String) 
    Restaurant_ID = db.Column(db.Integer, db.ForeignKey('restaurants.Restaurant_ID'))

    restaurant = db.relationship("Restaurant", back_populates="menu_items")
