from config import db

class Contact(db.Model):
    __tablename__ = 'contact'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    message = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.User_ID'))  # This line establishes the foreign key relationship
    user = db.relationship('User', back_populates='contacts')
    # Define the foreign key relationship to User
    user_id = db.Column(db.Integer, db.ForeignKey('users.User_ID'), nullable=False)

    # Define the relationship back to User
    user = db.relationship("User", back_populates="contacts")