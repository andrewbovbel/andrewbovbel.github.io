export const studySpots = [
  // Libraries
  {
    id: '1',
    name: 'Thode Library',
    location: 'https://maps.app.goo.gl/6m1tKQHbCkHSu8q26', // User will fill in address
    type: 'Library',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Quiet Spaces', 'Study Carrels', 'Printing'],
    rating: 4.7,
    reviewCount: 142,
    image: '/images/study-spots/1.jpg',
    description: 'Main engineering library with extensive study spaces, individual carrels, and quiet study zones throughout.',
    hours: 'Mon-Thu: 8am-11pm, Fri: 8am-8pm, Sat: 10am-6pm, Sun: 12pm-11pm',
    reviews: [
      {
        id: 'r1',
        author: 'Sarah M.',
        rating: 5,
        date: '2024-01-15',
        comment: 'Best library on campus for focused studying. The quiet atmosphere is perfect for exam prep.'
      },
      {
        id: 'r2',
        author: 'James L.',
        rating: 4,
        date: '2024-01-10',
        comment: 'Great facilities and good WiFi. Can get busy during peak hours but still manageable.'
      }
    ]
  },
  {
    id: '2',
    name: 'Health Science Library',
    location: 'https://maps.app.goo.gl/RorK31719fVRVJNL6', // User will fill in address
    type: 'Library',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Quiet Spaces', 'Medical Resources', 'Group Study Areas'],
    rating: 4.6,
    reviewCount: 98,
    image: '/images/study-spots/2.jpg',
    description: 'Specialized library serving health science programs with dedicated study areas and comprehensive medical collections.',
    hours: 'Mon-Fri: 7am-10pm, Sat: 9am-6pm, Sun: 12pm-10pm',
    reviews: [
      {
        id: 'r3',
        author: 'Emily T.',
        rating: 5,
        date: '2024-01-12',
        comment: 'Excellent resource access and very quiet study environment. Perfect for health science students.'
      }
    ]
  },
  {
    id: '3',
    name: 'Mills Library',
    location: 'https://maps.app.goo.gl/MnC8qvcuhCj5coUN8', // User will fill in address
    type: 'Library',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Quiet Spaces', 'Group Study Rooms', '24/7 Access During Exams'],
    rating: 4.8,
    reviewCount: 167,
    image: '/images/study-spots/3.jpg',
    description: 'Main campus library with multiple floors, group study rooms, and extended hours during exam periods.',
    hours: 'Mon-Thu: 8am-11pm, Fri: 8am-8pm, Sat: 10am-8pm, Sun: 12pm-11pm',
    reviews: [
      {
        id: 'r4',
        author: 'Mike R.',
        rating: 5,
        date: '2024-01-08',
        comment: 'Huge selection of study spaces. Love that it stays open late during exams!'
      }
    ]
  },
  // Quiet Zones
  {
    id: '4',
    name: '6th Floor Mills',
    location: 'https://maps.app.goo.gl/MnC8qvcuhCj5coUN8', // User will fill in address
    type: 'Quiet Zone',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Individual Desks', 'Silent Study'],
    rating: 4.9,
    reviewCount: 89,
    image: '/images/study-spots/4.jpg',
    description: 'Designated quiet zone on the 6th floor of Mills Library. Strict silence policy enforced for maximum focus.',
    hours: 'Mon-Thu: 8am-11pm, Fri: 8am-8pm, Sat: 10am-8pm, Sun: 12pm-11pm',
    reviews: [
      {
        id: 'r5',
        author: 'Alex K.',
        rating: 5,
        date: '2024-01-05',
        comment: 'Absolute silence here. Perfect for when you need zero distractions. My go-to spot for finals.'
      }
    ]
  },
  {
    id: '5',
    name: 'Thode Basement',
    location: 'https://maps.app.goo.gl/7zm2VEetpXZTVpFw7', // User will fill in address
    type: 'Quiet Zone',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Individual Study Carrels', '24/7 Access'],
    rating: 4.7,
    reviewCount: 76,
    image: '/images/study-spots/5.jpg',
    description: 'Basement level quiet study area in Thode Library with individual carrels and excellent lighting for focused work.',
    hours: 'Mon-Thu: 8am-11pm, Fri: 8am-8pm, Sat: 10am-6pm, Sun: 12pm-11pm',
    reviews: [
      {
        id: 'r6',
        author: 'Jessica P.',
        rating: 4,
        date: '2024-01-14',
        comment: 'Very quiet and private carrels. Can be a bit chilly in the basement but great for concentration.'
      }
    ]
  },
  {
    id: '6',
    name: 'Health Science Rooms',
    location: 'https://maps.app.goo.gl/DVPAuN47y5oiTFUw5', // User will fill in address
    type: 'Quiet Zone',
    noiseLevel: 'Quiet',
    bookingRequired: true,
    amenities: ['WiFi', 'Power Outlets', 'Private Rooms', 'Whiteboards', 'Projectors'],
    rating: 4.8,
    reviewCount: 54,
    image: '/images/study-spots/6.png',
    description: 'First floor study rooms in Health Science Library. Reservable private spaces perfect for individual or small group study.',
    hours: 'Mon-Fri: 7am-10pm, Sat: 9am-6pm, Sun: 12pm-10pm',
    reviews: [
      {
        id: 'r7',
        author: 'David W.',
        rating: 5,
        date: '2024-01-11',
        comment: 'Excellent private rooms. Easy to book online and great for when you need guaranteed quiet space.'
      }
    ]
  },
  {
    id: '7',
    name: 'Gerald Hatch Rooms',
    location: 'https://maps.app.goo.gl/kBHHwemrJmkpogDa8', // User will fill in address
    type: 'Quiet Zone',
    noiseLevel: 'Quiet',
    bookingRequired: true,
    amenities: ['WiFi', 'Power Outlets', 'Private Rooms', 'Group Tables', 'Whiteboards'],
    rating: 4.6,
    reviewCount: 63,
    image: '/images/study-spots/7.jpg',
    description: 'Reservable quiet study rooms in Gerald Hatch Building. Ideal for focused individual study or small group collaboration.',
    hours: 'Mon-Fri: 7am-11pm, Sat: 9am-8pm, Sun: 10am-8pm',
    reviews: [
      {
        id: 'r8',
        author: 'Lisa M.',
        rating: 5,
        date: '2024-01-09',
        comment: 'Love booking these rooms. Always quiet and well-maintained. Perfect for exam prep sessions.'
      }
    ]
  },
  // Cafes
  {
    id: '8',
    name: 'Mikels',
    location: 'https://maps.app.goo.gl/dziNXgddtRMGF9xu5', // User will fill in address
    type: 'Cafe',
    noiseLevel: 'Moderate',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Food & Drinks', 'Group Tables', 'Comfortable Seating'],
    rating: 4.5,
    reviewCount: 124,
    image: '/images/study-spots/8.jpg',
    description: 'Popular campus cafe with cozy atmosphere. Great for casual studying with coffee and snacks available.',
    hours: 'Mon-Fri: 7am-9pm, Sat-Sun: 9am-7pm',
    reviews: [
      {
        id: 'r9',
        author: 'Ryan T.',
        rating: 4,
        date: '2024-01-13',
        comment: 'Good coffee and decent WiFi. Can get a bit noisy during lunch rush but great for relaxed studying.'
      }
    ]
  },
  {
    id: '9',
    name: 'Starbucks',
    location: 'https://maps.app.goo.gl/unEYkwhaFTcwnfePA', // User will fill in address
    type: 'Cafe',
    noiseLevel: 'Moderate',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Food & Drinks', 'Various Seating Options'],
    rating: 4.4,
    reviewCount: 156,
    image: '/images/study-spots/9.jpg',
    description: 'Campus Starbucks location with reliable WiFi and convenient coffee options for study sessions.',
    hours: 'Mon-Fri: 6am-9pm, Sat: 7am-8pm, Sun: 8am-8pm',
    reviews: [
      {
        id: 'r10',
        author: 'Emma L.',
        rating: 4,
        date: '2024-01-07',
        comment: 'Standard Starbucks experience. Good for quick study sessions but can be quite busy.'
      }
    ]
  },
  {
    id: '10',
    name: 'Williams',
    location: 'https://maps.app.goo.gl/Fr2argaQGDskKVTy6', // User will fill in address
    type: 'Cafe',
    noiseLevel: 'Moderate',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Food & Drinks', 'Outdoor Seating', 'Varied Menu'],
    rating: 4.6,
    reviewCount: 98,
    image: '/images/study-spots/10.jpg',
    description: 'Campus dining location with cafe atmosphere. Good for longer study sessions with meal options available.',
    hours: 'Mon-Fri: 7am-8pm, Sat: 8am-6pm, Sun: 9am-6pm',
    reviews: [
      {
        id: 'r11',
        author: 'Chris H.',
        rating: 5,
        date: '2024-01-06',
        comment: 'Great variety of food and good study atmosphere. Love the outdoor seating when weather is nice.'
      }
    ]
  },
  // Scenic
  {
    id: '11',
    name: 'Peter George Window Room',
    location: 'https://maps.app.goo.gl/yaKcR1AWJjdByBqj7', // User will fill in address
    type: 'Scenic',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Natural Light', 'Panoramic Views', 'Comfortable Seating'],
    rating: 4.9,
    reviewCount: 112,
    image: '/images/study-spots/11.jpg',
    description: 'Beautiful second floor window room in Peter George Building with stunning campus views and excellent natural lighting.',
    hours: 'Mon-Fri: 7am-10pm, Sat-Sun: 9am-8pm',
    reviews: [
      {
        id: 'r12',
        author: 'Olivia R.',
        rating: 5,
        date: '2024-01-04',
        comment: 'Absolutely gorgeous views! The natural light makes studying here so pleasant. Highly recommend.'
      }
    ]
  },
  {
    id: '12',
    name: 'Green House',
    location: 'https://maps.app.goo.gl/67RLPCYpb4P67o767', // User will fill in address
    type: 'Scenic',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Natural Setting', 'Plants', 'Peaceful Atmosphere'],
    rating: 4.7,
    reviewCount: 87,
    image: '/images/study-spots/12.png',
    description: 'Unique study space surrounded by greenery. Peaceful natural environment perfect for relaxing study sessions.',
    hours: 'Mon-Fri: 8am-6pm, Sat-Sun: 10am-4pm',
    reviews: [
      {
        id: 'r13',
        author: 'Ben K.',
        rating: 5,
        date: '2024-01-03',
        comment: 'Such a unique and calming study spot. The plants create such a serene atmosphere. Perfect for reading!'
      }
    ]
  },
  {
    id: '13',
    name: 'Math Building',
    location: 'https://maps.app.goo.gl/yGadGXWzk9t6qJSt8', // User will fill in address
    type: 'Scenic',
    noiseLevel: 'Quiet',
    bookingRequired: false,
    amenities: ['WiFi', 'Power Outlets', 'Natural Light', 'Architectural Interest', 'Study Areas'],
    rating: 4.5,
    reviewCount: 73,
    image: '/images/study-spots/13.jpg',
    description: 'Modern math building with scenic views and thoughtfully designed study spaces throughout.',
    hours: 'Mon-Fri: 7am-10pm, Sat: 9am-6pm, Sun: 12pm-8pm',
    reviews: [
      {
        id: 'r14',
        author: 'Sophie W.',
        rating: 4,
        date: '2024-01-02',
        comment: 'Beautiful building with great study spaces. Love the modern design and the views from the upper floors.'
      }
    ]
  }
]

export const filters = {
  types: ['All', 'Library', 'Quiet Zone', 'Cafe', 'Scenic'],
  noiseLevels: ['All', 'Quiet', 'Moderate', 'Lively'],
  amenities: ['WiFi', 'Power Outlets', '24/7 Access', 'Food & Drinks', 'Group Tables', 'Quiet Spaces', 'Private Rooms', 'Booking Required']
}
