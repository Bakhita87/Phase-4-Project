from app import app
from config import db
from model.review import Review
from model.user import User
from model.restaurant import Restaurant

with app.app_context():
        

    print('Deleting existing users..')
    User.query.delete()

    print('Deleting existing reviews...')
    Review.query.delete()

    print('Deleting existing restaurants...')
    Restaurant.query.delete()
    
    print('Creating users...')
    user1 = User(Username='user1', Email='user1@example.com', Password='password1')
    user2 = User(Username='user2', Email='user2@example.com', Password='password2')

    print('Creating restaurants...')
    restaurant1 = Restaurant(
        Name='Babuze Eats',        
        Location='123 Main St',
        Amenities='Amenities A',
        Description='A cozy place with delicious food.',
        owner=user1
    )
    restaurant2 = Restaurant(
        Name='Annies Hut',
        Location='456 Elm St',
        Amenities='Amenities A',
        Description='Authentic cuisine in a vibrant atmosphere.',
        owner=user2
    )

    print('Creating reviews...')
    review1 = Review(
        Rating=4.5,
        Content='Good food and service!',
        user=user1,
        restaurant=restaurant1
    )
    review2 = Review(
        Rating=3.5,
        Content='Nice place but could improve.',
        user=user2,
        restaurant=restaurant2
    )

    # Add the objects to the session and commit to the database
    db.session.add_all([user1, user2, restaurant1, restaurant2, review1, review2])
    db.session.commit()


print("Database seeded successfully.")