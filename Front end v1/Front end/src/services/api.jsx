import axios from 'axios';

// You can keep this for when you switch to the real API
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Mock data
const busesMockData = [
  { id: 1, name: 'Selam Bus', number: 'E123', from: 'Addis A.', to: 'Bahir D.', date: '2024-09-01', status: 'Approved', price: 500 },
  { id: 2, name: 'Goldean Bus', number: 'S456', from: 'Bishoftu', to: 'Arba M.', date: '2024-09-01', status: 'Pending', price: 600 },
];

const busDetailMockData = {
  id: 1,
  name: 'Bus A',
  from: 'City X',
  to: 'City Y',
  journeyDate: '2024-09-01',
  price: 20,
  seats: 50,
};
const ethiopianBuses = [
  {
    id: 1,
    name: "Selam Bus",
    busNumber: "SB001",
    rating: 4,
    description: "Selam Bus is known for offering one of the most comfortable and reliable long-distance travel experiences in Ethiopia. With spacious seats, onboard refreshments, and friendly staff, passengers can enjoy a smooth journey across the scenic landscapes of Ethiopia. The bus service is equipped with modern amenities including reclining seats, charging ports for mobile devices, and air conditioning. Selam Bus operates between major cities like Addis Ababa and Bahir Dar, providing both locals and tourists with a top-tier travel experience. With decades of experience in the transport industry, Selam Bus continues to be a symbol of trust and excellence in Ethiopian public transportation. Whether you're traveling for business or leisure, Selam Bus ensures punctuality, safety, and satisfaction. Their routes cover several key tourist destinations, allowing passengers to explore Ethiopia with comfort and ease. In addition, the company prioritizes customer service, with well-trained staff ready to assist passengers throughout their journey.",
    from: "Addis Ababa",
    to: "Bahir Dar",
    date: "2024-09-01",
    availableSeats: 12,
    image: "https://static.vecteezy.com/system/resources/previews/046/603/373/non_2x/green-energy-bus-powered-by-biofuel-in-a-lush-cityscape-emphasizing-eco-friendly-urban-mobility-suitable-for-sustainable-transport-and-eco-initiatives-sustainable-carbon-reduction-photo.jpeg",
  },
  {
    id: 2,
    name: "Sky Bus",
    busNumber: "SK456",
    rating: 3.5,
    description: "Sky Bus is a luxury travel option for those seeking a higher standard of service and comfort on their journeys across Ethiopia. Known for its spacious seating, premium interior design, and onboard entertainment systems, Sky Bus offers an elevated travel experience. Passengers can enjoy panoramic views of Ethiopia’s stunning landscapes from the comfort of their seats, as well as access to free Wi-Fi, individual air conditioning controls, and power outlets. Sky Bus is a popular choice for longer routes such as Addis Ababa to Mekelle, where travelers appreciate the high level of service. The company places a strong emphasis on passenger safety, with experienced drivers and well-maintained buses that undergo regular inspections. Sky Bus also provides a premium customer support experience, with assistance available at any point during your trip. The bus service aims to redefine intercity travel by combining luxury and practicality, ensuring that passengers arrive at their destinations refreshed and relaxed. Sky Bus has earned a reputation for being punctual, professional, and committed to quality service.",
    from: "Addis Ababa",
    to: "Mekelle",
    date: "2024-09-01",
    availableSeats: 20,
    image: "https://www.shutterstock.com/image-photo/bus-driving-moving-high-motion-260nw-2353562455.jpg",
  },
  {
    id: 3,
    name: "Golden Bus",
    busNumber: "GB789",
    rating: 1.7,
    description: "Golden Bus stands out as an affordable yet comfortable travel option for those looking to explore Ethiopia on a budget without compromising on quality. With a focus on providing a safe and reliable service, Golden Bus has grown to be a trusted name in Ethiopian transport. The bus interiors are designed for long journeys, with cushioned seats and sufficient legroom to ensure passenger comfort. In addition, Golden Bus offers complimentary snacks and beverages during the trip, ensuring that passengers are well cared for throughout the journey. Golden Bus operates primarily on routes like Gondar to Addis Ababa, serving passengers from different walks of life. The service is also popular with tourists looking to visit some of Ethiopia’s historic landmarks. With a focus on affordability, Golden Bus provides value for money, allowing passengers to travel to distant locations without exceeding their budget. Despite its low-cost fares, the company places great importance on safety and punctuality, with a reliable schedule that ensures passengers reach their destination on time. The company’s reputation for reliability has made it a popular choice for both local and international travelers.",
    from: "Gondar",
    to: "Addis Ababa",
    date: "2024-09-02",
    availableSeats: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokzSu_p4PEf01gls4Pd_CL2O-bSGtGMR7nQ&s",
  },
  {
    id: 4,
    name: "Ethio Bus",
    busNumber: "EB321",
    rating: 4.6,
    description: "Ethio Bus is a reliable and trusted transport service that connects the major cities of Ethiopia with ease. Known for its dependable service, Ethio Bus has become a popular choice for Ethiopians traveling for business, family visits, or tourism. The bus features comfortable seating arrangements, with ample legroom and reclining options to make the journey more pleasant. Ethio Bus also offers free onboard Wi-Fi, allowing passengers to stay connected throughout the trip. In addition, passengers can enjoy the scenic beauty of Ethiopia as the bus routes often pass through breathtaking landscapes, making each trip as much about the journey as the destination. Ethio Bus is committed to providing a safe and punctual service, with drivers who are well-trained and experienced in navigating Ethiopia’s roads. The company also adheres to a strict maintenance schedule, ensuring that their fleet is always in top condition. Whether you’re traveling from Adama to Hawassa or other parts of Ethiopia, Ethio Bus ensures a seamless travel experience, with a focus on customer satisfaction and safety.",
    from: "Adama",
    to: "Hawassa",
    date: "2024-09-03",
    availableSeats: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5bDovbTDwZQ_9JW9g_JPzLdsnXLWIKJgAA&s",
  },
  {
    id: 5,
    name: "Limalimo Bus",
    busNumber: "LL123",
    rating: 2.9,
    description: "Limalimo Bus is synonymous with premium travel in Ethiopia, offering a luxurious ride for passengers who prioritize comfort and elegance. This top-of-the-line bus service is designed for those who seek the best in transportation, with fully reclining seats, gourmet refreshments, and onboard entertainment. Limalimo Bus operates on key routes such as Addis Ababa to Dire Dawa, ensuring that passengers have a premium experience throughout the journey. The bus is equipped with all the modern conveniences, including Wi-Fi, USB charging ports, and climate control. The company’s commitment to excellence is evident in every aspect of its service, from the quality of the buses to the professionalism of its staff. Limalimo Bus prides itself on creating a stress-free travel experience, with timely departures and arrivals, and a focus on ensuring passenger comfort from start to finish. This high-end bus service is particularly popular with business travelers and tourists looking for a touch of luxury during their Ethiopian adventures. For those who value top-tier service and superior comfort, Limalimo Bus is the ideal choice for travel.",
    from: "Addis Ababa",
    to: "Dire Dawa",
    date: "2024-09-04",
    availableSeats: 16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP2-bnhZBS9Fn_L28x1C9iAnPzlegtQ8Klg&s",
  },
  {
    id: 6,
    name: "Abay Bus",
    busNumber: "AB456",
    rating: 4.3,
    description: "Abay Bus is a fast and efficient intercity travel service that provides a balance of affordability and comfort. With a modern fleet of well-maintained buses, Abay Bus is known for its punctuality and adherence to a strict schedule, making it a reliable option for passengers on the go. Whether you are traveling from Addis Ababa to Jimma or another city, Abay Bus ensures a smooth and hassle-free journey. Passengers are provided with clean and comfortable seats, as well as friendly customer service from the crew. The company is dedicated to maintaining high standards of safety, with experienced drivers and regular vehicle inspections. Abay Bus also offers onboard entertainment and light refreshments to keep passengers entertained during long trips. With competitive pricing, Abay Bus is an excellent choice for budget-conscious travelers who do not want to sacrifice comfort or quality. The company’s commitment to providing a dependable service has made it a popular choice for both daily commuters and tourists exploring Ethiopia’s many cities and towns.",
    from: "Addis Ababa",
    to: "Jimma",
    date: "2024-09-05",
    availableSeats: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O6ZPzrsysLmsLhwCGM69j3DN6NKgcAg358bb4Mh_zGv9ylTQ3PzbyejFyEy7L6yxcLQ&usqp=CAU",
  },
  // Add remaining buses similarly with detailed descriptions
];
const bookingsMockData = {
  success: true,
  message: 'Booking Successful!',
};
// Initialize mock users in localStorage
const mockUsers = [
  { id: 1, email: 'admin@gmail.com', password: 'admin', role: 'admin' },
  { id: 2, email: 'user@gmail.com', password: 'user', role: 'passenger' },
  { id: 3, email: 'company@gmail.com', password: 'company', role: 'busCompany' },
  // Add more mock users if needed
];
// Store mock users in localStorage
localStorage.setItem('users', JSON.stringify(mockUsers));
const addUser = (email, password, role = 'passenger') => {
  // Retrieve existing users from localStorage or initialize as an empty array
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Determine the next available ID
  const nextId = users.length ? Math.max(users.map(user => user.id)) + 1 : 1;

  // Create the new user object
  const newUser = {
    id: nextId,
    email: email,
    password: password, // Store hashed passwords in real scenarios
    role: role
  };

  // Add new user to the list
  users.push(newUser);

  // Store updated users list back to localStorage
  localStorage.setItem('users', JSON.stringify(users));
  
  console.log('User added:', newUser);
};


