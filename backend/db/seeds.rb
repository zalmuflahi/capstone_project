# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all
Share.destroy_all
Like.destroy_all

puts "Seeding Database"
user_1 = User.create!(first_name: "MO",last_name: "MU",username: "MOHAM", email: "MO@MU.COM",password:  "123")
user_2 = User.create!(first_name: "ZA",last_name: "ID",username: "ZAID", email: "ZA@ID.COM",password:  "123")

zaid_follows_mo = Follow.create!(followee_id: user_1.id,follower_id: user_2.id)

post = Post.create(caption: "yall gorrilas", image_url: 'on god', user_id: user_1.id , user_username: user_1.username)
comment = Comment.create(text: "and apes", post_id: post.id, user_id: user_1.id)

share = Share.create(post_id: post.id, user_id: user_2.id)

likes1 = Like.create(user_id: user_1.id, post_id: post.id)
puts "Done."