from app import app, db
from model.user import User
from model.restaurant import Restaurant, RestaurantDietaryTag
from model.diettag import DietaryTag
from model.menu_item import MenuItem
from model.review import Review

def seed_menu_items():
    # Create and add menu items
    menu_item1 = MenuItem(Name="Burger", Description="Delicious beef burger", Price=9.99, Image_URL="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg", Restaurant_ID=1)
    menu_item2 = MenuItem(Name="Pizza", Description="Margherita pizza with fresh tomatoes", Price=11.99, Image_URL="https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg", Restaurant_ID=1)
    menu_item3 = MenuItem(Name="Salad", Description="Fresh garden salad", Price=6.99, Image_URL="https://www.recipetineats.com/wp-content/uploads/2021/08/Garden-Salad_47-SQ.jpg", Restaurant_ID=2)

    db.session.add(menu_item1)
    db.session.add(menu_item2)
    db.session.add(menu_item3)
    db.session.commit()

def seed_restaurants():
    # Create and add restaurants
    restaurant1 = Restaurant(Name="Food Haven", Location="123 Main St", Amenities="Free Wi-Fi", Description="A cozy place to enjoy your favorite dishes", Owner_User_ID=1)
    restaurant2 = Restaurant(Name="Pizza Palace", Location="456 Elm St", Amenities="Outdoor Seating", Description="The best pizza in town", Owner_User_ID=2)
    restaurant3 = Restaurant(Name="Cafe Delight", Location="789 Oak St", Amenities="Live Music", Description="A charming cafe with live music", Owner_User_ID=3)

    db.session.add(restaurant1)
    db.session.add(restaurant2)
    db.session.add(restaurant3)
    db.session.commit()

def seed_reviews():
    # Create and add reviews
    review1 = Review(Rating=4.5, Content="Great food and friendly staff!", User_ID=1, Restaurant_ID=1)
    review2 = Review(Rating=3.8, Content="Pizza was good but service was slow.", User_ID=2, Restaurant_ID=2)
    review3 = Review(Rating=4.0, Content="Healthy and delicious salads!", User_ID=1, Restaurant_ID=2)
    review4 = Review(Rating=4.2, Content="Amazing pasta!", User_ID=3, Restaurant_ID=3)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.commit()

def seed_users():
    user1 = User(Username="john_smith", Email="john@example.com", Password="password123")
    user2 = User(Username="jane_king", Email="jane@example.com", Password="secret456")
    user3 = User(Username="mary_doe", Email="mary@example.com", Password="mysecretpass")

    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.commit()

def seed_dietary_tags():
    # Create and add dietary tags
    dietary_tag1 = DietaryTag(Name="Vegetarian")
    dietary_tag2 = DietaryTag(Name="Gluten-Free")
    dietary_tag3 = DietaryTag(Name="Vegan")

    db.session.add(dietary_tag1)
    db.session.add(dietary_tag2)
    db.session.add(dietary_tag3)
    db.session.commit()

def seed_restaurant_dietary_tags():
    # Create associations between restaurants and dietary tags
    association1 = RestaurantDietaryTag(restaurant_id=1, dietary_tag_id=1)  # Food Haven is Vegetarian
    association2 = RestaurantDietaryTag(restaurant_id=2, dietary_tag_id=2)  # Pizza Palace is Gluten-Free
    association3 = RestaurantDietaryTag(restaurant_id=3, dietary_tag_id=3)  # Cafe Delight is Vegan

    db.session.add(association1)
    db.session.add(association2)
    db.session.add(association3)
    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        # Run the seeding functions
        seed_menu_items()
        seed_restaurants()
        seed_reviews()
        seed_users()
        seed_dietary_tags()
        seed_restaurant_dietary_tags()

    print("Seeding completed.")