export const login = (data) => {
  console.log('Login Data:', data);

  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Find user matching email and password
  const user = users.find(user => user.email === data.email && user.password === data.password);

  if (!data.email || !data.password) {
    return Promise.resolve({ data: { token: false, message: "Email and Password are required!" } });
  }
  
  if (user) {
    return Promise.resolve({
      data: { 
        token: user.role, // Use role as token for simplicity
        user: { id: user.id, email: user.email, role: user.role } 
      }
    });
  }

  return Promise.resolve({ data: { token: false, message: "Invalid email or password!" } });
};

export const register = (data) => {
  console.log('Register Data:', data);
  
  // Store the registration data in localStorage
  addUser(data.email, data.password);
  
  // Simulate a successful response
  return Promise.resolve({ data: { success: true, message: 'Registration Successful!' } });
};


export const getBuses = () => {
  console.log('Fetching buses...');
  return Promise.resolve({ data: {bus: busesMockData, success: true }  });
};
export const getBusesList = () => {
  console.log('Fetching buses...');
  return Promise.resolve({ data: {bus: ethiopianBuses, success: true }  });
};

export const getBusById = (id) => {
  console.log(`Fetching bus with ID: ${id}`);
  return Promise.resolve({ data: busDetailMockData });
};

export const bookBus = (data) => {
  console.log('Booking Data:', data);
  return Promise.resolve({ data: bookingsMockData });
};

