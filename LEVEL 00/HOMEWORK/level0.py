from turtle import*




#making a house

#step 1:draw a square
width(7)

color("black")
begin_fill()
forward(100)
right(90)

forward(300)
right(90)

forward(280)
right(90)

forward(300)
right(90)
end_fill()
forward(180)
forward(100)
right(90)
forward(300)
right(90)
forward(115)
right(90)
end_fill()
#step 2: making door for house
color("yellow")
begin_fill()
forward(120)
left(90)
forward(75)
left(90)
forward(120)
end_fill()
penup()
goto(0,0)
left(90)
#step 3:making roof for house
color("red")
begin_fill()
forward(100)
right(90)
right(150)
pendown()

forward(275)
left(120)
forward(275)
end_fill()


penup()
left(30)
forward(60)

left(90)
forward(45)
pendown()


#step 3:making windows for house  


#first window
color("blue")
begin_fill()
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()
penup()
right(90)
forward(200)
pendown()
#step 4:second window
color("blue")
begin_fill()
right(90)
forward(40) 
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()
#the end
exitonclick()
