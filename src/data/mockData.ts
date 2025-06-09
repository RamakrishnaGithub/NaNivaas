export type Amenity = 
  | 'wifi' 
  | 'food' 
  | 'ac' 
  | 'tv' 
  | 'laundry' 
  | 'cleaning' 
  | 'parking' 
  | 'gym' 
  | 'study_room' 
  | 'power_backup' 
  | 'security' 
  | 'common_area';

export interface Listing {
  id: string;
  name: string;
  type: 'pg' | 'hostel' | 'coliving';
  gender: 'male' | 'female' | 'unisex';
  location: {
    address: string;
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  description: string;
  price: {
    monthly: number;
    security: number;
  };
  amenities: Amenity[];
  bedOptions: {
    type: string;
    price: number;
    available: number;
    total: number;
  }[];
  rating: number;
  reviews: {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  rules: string[];
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
}

export const amenityLabels: Record<Amenity, string> = {
  wifi: 'Wi-Fi',
  food: 'Food Included',
  ac: 'Air Conditioning',
  tv: 'TV',
  laundry: 'Laundry Service',
  cleaning: 'Room Cleaning',
  parking: 'Parking',
  gym: 'Gym Access',
  study_room: 'Study Room',
  power_backup: 'Power Backup',
  security: '24/7 Security',
  common_area: 'Common Area'
};

export const mockListings: Listing[] = [
  {
    id: '1',
    name: 'Urban Stay PG',
    type: 'pg',
    gender: 'male',
    location: {
      address: '123 Main Street, Koramangala',
      city: 'Bangalore',
      state: 'Karnataka',
      coordinates: {
        lat: 12.9352,
        lng: 77.6245
      }
    },
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1171&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1157&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1169&auto=format&fit=crop'
    ],
    description: 'Modern and comfortable PG accommodation for men in the heart of Koramangala. All basic amenities provided with clean rooms and good food.',
    price: {
      monthly: 9500,
      security: 10000
    },
    amenities: ['wifi', 'food', 'ac', 'laundry', 'cleaning', 'power_backup', 'security'],
    bedOptions: [
      {
        type: 'Single Bed Room',
        price: 12000,
        available: 2,
        total: 5
      },
      {
        type: 'Double Sharing Room',
        price: 9500,
        available: 4,
        total: 10
      },
      {
        type: 'Triple Sharing Room',
        price: 7500,
        available: 6,
        total: 15
      }
    ],
    rating: 4.2,
    reviews: [
      {
        userId: 'u1',
        userName: 'Rahul Sharma',
        rating: 4,
        comment: 'Good facilities and food. Location is convenient for IT professionals.',
        date: '2025-03-15'
      },
      {
        userId: 'u2',
        userName: 'Akash Patel',
        rating: 5,
        comment: 'Best PG I\'ve stayed at. Clean rooms and responsive management.',
        date: '2025-02-22'
      }
    ],
    rules: [
      'No smoking inside the building',
      'Guests allowed only in common areas',
      'Quiet hours from 11 PM to 6 AM',
      'No alcohol permitted on premises'
    ],
    contactInfo: {
      name: 'Suresh Kumar',
      phone: '+91-9876543210',
      email: 'urban.stay@example.com'
    }
  },
  {
    id: '2',
    name: 'Comfort Hostel for Women',
    type: 'hostel',
    gender: 'female',
    location: {
      address: '45 Park Avenue, HSR Layout',
      city: 'Bangalore',
      state: 'Karnataka',
      coordinates: {
        lat: 12.9141,
        lng: 77.6466
      }
    },
    images: [
     'https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?q=80&w=988&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?q=80&w=988&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop'
    ],
    description: 'Safe and secure hostel exclusively for women with all modern amenities. Located in a peaceful neighborhood with good connectivity.',
    price: {
      monthly: 8500,
      security: 9000
    },
    amenities: ['wifi', 'food', 'tv', 'laundry', 'cleaning', 'security', 'study_room', 'common_area'],
    bedOptions: [
      {
        type: 'Double Sharing Room',
        price: 8500,
        available: 6,
        total: 12
      },
      {
        type: 'Four Sharing Room',
        price: 6500,
        available: 8,
        total: 20
      }
    ],
    rating: 4.5,
    reviews: [
      {
        userId: 'u3',
        userName: 'Priya Singh',
        rating: 5,
        comment: 'Very safe and comfortable. The staff is helpful and food is good.',
        date: '2025-04-02'
      },
      {
        userId: 'u4',
        userName: 'Neha Gupta',
        rating: 4,
        comment: 'Clean rooms and good study environment. Would recommend.',
        date: '2025-03-10'
      }
    ],
    rules: [
      'Entry closed after 10 PM',
      'No male visitors allowed beyond reception',
      'Mandatory attendance every evening',
      'Cooking not allowed in rooms'
    ],
    contactInfo: {
      name: 'Lakshmi Devi',
      phone: '+91-8765432109',
      email: 'comfort.hostel@example.com'
    }
  },
  {
    id: '3',
    name: 'TechHub Co-living Space',
    type: 'coliving',
    gender: 'unisex',
    location: {
      address: '78 Tech Park Road, Whitefield',
      city: 'Bangalore',
      state: 'Karnataka',
      coordinates: {
        lat: 12.9698,
        lng: 77.7499
      }
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1170&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1169&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1628744448840-b38439a148a3?q=80&w=1170&auto=format&fit=crop'
    ],
    description: 'Modern co-living space designed for tech professionals and entrepreneurs. Features workspace, high-speed internet, and community events.',
    price: {
      monthly: 15000,
      security: 20000
    },
    amenities: ['wifi', 'ac', 'tv', 'laundry', 'cleaning', 'parking', 'gym', 'common_area', 'power_backup', 'security'],
    bedOptions: [
      {
        type: 'Private Room',
        price: 18000,
        available: 3,
        total: 8
      },
      {
        type: 'Shared Room (2 Person)',
        price: 15000,
        available: 5,
        total: 10
      }
    ],
    rating: 4.7,
    reviews: [
      {
        userId: 'u5',
        userName: 'Vikram Mehta',
        rating: 5,
        comment: 'Perfect for remote workers. Great community and amenities.',
        date: '2025-04-15'
      },
      {
        userId: 'u6',
        userName: 'Anjali Desai',
        rating: 4.5,
        comment: 'High-quality facilities and well-maintained. Community events are a plus.',
        date: '2025-03-28'
      }
    ],
    rules: [
      'Respect quiet hours (11 PM - 7 AM)',
      'Keep common spaces clean',
      'Register guests at reception',
      'No pets allowed'
    ],
    contactInfo: {
      name: 'Ravi Shankar',
      phone: '+91-7654321098',
      email: 'techhub.coliving@example.com'
    }
  },
  {
    id: '4',
    name: 'Green View PG',
    type: 'pg',
    gender: 'female',
    location: {
      address: '234 Garden Road, JP Nagar',
      city: 'Bangalore',
      state: 'Karnataka',
      coordinates: {
        lat: 12.9107,
        lng: 77.5928
      }
    },
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1174&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595524106430-66f4c1be52e4?q=80&w=1171&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1612320582996-df6ca81ac09a?q=80&w=1170&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?q=80&w=1170&auto=format&fit=crop'
    ],
    description: 'Peaceful PG accommodation for women with garden views. Homely environment with nutritious food and essential amenities.',
    price: {
      monthly: 8000,
      security: 8000
    },
    amenities: ['wifi', 'food', 'tv', 'laundry', 'cleaning', 'security', 'common_area'],
    bedOptions: [
      {
        type: 'Single Bed Room',
        price: 10000,
        available: 1,
        total: 3
      },
      {
        type: 'Double Sharing Room',
        price: 8000,
        available: 3,
        total: 8
      },
      {
        type: 'Triple Sharing Room',
        price: 6500,
        available: 5,
        total: 12
      }
    ],
    rating: 4.3,
    reviews: [
      {
        userId: 'u7',
        userName: 'Sneha Reddy',
        rating: 4,
        comment: 'Clean and comfortable. Food is homely and tasty.',
        date: '2025-02-28'
      },
      {
        userId: 'u8',
        userName: 'Divya Sharma',
        rating: 4.5,
        comment: 'Good location and peaceful environment. Management is responsive.',
        date: '2025-01-15'
      }
    ],
    rules: [
      'Entry closed after 9:30 PM',
      'No visitors in rooms',
      'Food timings strictly followed',
      'Keep rooms clean and tidy'
    ],
    contactInfo: {
      name: 'Anita Patel',
      phone: '+91-9876543211',
      email: 'green.view@example.com'
    }
  },
  {
    id: '5',
    name: 'Campus Hub Hostel',
    type: 'hostel',
    gender: 'male',
    location: {
      address: '56 College Road, Jayanagar',
      city: 'Bangalore',
      state: 'Karnataka',
      coordinates: {
        lat: 12.9299,
        lng: 77.5935
      }
    },
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1169&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1170&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1080&auto=format&fit=crop'
    ],
    description: 'Affordable hostel for male students with focus on academic environment. Located close to major colleges and educational institutions.',
    price: {
      monthly: 7000,
      security: 7000
    },
    amenities: ['wifi', 'food', 'laundry', 'cleaning', 'study_room', 'power_backup'],
    bedOptions: [
      {
        type: 'Double Sharing Room',
        price: 7000,
        available: 8,
        total: 16
      },
      {
        type: 'Four Sharing Room',
        price: 5500,
        available: 12,
        total: 24
      }
    ],
    rating: 4.0,
    reviews: [
      {
        userId: 'u9',
        userName: 'Suresh Kumar',
        rating: 4,
        comment: 'Good for students. Quiet study environment and decent food.',
        date: '2025-03-05'
      },
      {
        userId: 'u10',
        userName: 'Rajesh Verma',
        rating: 4,
        comment: 'Affordable and well-maintained. Close to my college.',
        date: '2025-02-10'
      }
    ],
    rules: [
      'Study hours 8 PM - 10 PM',
      'Lights out by 11 PM',
      'No loud music or gatherings',
      'Limited internet usage during exam season'
    ],
    contactInfo: {
      name: 'Mohan Rao',
      phone: '+91-8765432108',
      email: 'campus.hub@example.com'
    }
  },
  {
    id: '6',
    name: 'Modern Living Co-spaces',
    type: 'coliving',
    gender: 'unisex',
    location: {
      address: '89 Creative Lane, Indiranagar',
      city: 'Bangalore',
      state: 'Karnataka',
      coordinates: {
        lat: 12.9784,
        lng: 77.6408
      }
    },
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1170&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1092&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f36?q=80&w=1287&auto=format&fit=crop'
    ],
    description: 'Trendy co-living space in the vibrant Indiranagar area. Designed for young professionals and creative individuals with community events.',
    price: {
      monthly: 16000,
      security: 18000
    },
    amenities: ['wifi', 'ac', 'tv', 'laundry', 'cleaning', 'gym', 'common_area', 'security', 'parking'],
    bedOptions: [
      {
        type: 'Private Studio',
        price: 22000,
        available: 2,
        total: 5
      },
      {
        type: 'Private Room',
        price: 16000,
        available: 4,
        total: 10
      },
      {
        type: 'Shared Room (2 Person)',
        price: 12000,
        available: 6,
        total: 12
      }
    ],
    rating: 4.6,
    reviews: [
      {
        userId: 'u11',
        userName: 'Nikhil Jain',
        rating: 5,
        comment: 'Amazing social scene and beautiful interiors. Found great friends here.',
        date: '2025-04-10'
      },
      {
        userId: 'u12',
        userName: 'Meera Nair',
        rating: 4.5,
        comment: 'Excellent location and well-designed spaces. Community events are great.',
        date: '2025-03-22'
      }
    ],
    rules: [
      'Respect other residents',
      'Clean up after using common spaces',
      'Noise levels down after 10 PM',
      'Register overnight guests'
    ],
    contactInfo: {
      name: 'Arjun Kapoor',
      phone: '+91-7654321097',
      email: 'modern.living@example.com'
    }
  }
];

