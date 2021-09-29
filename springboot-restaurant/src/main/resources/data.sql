USE restaurantdb;

INSERT INTO customer(email,username,password,role) VALUES ('pc@gmail.com','pc','pc','USER'),('prakash@gmail.com','prakash','prakash','ADMIN');

INSERT INTO item(category,description,name,price,image) VALUES 

('Chinese',"Veg Dry Spicy Manchurian","Manchurian ",100,'http://www.theterracekitchen.in/wp-content/uploads/2019/08/089.-Veg-Manchurian-1.png'),
('Chinese',"Spicy noodles",'Noodles',120,'https://images.unsplash.com/photo-1607328874071-45a9cd600644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'),
('Chinese',"Chinese Bhel","Chinese Bhel",100,'https://i.pinimg.com/originals/6e/f5/85/6ef5859c3d086ae57cfcb39137bfb338.jpg'),
('Chinese',"Soya Chilli","Soya Chilli ",150,'https://i.ytimg.com/vi/4iW4yKzhzYo/maxresdefault.jpg'),
('MainCourse','Paneer','Paneer',120,'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1317&q=80'),
('FastFood','Pizza','Pizza',150,'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'),
('FastFood','Burger','Burger',130,'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=999&q=80'),
('Breakfast',"Samosa Snack",'Samosa',20,'https://image.shutterstock.com/z/stock-photo-indian-favorite-snack-samosa-served-in-plate-with-green-chilly-1890649348.jpg'),
('MainCourse',"Veg Main Course Thali","Veg Thali",200,'https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80'),
('MainCourse',"Veg Main Course Thali","Veg Paratha Thali ",210,'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
('Breakfast',"Mendu Vada Snack","Mendu Vada",40,'https://images.unsplash.com/photo-1624374053855-39a5a1a41402?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'),
('Breakfast',"Spicy Pav Bhaji","Pav Bhaji",100,'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1021&q=80'),
('MainCourse','Puri','Puri',30,'https://images.unsplash.com/photo-1602437029960-9418c5865778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'),
('Breakfast',"Bread Breakfast","Bread Breakfast",50,'https://images.unsplash.com/photo-1598233847491-f16487adee2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1113&q=80'),
('Breakfast',"Tasty Dosa",'Dosa',100,'https://image.shutterstock.com/z/stock-photo-masala-dosa-is-a-south-indian-meal-served-with-sambhar-and-coconut-chutney-selective-focus-1008673585.jpg'),
('Breakfast',"Tasty Idli",'Idli',80,'https://image.shutterstock.com/z/stock-photo-idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast-1154073754.jpg'),
('Breakfast','Poha','Poha',50,'https://image.shutterstock.com/z/stock-photo-indian-breakfast-dish-poha-also-know-as-pohe-or-aalu-poha-made-up-of-beaten-rice-or-flattened-rice-761232226.jpg'),
('MainCourse',"Palak Panner","Palak Panner",120,'https://image.shutterstock.com/z/stock-photo-palak-paneer-or-spinach-and-cottage-cheese-curry-is-a-healthy-main-course-recipe-in-india-served-331083125.jpg'),
('MainCourse',"Spicy Mattar Paneer","Mattar Paneer",150,'https://image.shutterstock.com/z/stock-photo-mattar-paneer-is-a-vegetarian-north-indian-dish-consisting-of-peas-and-farmer-s-cheese-in-201903202.jpg'),
('MainCourse',"Masala Bhindi","Masala Bhindi",130,'https://image.shutterstock.com/z/stock-photo-bharwa-masala-bhindi-or-stuffed-okra-is-an-indian-main-course-vegetable-recipe-made-using-ladies-1790859821.jpg'),
('MainCourse',"Tawa Roti","Tawa Roti",20,'https://image.shutterstock.com/z/stock-photo-chappati-tawa-roti-indian-main-course-bread-1662185353.jpg'),
('Chinese',"Veg Gravy Manchurian","Gravy Manchurian",130,'https://image.shutterstock.com/z/stock-photo-veg-or-chicken-manchurian-with-gravy-popular-food-of-india-served-in-a-bowl-with-chopstick-1382867369.jpg'),
('Breakfast',"Khaman Dhokla","Khaman Dhokla",60,'https://image.shutterstock.com/z/stock-photo-indian-traditional-dal-dhokla-khaman-dhokla-is-a-famous-dish-of-gujarat-made-using-rice-healthy-1794457951.jpg');





