200.times do
  Profile.create(
    name: Faker::Artist.name,
    birthday: Faker::Date.birthday(min_age: 18, max_age: 45),
    avatar: Faker::Avatar.image,
    favorite_color: Faker::Color.color_name,
    relationship_status: "single"
  )
end

puts "database seeded 200 times"