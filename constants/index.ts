export const ADMIN_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_URL;
export const milliSecondToSecondConversionRate = 1000;
export const ACCESS_TOKEN = "persist%3Aroot";
export const TripsOptionsBarData = [
  {
    title: "Trip Orders",
    isActive: true,
    keyVal: ''
  },
  {
    title: "Pending Trips",
    isActive: false,
    keyVal: 'pending-trips'
  },
  {
    title: "Active Trips",
    isActive: false,
    keyVal: 'active-trips'
  },
  {
    title: "Completed Trips",
    isActive: false,
    keyVal: 'completed-trips'
  },
  {
    title: "Cancelled Orders",
    isActive: false,
    keyVal: 'cancelled-orders'
  },
];

export const tripsRowMockData = [
  {
    id: "12344",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
  },
  {
    id: "123444",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
  },
  {
    id: "123443",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
  },
  {
    id: "123442",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
  },
  {
    id: "123414",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
  },
];

export const completedTripsRowMockData = [
  {
    id: "12344",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
    price: "4000",
    rating: 5,
  },
  {
    id: "1244",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
    price: "4000",
    rating: 4,
  },
  {
    id: "14344",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
    price: "4000",
    rating: 2.5,
  },
  {
    id: "12345",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Looking for Driver",
    price: "4000",
    rating: 3,
  },
];


export const cancelledTripsRowMockData = [
  {
    id: "12344",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Cancelled",
    reason: "Long waiting time"
  },
  {
    id: "12334",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Cancelled",
    reason: "Long waiting time"
  },
  {
    id: "12644",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Cancelled",
    reason: "Long waiting time"
  },
  {
    id: "12384",
    origin: "23, Kuvuki Land, Igando",
    destination: "Filmhouse Cinema, Imax, Lekki 23 Kuviki Land, Igando",
    rider: "John Doe",
    driver: "Emeka Anyawu",
    carModel: "Toyota Corolla 2020, Black",
    plateNumber: "ABC123XYS",
    status: "Cancelled",
    reason: "Long waiting time"
  },
];
