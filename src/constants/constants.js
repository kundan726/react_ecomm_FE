import bedInMaking from "../assets/bedInMaking.jpg";
import chair from "../assets/chair.jpg";
import cabinet from "../assets/cabinet.jpg";
import table from "../assets/table.jpg";
import cp_1 from "../assets/cp_1.jpg";
import cp_2 from "../assets/cp_2.jpg";
const PAGES = [
  { name: "HOME", path: "/", visibleTo: "all" },
  // { name: "ABOUT US", path: "/about", visibleTo: "all" },
  // { name: "CONTACT US", path: "/contact", visibleTo: "all" },
  { name: "DASHBOARD", path: "/dashboard", visibleTo: ["admin", "seller"] },
  // { name: "PRODUCT", path: "/product", visibleTo: ["user"] },
  { name: "LOGIN", path: "/login", visibleTo: "all" },
  { name: "SIGNUP", path: "/signup", visibleTo: "all" },
];

const CARD_DATA = [
  {
    title: "Wooden Bed",
    description:
      "Handcrafted from the finest oak, this bed adds a rustic charm to your home.",
    imageUrl: bedInMaking,
    bgColor: "rgb(229, 228, 226)",
  },
  {
    title: "Wooden Table",
    description:
      "Handcrafted from the finest oak, this table adds a rustic charm to your home.",
    imageUrl: table,
    bgColor: "rgb(229, 228, 226)",
  },
  {
    title: "Custom Cabinetry",
    description:
      "Made-to-order cabinetry designed to fit your space and style.",
    imageUrl: cabinet,
    bgColor: "rgb(229, 228, 226)",
  },
  {
    title: "Elegant Chair",
    description: "An elegantly designed wooden chair for your living room.",
    imageUrl: chair,
    bgColor: "rgb(229, 228, 226)",
  },
];

const TEAM_MEMBERS = [
  {
    title: "Rahul Yadav",
    description:
      "A master carpenter with a passion for craftsmanship, Rahul Yadav specializes in creating bespoke wooden furniture that perfectly blends functionality and aesthetic appeal. With years of experience in the trade, he is dedicated to transforming your vision into reality, ensuring every piece is crafted with precision and care. Whether its custom furniture or intricate woodwork, Rahuls commitment to quality and detail shines through in every project.",
    imageUrl: cp_1,
    bgColor: "rgb(229, 228, 226)",
  },
  {
    title: "Sunil Tiwari",
    description:
      "A master carpenter with a passion for craftsmanship, Sunil Tiwari specializes in creating bespoke wooden furniture that perfectly blends functionality and aesthetic appeal. With years of experience in the trade, he is dedicated to transforming your vision into reality, ensuring every piece is crafted with precision and care. Whether its custom furniture or intricate woodwork, Sunil commitment to quality and detail shines through in every project.",
    imageUrl: cp_2,
    bgColor: "rgb(229, 228, 226)",
  },
];

const DASHBOARD_MENU = [
  // "DASHBOARD",
  "ADD PRODUCT",
  "VIEW PRODUCTS",
  "ANALYTICS",
  "ORDER LIST"
];

const PRODUCTS = [
  {
    id: 1,
    productName: "Wireless Headphones",
    productPrice: "89.99",
    productImage: chair,
    productDescription:
      "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    productName: "Bluetooth Speaker",
    productPrice: "49.99",
    productImage: chair,
    productDescription:
      "Portable Bluetooth speaker with superior sound quality.",
  },
  {
    id: 3,
    productName: "Smart Watch",
    productPrice: "199.99",
    productImage: chair,
    productDescription: "Feature-packed smart watch with fitness tracking.",
  },
  {
    id: 4,
    productName: "4K Ultra HD TV",
    productPrice: "599.99",
    productImage: chair,
    productDescription:
      "Experience stunning picture quality with our 4K Ultra HD TV.",
  },
  {
    id: 5,
    productName: "Laptop Stand",
    productPrice: "29.99",
    productImage: chair,
    productDescription: "Ergonomic laptop stand to improve your workspace.",
  },
  {
    id: 6,
    productName: "Gaming Mouse",
    productPrice: "39.99",
    productImage: chair,
    productDescription: "Precision gaming mouse with customizable buttons.",
  },
  {
    id: 7,
    productName: "Mechanical Keyboard",
    productPrice: "79.99",
    productImage: chair,
    productDescription: "Responsive mechanical keyboard with RGB lighting.",
  },
  {
    id: 8,
    productName: "External Hard Drive",
    productPrice: "99.99",
    productImage: chair,
    productDescription: "Portable external hard drive for extra storage.",
  },
  {
    id: 9,
    productName: "USB-C Hub",
    productPrice: "29.99",
    productImage: chair,
    productDescription: "Multi-port USB-C hub for connectivity.",
  },
  {
    id: 10,
    productName: "Wireless Charger",
    productPrice: "19.99",
    productImage: chair,
    productDescription: "Fast wireless charger for your devices.",
  },
];

