<<<<<<< HEAD:server/model/dietarytag.py
from config import db
=======
from dbconfig import db;
>>>>>>> refs/remotes/origin/main:server/model/DietaryTag.py

class DietaryTag(db.Model):
    __tablename__ = 'dietary_tags'

    DietaryTag_ID = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String)

    restaurants = db.relationship("Restaurant", secondary="restaurant_dietary_tags")



