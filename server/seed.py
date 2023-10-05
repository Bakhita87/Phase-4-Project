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
    user1 = User(Username='Ann ', Email='ann@example.com', Password='password1')
    user2 = User(Username='clive moyia', Email='clive@example.com', Password='password2')
    user3 = User(Username='bakhita', Email='kita@example.com', Password='password3')
    user4 = User(Username='catherine', Email='cate@example.com', Password='password4')
    user5 = User(Username='emanuel', Email='manu@example.com', Password='password5')

    # Assign unique User IDs to users
    user1.User_ID = 1
    user2.User_ID = 2
    user3.User_ID = 3
    user4.User_ID = 4
    user5.User_ID = 5

    print('Creating restaurants...')
    restaurant1 = Restaurant(
        Name='Babuze Eats',        
        Location='123 Main St',
        Amenities='Amenities :POol table',
        Description='A cozy place with delicious food.',
        owner=user1,
        Image_URL='https://d2o0s5gkmp1j1.cloudfront.net/20170202_catalystcafe_0403.jpg' 
    )
    restaurant2 = Restaurant(
        Name='Annies Hut',
        Location='456 Elm St',
        Amenities='Amenities : SWimming pool',
        Description='Authentic cuisine in a vibrant atmosphere.',
        owner=user2,
        Image_URL='https://res.cloudinary.com/brickandbatten/images/w_2560,h_2048,c_scale/f_auto,q_auto/v1661299821/wordpress_assets/59026-Jogging-Path-TricornBlackSW-Front-a_4683279cfc/59026-Jogging-Path-TricornBlackSW-Front-a_4683279cfc.jpg?_i=AA' 
    )

    restaurant3 = Restaurant(
        Name='Clives Delicacies',
        Location='456 Elm St',
        Amenities='Amenities A',
        Description='Authentic cuisine in a vibrant atmosphere.',
        owner=user3,
        Image_URL='https://res.cloudinary.com/brickandbatten/images/w_2560,h_2048,c_scale/f_auto,q_auto/v1661299821/wordpress_assets/59026-Jogging-Path-TricornBlackSW-Front-a_4683279cfc/59026-Jogging-Path-TricornBlackSW-Front-a_4683279cfc.jpg?_i=AA' 
    )

    restaurant4 = Restaurant(
        Name='Kitas Pizzas',
        Location='456 Elm St',
        Amenities='Amenities A',
        Description='Authentic cuisine in a vibrant atmosphere.',
        owner=user4,
        Image_URL='https://res.cloudinary.com/brickandbatten/images/w_2560,h_2048,c_scale/f_auto,q_auto/v1661299821/wordpress_assets/59026-Jogging-Path-TricornBlackSW-Front-a_4683279cfc/59026-Jogging-Path-TricornBlackSW-Front-a_4683279cfc.jpg?_i=AA' 
    )

    restaurant5 = Restaurant(
        Name='Catherines Fries and Chicken',
        Location='456 Elm St',
        Amenities='Amenities A',
        Description='Authentic cuisine in a vibrant atmosphere.',
        owner=user5,
        Image_URL='https://res.cloudinary.com/brickandbatten/images/w_2560,h_2048,c_scale/f_auto,q_auto/v1661299821/wordpress_assets/59026-Jogging-Path-TricornBlackSW-Front-a_4683279cfc/59026-Jogging-Path-TricornBlackSW-Front-a_4683279cfc.jpg?_i=AA' 
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

    db.session.add_all([user1, user2, restaurant1, restaurant2, restaurant3, restaurant4,restaurant5, review1, review2])
    db.session.commit()

print("Database seeded successfully.")
