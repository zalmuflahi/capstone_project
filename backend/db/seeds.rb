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
user_3 = User.create!(first_name: "ME",last_name: "MU",username: "ZEE", email: "zaid@example.com",password:  "123")
user_4 = User.create!(first_name: "MO",last_name: "MU",username: "FREEMIND", email: "MOHAMED@MU.COM",password:  "123")
user_5 = User.create!(first_name: "MO",last_name: "MU",username: "HELLO", email: "ZAID@AL.COM",password:  "123")
user_6 = User.create!(first_name: "MO",last_name: "MU",username: "WASSUP", email: "MOMO@MU.COM",password:  "123")
user_7 = User.create!(first_name: "MO",last_name: "MU",username: "HOWAREYOU", email: "MOfewfw@MU.COM",password:  "123")
user_8 = User.create!(first_name: "MO",last_name: "MU",username: "FINISHED", email: "MO@fvdMU.COM",password:  "123")

zaid_follows_mo = Follow.create!(followee_id: user_1.id,follower_id: user_2.id)
zaid_follows_zaid = Follow.create!(followee_id: user_2.id,follower_id: user_3.id)
zaid_follows_mo = Follow.create!(followee_id: user_2.id,follower_id: user_4.id)
zaid_follows_mo = Follow.create!(followee_id: user_2.id,follower_id: user_5.id)
zaid_follows_mo = Follow.create!(followee_id: user_1.id,follower_id: user_6.id)
zaid_follows_mo = Follow.create!(followee_id: user_2.id,follower_id: user_7.id)

post = Post.create(caption: "Mustafa be like", image_url: 'https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg', user_id: user_1.id , user_username: user_1.username)
post = Post.create(caption: "me working on this project", image_url: 'https://todaysparent.mblycdn.com/tp/resized/2017/06/767x431/when-your-kid-becomes-a-meme.jpg', user_id: user_2.id , user_username: user_2.username)

comment = Comment.create(text: "on god", post_id: post.id, user_id: user_1.id)

share = Share.create(post_id: post.id, user_id: user_2.id)

likes1 = Like.create(user_id: user_1.id, post_id: post.id)
room = Room.create(name: "The Gang")
room2 = Room.create(name: "NYC RATS")
room3 = Room.create(name: "COWBOYS")
room4 = Room.create(name: "MUSCLE MEN")

Chat.create(user_id: user_1.id, room_id: room.id)
Chat.create(user_id: user_2.id, room_id: room.id)

Chat.create(user_id: user_2.id, room_id: room2.id)
Chat.create(user_id: user_6.id, room_id: room2.id)

Chat.create(user_id: user_2.id, room_id: room3.id)
Chat.create(user_id: user_5.id, room_id: room3.id)

Chat.create(user_id: user_2.id, room_id: room4.id)
Chat.create(user_id: user_3.id, room_id: room4.id)

message = Message.create(sms: "Hey", user_id: user_1.id, room_id: room.id)
message = Message.create(sms: "Sup", user_id: user_1.id, room_id: room2.id)
message = Message.create(sms: "AYO", user_id: user_1.id, room_id: room3.id)
message = Message.create(sms: "HELLOOOOO", user_id: user_1.id, room_id: room4.id)
puts "Done."