export const studySpots = [
  {
    id: '1',
    name: 'Central Library - Quiet Zone',
    location: 'Main Campus, Building A',
    type: 'Library',
    noiseLevel: 'Quiet',
    amenities: ['WiFi', 'Power Outlets', 'Quiet Spaces', '24/7 Access'],
    rating: 4.8,
    reviewCount: 124,
    image: '📚',
    description: 'A dedicated quiet zone on the third floor with individual study carrels and excellent lighting.',
    hours: 'Open 24/7',
    reviews: [
      {
        id: 'r1',
        author: 'Sarah M.',
        rating: 5,
        date: '2024-01-15',
        comment: 'Perfect spot for focused studying. Very quiet and the carrels provide great privacy.'
      },
      {
        id: 'r2',
        author: 'James L.',
        rating: 4,
        date: '2024-01-10',
        comment: 'Great facilities but can get crowded during exam season. Still recommend!'
      }
    ]
  },
  {
    id: '2',
    name: 'Coffee Corner Study Lounge',
    location: 'Student Union, Floor 2',
    type: 'Cafe',
    noiseLevel: 'Moderate',
    amenities: ['WiFi', 'Power Outlets', 'Food & Drinks', 'Group Tables'],
    rating: 4.5,
    reviewCount: 89,
    image: '☕',
    description: 'Comfortable lounge area with great coffee and flexible seating for both individual and group study.',
    hours: 'Mon-Fri: 7am-10pm, Sat-Sun: 9am-8pm',
    reviews: [
      {
        id: 'r3',
        author: 'Emily T.',
        rating: 5,
        date: '2024-01-12',
        comment: 'Love the atmosphere here! Great for casual studying and the coffee keeps me going.'
      }
    ]
  },
  {
    id: '3',
    name: 'Science Building Study Pods',
    location: 'Science Building, Floor 1',
    type: 'Study Pod',
    noiseLevel: 'Quiet',
    amenities: ['WiFi', 'Power Outlets', 'Whiteboards', 'Group Pods'],
    rating: 4.6,
    reviewCount: 67,
    image: '🔬',
    description: 'Modern study pods equipped with whiteboards, perfect for group collaboration.',
    hours: 'Mon-Fri: 8am-9pm, Sat-Sun: 10am-6pm',
    reviews: [
      {
        id: 'r4',
        author: 'Mike R.',
        rating: 4,
        date: '2024-01-08',
        comment: 'Great for group projects. The whiteboards are very useful!'
      }
    ]
  },
  {
    id: '4',
    name: 'Outdoor Study Garden',
    location: 'Behind Engineering Building',
    type: 'Outdoor',
    noiseLevel: 'Moderate',
    amenities: ['WiFi', 'Sheltered Seating', 'Nature View'],
    rating: 4.3,
    reviewCount: 45,
    image: '🌳',
    description: 'Beautiful outdoor space with covered seating areas, perfect for pleasant weather study sessions.',
    hours: 'Open during daylight hours',
    reviews: [
      {
        id: 'r5',
        author: 'Alex K.',
        rating: 5,
        date: '2024-01-05',
        comment: 'Absolutely love studying here when the weather is nice. Very peaceful!'
      }
    ]
  },
  {
    id: '5',
    name: 'Business School Study Rooms',
    location: 'Business Building, Floor 3',
    type: 'Study Room',
    noiseLevel: 'Quiet',
    amenities: ['WiFi', 'Power Outlets', 'Private Rooms', 'Projectors'],
    rating: 4.7,
    reviewCount: 92,
    image: '💼',
    description: 'Reservable private study rooms with projectors and comfortable seating.',
    hours: 'Mon-Fri: 7am-11pm, Sat-Sun: 9am-9pm',
    reviews: [
      {
        id: 'r6',
        author: 'Jessica P.',
        rating: 5,
        date: '2024-01-14',
        comment: 'Perfect for presentations and group work. Easy to reserve online!'
      }
    ]
  },
  {
    id: '6',
    name: 'Art Building Creative Space',
    location: 'Arts Building, Floor 2',
    type: 'Creative Space',
    noiseLevel: 'Moderate',
    amenities: ['WiFi', 'Power Outlets', 'Natural Light', 'Art Supplies'],
    rating: 4.4,
    reviewCount: 56,
    image: '🎨',
    description: 'Bright, inspiring space with large windows and access to art supplies for creative projects.',
    hours: 'Mon-Fri: 8am-8pm, Sat: 10am-4pm',
    reviews: [
      {
        id: 'r7',
        author: 'David W.',
        rating: 4,
        date: '2024-01-11',
        comment: 'Great environment for creative work. The natural light is amazing!'
      }
    ]
  }
]

export const filters = {
  types: ['All', 'Library', 'Cafe', 'Study Pod', 'Outdoor', 'Study Room', 'Creative Space'],
  noiseLevels: ['All', 'Quiet', 'Moderate', 'Lively'],
  amenities: ['WiFi', 'Power Outlets', '24/7 Access', 'Food & Drinks', 'Group Tables', 'Quiet Spaces']
}
