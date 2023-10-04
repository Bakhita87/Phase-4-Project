from config import db


# Define the many-to-many association table first
menu_item_dietary_tags = db.Table('menu_item_dietary_tags',
    db.Column('menu_item_id', db.Integer, db.ForeignKey('menu_item.id'), primary_key=True),
    db.Column('dietary_tag_id', db.Integer, db.ForeignKey('dietary_tag.id'), primary_key=True)
)

class DietaryTag(db.Model):
    __tablename__ = 'dietary_tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    items = db.relationship('MenuItem', secondary=menu_item_dietary_tags, backref=db.backref('tags', lazy=True))

    
    