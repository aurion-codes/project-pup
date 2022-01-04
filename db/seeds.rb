# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Dog.destroy_all
User.destroy_all
Review.destroy_all

user1 = User.create(name: "Johnny Bravo", email: "johnnybravo@gmail.com", username: "johnbravo1", password_digest: "johnbravo12!")
user2 = User.create(name: "Ari Jones", email: "arijones@yahoo.com", username: "arijones", password_digest: "arijones12!")
user3 = User.create(name: "Cedric Howard", email: "cedrich@gmail.com", username: "cedric1", password_digest: "cedrich12!")
user4 = User.create(name: "Cordell Hammonds", email: "cordellh@yahoo.com", username: "cordelh", password_digest: "cordell12!")

dog1 = Dog.create(name: "Cookie", gender: "female", dob: "10/2/2021" , breed: "Shih Tzu", bio: "Hi I'm cookie! I will love you and be your fur-ever best friend. I come up-to-date on my vaccinations and am ready to come home to play.", adopted: false, vaccinated: true, img_url: "https://dogtime.com/assets/uploads/gallery/shih-tzu-dog-breed-pictures/shih-tzu-breed-picture-1.jpg", user_id:1)
dog2 = Dog.create(name: "Prince", gender: "male", dob: "November 1, 2021", breed: 'Mini Goldendoodle' , bio: "Aren't you excited? I know I am! I just met my fur-ever family and it's you. I am overjoyed because I can already imagine the fun we will have together. I am so ready to make memories with you so hurry and bring me home!", adopted: true , vaccinated: true, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY23lcJY1foySrwC6QesnofVL3GN7FQEdRhA&usqp=CAU", user_id:1)
dog3 = Dog.create(name: "Clyde", gender: "male", dob: "September 3, 2021", breed: "Shih Tzu", bio: "Aren't you excited? I know I am! I just met my fur-ever family and it's you. I am overjoyed because I can already imagine the fun we will have together. I am so ready to make memories with you so hurry and bring me home!", adopted: false, vaccinated: true, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfBhvberq8vw0sEI8vxJlY_lVlEIgjXctpA&usqp=CAU", user_id:1)
dog4 = Dog.create(name: "Precious", gender: "female", dob: "September 10, 2021", breed: "Mini Goldendoodle", bio: "I know you've been looking for the perfect puppy and I think I have all of the right qualifications for that position.My fur is like not  other and my cute face has been known to melt a heart or two.I sure hope I get the job, because I'd love to come home to you.", adopted: false, vaccinated: true, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWjZazWDHJnv7-X__9iOQPt1nB0Xb_FMf7w&usqp=CAU", user_id:1)
dog5 = Dog.create(name: "Tonya", gender: "female", dob: "July 10, 2021", breed: "Pomeranian", bio: "Hello! My name is Tonya and I would love to come to you. I'm the sweetest, cutest, softest and cuddliest pup out of the bunch LOL.I promise to give you a lifetime of puppy kisses and a tail-wagging good time!", adopted: false, vaccinated: true, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8-84GPnoV_zLVktgPoHHE844sXDw58qGjQ&usqp=CAU", user_id:1)
dog6 = Dog.create(name: "Marley", gender: "male", dob: "August 30, 2021", breed: "Poodle", bio: "If you are looking for a buddy to share tons of good times with, then you have found the right pup. I specialize in good time. I am even into fitness, I can be your accountablity workout partner in few laps around the block. Hurry up and come get me before another family does!", adopted: false, vaccinated: true, img_url: "https://patchpuppy.com/wp-content/uploads/2021/07/Feature-17.jpg", user_id:1)
dog7 = Dog.create(name: "Daisy", gender: "female", dob: "July 15, 2021", breed: "German Shepard", bio: "Hi there everyone. I am a little baby that love kisses and snuggles! I love to sit by the fire with you or romp around outside in the yard. I love family time and I can't wait to meet you.", adopted: false, vaccinated: true, img_url: "https://thegermanshepherder.com/wp-content/uploads/2021/01/gsdbaby-1024x683.png.webp", user_id:1)
dog8 = Dog.create(name: "Kosmo", gender: "male", dob: "September 30, 2021", breed: "Havanese", bio: "Look into my eyes! How can you resist such beauty? Hi, my name is Kosmo. I can already tell by how in awe you are that we will be the perfect make.Puppy kisses are waiting but I charge a belly rub for each!", adopted: false, vaccinated: true, img_url: "https://www.westchesterpuppies.com/wp-content/uploads/2020/10/havanese_dustin_fluffman-768x576.jpg", user_id:1)
dog9 = Dog.create(name: "Fluffy", gender: "female", dob: "November 20, 2021", breed: "Cockapoo", bio: "Hi! I am looking for a forever family. I am looking for a family that is just as fun and bubbly as I am. If this sounds like what you are looking for too then please make me yours forever!", adopted: false, vaccinated: true, img_url: "https://www.animalkingdomaz.com/wp-content/uploads/Cockapoo-3-300x300.jpg", user_id:1)
dog10 = Dog.create(name: "Sam", gender: "male", dob: "October 2, 2021", breed: "Aussiedoodle", bio: "Hi, Im SAM. I am a turkey baby, born on thanksgiving this year. I hope you have a ton of treats ready for me because I love to eat. I am all for eating and having a good time. I promise to be your forever furry mukbang buddy until the end of time.", adopted: false, vaccinated: true, img_url: "https://d1bbcn6xx8qu3z.cloudfront.net/sites/default/files/styles/product_thumbnail/public/puppy-photo/%20211117%20Ireland__3617_Mini%20Aussiedoodle%205000-2-1960278254.jpg?itok=52Y5sSOJ", user_id:1)
dog11 = Dog.create(name: "Bonnie", gender: "female", dob: "November 24, 2021", breed: "Boston Terrier", bio: "Aren't you excited? I know I am! I just met my fur-ever family and it's you. I am overjoyed because I can already imagine the fun we will have together. I am so ready to make memories with you so hurry and bring me home!", adopted: false, vaccinated: true, img_url: "https://i.pinimg.com/736x/1f/1e/8a/1f1e8a70bee848e23993401f5c286444.jpg", user_id:2)
dog12 = Dog.create(name: "Brownie", gender: "male", dob: "September 24, 2021", breed: "Shih Tzu", bio: "Hi, I'm Brownie! I will love you and be your fur-ever best friend. I come up-to-date on my vaccinations and am ready to come home to play.", adopted: false, vaccinated: true, img_url: "https://i.pinimg.com/originals/94/14/e8/9414e8b83c17c67e21666e61082cc1ab.jpg", user_id:2  )



review1 = Review.create(user_id: 1, dog_id: 1, like: true)
review2 = Review.create(user_id: 2, dog_id: 2, like: true)
review3 = Review.create(user_id: 3, dog_id: 3, like: true)
review4 = Review.create(user_id: 4, dog_id: 4, like: true)
