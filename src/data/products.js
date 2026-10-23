// Kumo products — price is calculated automatically from cny + weightKg (see src/data/pricing.js)
// To set a price by hand, add  price: 999  to a product.
const products = [
  {
    "id": 1,
    "name": "RC High-Speed 4WD Remote Control Drift Car",
    "category": "Cars & RC",
    "cny": 41.2,
    "weightKg": 1,
    "images": [
      "/products/rc-drift-car-1.jpg",
      "/products/rc-drift-car-2.jpg"
    ],
    "description": "Fast 4WD remote control drift car with extra drift tyres, cones and rechargeable battery.",
    "available": false
  },
  {
    "id": 2,
    "name": "Desktop Mini Smart RC Car",
    "category": "Cars & RC",
    "cny": 24.9,
    "weightKg": 0.4,
    "images": [
      "/products/desktop-mini-rc-car-1.jpg"
    ],
    "description": "Tiny remote control cars with glowing lights, perfect for racing on your desk or floor.",
    "available": false
  },
  {
    "id": 3,
    "name": "Apollo EVO Alloy Model Car",
    "category": "Cars & RC",
    "cny": 7.8,
    "weightKg": 0.4,
    "images": [
      "/products/apollo-alloy-car-1.jpg"
    ],
    "description": "Detailed alloy supercar model with opening doors, comes in a gift box.",
    "available": false
  },
  {
    "id": 4,
    "name": "Electroplated McLaren Senna Model Car",
    "category": "Cars & RC",
    "cny": 6.91,
    "weightKg": 0.3,
    "images": [
      "/products/mclaren-senna-model-1.jpg"
    ],
    "description": "Shiny colour-shifting electroplated sports car model for your collection.",
    "available": false
  },
  {
    "id": 5,
    "name": "Alloy Luxury Race Car Model",
    "category": "Cars & RC",
    "cny": 3.59,
    "weightKg": 0.15,
    "images": [
      "/products/luxury-race-car-model-1.jpg"
    ],
    "description": "Palm-sized alloy race car model with fine details. Great for collectors.",
    "available": false
  },
  {
    "id": 6,
    "name": "Tank 300 1:36 Alloy SUV Model",
    "category": "Cars & RC",
    "cny": 9.1,
    "weightKg": 0.4,
    "images": [
      "/products/tank-300-model-1.jpg"
    ],
    "description": "1:36 scale alloy SUV model with opening doors and pull-back action.",
    "available": false
  },
  {
    "id": 7,
    "name": "Cars All-Stars Toy Car Gift Set",
    "category": "Cars & RC",
    "cny": 11.98,
    "weightKg": 0.6,
    "images": [
      "/products/cars-all-stars-set-1.jpg"
    ],
    "description": "Gift box full of colourful cartoon racing cars. Kids love it.",
    "available": false
  },
  {
    "id": 8,
    "name": "Alloy Toy Car Container Set",
    "category": "Cars & RC",
    "cny": 21.89,
    "weightKg": 1,
    "images": [
      "/products/alloy-car-container-set-1.jpg"
    ],
    "description": "Big container case packed with many alloy toy cars and a play mat.",
    "available": false
  },
  {
    "id": 9,
    "name": "Light-Up 1:64 Car Display Garage",
    "category": "Cars & RC",
    "cny": 22.37,
    "weightKg": 0.8,
    "images": [
      "/products/light-up-garage-1.jpg",
      "/products/light-up-garage-2.jpg"
    ],
    "description": "LED-lit parking garage to display your 1:64 model cars.",
    "available": false
  },
  {
    "id": 10,
    "name": "Premium Gear 5 Luffy Figure",
    "category": "Figures",
    "cny": 19.12,
    "weightKg": 0.8,
    "images": [
      "/products/gear5-luffy-figure-1.jpg"
    ],
    "description": "Premium edition anime figure with lightning effect base.",
    "available": false
  },
  {
    "id": 11,
    "name": "One Piece Theater Luffy Figure",
    "category": "Figures",
    "cny": 8,
    "weightKg": 0.4,
    "images": [
      "/products/one-piece-theater-figure-1.jpg"
    ],
    "description": "Classic Luffy figure with straw hat, comes boxed.",
    "available": false
  },
  {
    "id": 12,
    "name": "Standing Venom Figure",
    "category": "Figures",
    "cny": 18.81,
    "weightKg": 0.6,
    "images": [
      "/products/venom-figure-1.jpg"
    ],
    "description": "Detailed standing Venom statue on a display base.",
    "available": false
  },
  {
    "id": 13,
    "name": "Transforming Robot Truck Figure",
    "category": "Figures",
    "cny": 27.86,
    "weightKg": 0.6,
    "images": [
      "/products/transforming-robot-1.jpg"
    ],
    "description": "Big robot figure that transforms into a truck.",
    "available": false
  },
  {
    "id": 14,
    "name": "30cm Articulated Action Figure",
    "category": "Figures",
    "cny": 9.38,
    "weightKg": 0.3,
    "images": [
      "/products/articulated-figure-30cm-1.jpg"
    ],
    "description": "Fully movable 30cm figure. Great for poses, photos and drawing practice.",
    "available": false
  },
  {
    "id": 15,
    "name": "Beechburg Collectible Blind Box",
    "category": "Figures",
    "cny": 3.94,
    "weightKg": 0.15,
    "images": [
      "/products/beechburg-blind-box-1.jpg"
    ],
    "description": "Cute collectible mini figure in a surprise blind box.",
    "available": false
  },
  {
    "id": 16,
    "name": "Ferrari F1 Building Block Set",
    "category": "Building Blocks",
    "cny": 53.2,
    "weightKg": 1.2,
    "images": [
      "/products/ferrari-f1-blocks-1.jpg"
    ],
    "description": "1:8 scale F1 race car building set, about 61cm long when built.",
    "available": false
  },
  {
    "id": 17,
    "name": "Iron Man Building Block Set",
    "category": "Building Blocks",
    "cny": 59.99,
    "weightKg": 1.5,
    "images": [
      "/products/iron-man-blocks-1.jpg"
    ],
    "description": "Big Iron Man display build with 1297 pieces.",
    "available": false
  },
  {
    "id": 18,
    "name": "Superbike Building Block Set",
    "category": "Building Blocks",
    "cny": 19.8,
    "weightKg": 1.2,
    "images": [
      "/products/motorcycle-blocks-1.jpg"
    ],
    "description": "Detailed sports motorcycle building set.",
    "available": false
  },
  {
    "id": 19,
    "name": "Mini Robot Building Blocks",
    "category": "Building Blocks",
    "cny": 5.03,
    "weightKg": 0.3,
    "images": [
      "/products/mini-robot-blocks-1.jpg",
      "/products/mini-robot-blocks-2.jpg"
    ],
    "description": "Cute little robot building set with tracks.",
    "available": false
  },
  {
    "id": 20,
    "name": "Random Assembly Model Kit",
    "category": "Building Blocks",
    "cny": 15.4,
    "weightKg": 0.5,
    "images": [
      "/products/gundam-random-model-1.jpg"
    ],
    "description": "Surprise model kit to build, a random design in every box.",
    "available": false
  },
  {
    "id": 21,
    "name": "Spider-Man Head Mask with Blinking Eyes",
    "category": "Masks & Costumes",
    "cny": 17.8,
    "weightKg": 0.6,
    "images": [
      "/products/spiderman-blinking-mask-1.jpg",
      "/products/spiderman-blinking-mask-2.jpg"
    ],
    "description": "Wearable mask with moving eyes controlled by a small remote.",
    "available": false
  },
  {
    "id": 22,
    "name": "Spider-Man Fabric Headpiece",
    "category": "Masks & Costumes",
    "cny": 9.11,
    "weightKg": 0.3,
    "images": [
      "/products/spiderman-fabric-headpiece-1.jpg"
    ],
    "description": "Breathable mesh headpiece with a hidden zip, easy to wear.",
    "available": false
  },
  {
    "id": 23,
    "name": "Glowing Retractable Light Sword",
    "category": "Toys",
    "cny": 2.58,
    "weightKg": 0.2,
    "images": [
      "/products/glowing-light-sword-1.jpg"
    ],
    "description": "Swing it to light it up. Retractable and colourful.",
    "available": false
  },
  {
    "id": 24,
    "name": "Musical Duck Slide Track",
    "category": "Toys",
    "cny": 12,
    "weightKg": 0.6,
    "images": [
      "/products/duck-slide-toy-1.jpg"
    ],
    "description": "Ducks climb the stairs and slide down with music and lights.",
    "available": false
  },
  {
    "id": 25,
    "name": "Big Soft Kuromi Plush",
    "category": "Toys",
    "cny": 12.49,
    "weightKg": 0.7,
    "images": [
      "/products/kuromi-big-plush-1.jpg"
    ],
    "description": "Extra large, ultra-soft plush doll. Perfect for hugging.",
    "available": false
  },
  {
    "id": 26,
    "name": "Kids Parking Lot Play Rug 200x150cm",
    "category": "Kids",
    "cny": 10.9,
    "weightKg": 0.8,
    "images": [
      "/products/parking-lot-play-rug-1.jpg"
    ],
    "description": "Large washable city road play mat for toy cars.",
    "available": false
  },
  {
    "id": 27,
    "name": "Superhero Kids Pajama Set",
    "category": "Kids",
    "cny": 16.33,
    "weightKg": 0.3,
    "images": [
      "/products/superhero-pajamas-1.jpg"
    ],
    "description": "Soft cotton long-sleeve pajama sets with superhero designs.",
    "available": false
  },
  {
    "id": 28,
    "name": "Spider-Man Kids Watch",
    "category": "Kids",
    "cny": 13.19,
    "weightKg": 0.1,
    "images": [
      "/products/spiderman-kids-watch-1.jpg"
    ],
    "description": "Stainless steel strap watch with a cute Spider-Man dial.",
    "available": false
  },
  {
    "id": 29,
    "name": "Spider-Man Kids Cutlery Set",
    "category": "Kids",
    "cny": 17,
    "weightKg": 0.3,
    "images": [
      "/products/spiderman-cutlery-set-1.jpg"
    ],
    "description": "Training chopsticks, spoon and fork with a carry case.",
    "available": false
  },
  {
    "id": 30,
    "name": "Ninja Pen Holder",
    "category": "Decor",
    "cny": 2.5,
    "weightKg": 0.1,
    "images": [
      "/products/ninja-pen-holder-1.jpg"
    ],
    "description": "Funny ninja figure that holds your pen. Great desk gift.",
    "available": false
  },
  {
    "id": 31,
    "name": "Mini Panda Desk Ornaments",
    "category": "Decor",
    "cny": 2.08,
    "weightKg": 0.1,
    "images": [
      "/products/panda-desk-ornaments-1.jpg"
    ],
    "description": "Tiny healing panda figures for your desk or shelf.",
    "available": false
  },
  {
    "id": 32,
    "name": "Emirates A380 Model Plane",
    "category": "Decor",
    "cny": 35.8,
    "weightKg": 0.4,
    "images": [
      "/products/emirates-a380-model-1.jpg"
    ],
    "description": "20cm airliner model with stand. Looks great on a shelf.",
    "available": false
  }
];

export default products;