// export const cities = [
//   'Bangalore',
//   'Mumbai',
//   'Delhi',
//   'Chennai',
//   'Hyderabad',
//   'Pune',
//   'Kolkata',
//   'Ahmedabad',
//   'Jaipur',
//   'Kochi'
// ];
export const cities = [
  {id:'all', name: 'All Cities'},
  { id: 'bangalore', name: 'Bangalore' },
  { id: 'mumbai', name: 'Mumbai' },
  { id: 'delhi', name: 'Delhi' },
  { id: 'chennai', name: 'Chennai' },
  { id: 'hyderabad', name: 'Hyderabad' },
  { id: 'pune', name: 'Pune' },
  { id: 'kolkata', name: 'Kolkata' },
  { id: 'ahmedabad', name: 'Ahmedabad' },
  { id: 'jaipur', name: 'Jaipur' },
  { id: 'kochi', name: 'Kochi' },
];


export const featuredCities = [
  {
    name: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1287&auto=format&fit=crop',
    count: 86
  },
  {
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1287&auto=format&fit=crop',
    count: 73
  },
  {
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop',
    count: 65
  },
  {
    name: 'Pune',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1287&auto=format&fit=crop',
    count: 42
  },
];

export const ListingType = [
  {label: 'All Types', value: 'all'},
  {label: 'PG', value: 'pg'},
  {label: 'Hostel', value: 'hostel'},
  {label: 'Co-living', value: 'co-living'},
]

export const ListingGender = [
  {label: 'Any Gender', value: 'all'},
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Unisex', value: 'unisex'},
]