const ORDER_LIST = [
  {
    "orderId": "ORD123456",
    "customerName": "John Doe",
    "orderStatus": "Pending",
    "orderDateTime": "2024-09-30T14:35:00",
    "totalAmount": 150.75,
    "paymentStatus": "Pending",
    "productName": "Wireless Mouse"
  },
  {
    "orderId": "ORD123457",
    "customerName": "Jane Smith",
    "orderStatus": "Shipped",
    "orderDateTime": "2024-09-29T10:20:00",
    "totalAmount": 245.50,
    "paymentStatus": "Completed",
    "productName": "Laptop"
  },
  {
    "orderId": "ORD123458",
    "customerName": "Alice Brown",
    "orderStatus": "Delivered",
    "orderDateTime": "2024-09-28T18:05:00",
    "totalAmount": 75.20,
    "paymentStatus": "Completed",
    "productName": "Bluetooth Speaker"
  },
  {
    "orderId": "ORD123459",
    "customerName": "Michael Johnson",
    "orderStatus": "Canceled",
    "orderDateTime": "2024-09-27T09:15:00",
    "totalAmount": 120.99,
    "paymentStatus": "Refunded",
    "productName": "Smartphone Case"
  },
  {
    "orderId": "ORD123460",
    "customerName": "Emma Williams",
    "orderStatus": "Pending",
    "orderDateTime": "2024-09-30T12:45:00",
    "totalAmount": 99.99,
    "paymentStatus": "Pending",
    "productName": "Headphones"
  },
  {
    "orderId": "ORD123456",
    "customerName": "John Doe",
    "orderStatus": "Pending",
    "orderDateTime": "2024-09-30T14:35:00",
    "totalAmount": 150.75,
    "paymentStatus": "Pending",
    "productName": "Wireless Mouse"
  },
  {
    "orderId": "ORD123457",
    "customerName": "Jane Smith",
    "orderStatus": "Shipped",
    "orderDateTime": "2024-09-29T10:20:00",
    "totalAmount": 245.50,
    "paymentStatus": "Completed",
    "productName": "Laptop"
  },
  {
    "orderId": "ORD123458",
    "customerName": "Alice Brown",
    "orderStatus": "Delivered",
    "orderDateTime": "2024-09-28T18:05:00",
    "totalAmount": 75.20,
    "paymentStatus": "Completed",
    "productName": "Bluetooth Speaker"
  },
  {
    "orderId": "ORD123459",
    "customerName": "Michael Johnson",
    "orderStatus": "Canceled",
    "orderDateTime": "2024-09-27T09:15:00",
    "totalAmount": 120.99,
    "paymentStatus": "Refunded",
    "productName": "Smartphone Case"
  },
  {
    "orderId": "ORD123460",
    "customerName": "Emma Williams",
    "orderStatus": "Pending",
    "orderDateTime": "2024-09-30T12:45:00",
    "totalAmount": 99.99,
    "paymentStatus": "Pending",
    "productName": "Headphones"
  }
]

const ORDERLIST_TABLE_HEAD = ['ORDER ID','PRODUCT NAME','CUSTOMER NAME','ORDER STATUS','ORDER DATE AND TIME','TOTAL AMOUNT','PAYMENT STATUS']
export { PAGES, CARD_DATA, TEAM_MEMBERS, DASHBOARD_MENU, PRODUCTS, ORDER_LIST,ORDERLIST_TABLE_HEAD };
