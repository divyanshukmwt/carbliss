import BlackCherry from "../../assets/Images/BlackCherry.png";
import BlackRaspberry from "../../assets/Images/BlackRaspberry.png";
import Lemon from "../../assets/Images/Lemon.png";
import Mango from "../../assets/Images/Mango.png";
import Watermelon from "../../assets/Images/Watermelon.png";
import LemonLime from "../../assets/Images/LemonLime.png";
import Peach from "../../assets/Images/Peach.png";
import Pineapple from "../../assets/Images/Pineapple.png";
import Cranberry from "../../assets/Images/Cranberry.png";


const drinkFlavors = [
  {
    id: 1,
    name: "Black Cherry",
    img: BlackCherry,
    pngImg: BlackCherry,
    rating: 4.6,
    price: 159,
    bgGradient: "radial-gradient(circle, #ff5e84, #cb416b, #992157, #660c3e, #3d0028)",
    about: "Indulge in the deep, bold flavor of Carbliss Black Cherry — a rich and juicy cocktail that balances natural sweetness with a hint of tartness. With every sip, you get a rush of dark cherry essence that’s smooth, crisp, and refreshingly clean. Crafted without sugar, carbs, or artificial nonsense, this ready-to-drink cocktail is perfect for those who crave flavor without compromise.",
    ingredients: ["Carbonated water", "Vodka", "Natural black cherry flavor", "Citric acid"]
  },
  {
    id: 2,
    name: "Black Raspberry",
    img: BlackRaspberry,
    pngImg: BlackRaspberry,
    rating: 4.3,
    price: 129,
    bgGradient: "radial-gradient(circle, #b966c9, #8c46a3, #602f7f, #3a1c5c, #1d0a3a)",
    about: "Sweet, tart, and mysteriously cool — Black Raspberry is the rockstar your taste buds never knew they needed. It's perfectly balanced with bold fruitiness and crisp refreshment that feels luxurious with every sip.",
    ingredients: ["Carbonated water", "Vodka", "Natural black raspberry flavor", "Citric acid"]
  },
  {
    id: 3,
    name: "Mango",
    img: Mango,
    pngImg: Mango,
    rating: 4.8,
    price: 179,
    bgGradient: "radial-gradient(circle, #ffd347, #fcb200, #e88e00, #c16700, #923e00)",
    about: "A tropical explosion of juicy mango magic. It’s sunshine in a sip — exotic, bold, and summer-party ready. This drink is designed to transport you to beachside vibes with just one pour.",
    ingredients: ["Carbonated water", "Vodka", "Natural mango flavor", "Citric acid"]
  },
  {
    id: 4,
    name: "Lemon",
    img: Lemon,
    pngImg: Lemon,
    rating: 4.2,
    price: 119,
    bgGradient: "radial-gradient(circle, #fff780, #ffe600, #ffd000, #d6b000, #a68900)",
    about: "Zesty, sharp, and ultra-refreshing — Lemon brings the perfect citrus punch to light up your day like a vibe bomb. It’s clean, simple, and classic — yet far from boring.",
    ingredients: ["Carbonated water", "Vodka", "Natural lemon flavor", "Citric acid"]
  },
  {
    id: 5,
    name: "Watermelon",
    img: Watermelon,
    pngImg: Watermelon,
    rating: 4.5,
    price: 149,
    bgGradient: "radial-gradient(circle, #ff8fa3, #ff5e7d, #e6325c, #b7123e, #770020)",
    about: "Juicy, fresh, and full of chill — Watermelon is the ultimate summer flavor. Sweet, hydrating, and made to refresh, it’s like biting into a slice of cool watermelon on a hot day.",
    ingredients: ["Carbonated water", "Vodka", "Natural watermelon flavor", "Citric acid"]
  },
  {
    id: 6,
    name: "Peach",
    img: Peach,
    pngImg: Peach,
    rating: 4.4,
    price: 139,
    bgGradient: "radial-gradient(circle, #ffe0b3, #ffc285, #ffa15c, #ff8139, #ff601f)",
    about: "Smooth and juicy peach with flirty vibes. It's that golden-hour sip you’ll crave all year round. Sweet with sass, this flavor delivers comfort and fun in one fizzy burst.",
    ingredients: ["Carbonated water", "Vodka", "Natural peach flavor", "Citric acid"]
  },
  {
    id: 7,
    name: "Pineapple",
    img: Pineapple,
    pngImg: Pineapple,
    rating: 4.7,
    price: 169,
    bgGradient: "radial-gradient(circle, #f8fc00, #c7d807, #9bb40b, #73910b, #4f6f09)",
    about: "A tropical island in every sip. Pineapple is bold, tangy, sweet, and ready to bring the beach to you. It’s the taste of a getaway — vibrant and unforgettable.",
    ingredients: ["Carbonated water", "Vodka", "Natural pineapple flavor", "Citric acid"]
  },
  {
    id: 8,
    name: "Cranberry",
    img: Cranberry,
    pngImg: Cranberry,
    rating: 4.5,
    price: 189,
    bgGradient: "radial-gradient(circle, #ff6b6b, #d93f3f, #aa1a1a, #7c0000, #520000)",
    about: "Wild, fruity, and totally unique — Cranberry packs a punch of flavor that’ll leave you wanting another bottle. Sharp yet smooth, it’s a bold flavor journey in a can.",
    ingredients: ["Carbonated water", "Vodka", "Natural cranberry flavor", "Citric acid"]
  },
  {
    id: 9,
    name: "Lemon Lime",
    img: LemonLime,
    pngImg: LemonLime,
    rating: 4.6,
    price: 139,
    bgGradient: "radial-gradient(circle, #e9ff99, #caff77, #a8ff4e, #79e81b, #3eb300)",
    about: "Lemon-Lime is pure fizz and zest. A citrus duo that’s equal parts tangy and smooth — made to keep it cool, clean, and delicious. A go-to for anyone who loves light and lively.",
    ingredients: ["Carbonated water", "Vodka", "Natural lemon and lime flavors", "Citric acid"]
  }
];


export default drinkFlavors;
