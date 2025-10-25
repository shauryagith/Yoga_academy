// src/data/yogaData.ts

// 🧘 Import all local images
import hathaImage from '../assets/id-1.webp';
import vinyasaImage from '../assets/id-2.jpeg';
import yinImage from '../assets/id-3.webp';
import powerImage from '../assets/id-4.jpeg';
import restorativeImage from '../assets/id-5.webp';
import prenatalImage from '../assets/id-6.jpg';

// 👩‍🏫 Instructor photos
import mayaImage from '../assets/instructor-1.jpeg';
import davidImage from '../assets/instructor-2.jpeg';
import sarahImage from '../assets/instructor-3.jpeg';
import priyaImage from '../assets/instructor-4.jpg';

export const contactInfo = {
  phone: '+1-555-YOGA-123',
  whatsapp: '+15557642123',
  email: 'hello@serenityoga.com',
  address:
    'Mangalam Hospital, Near Prikarama Marg, Naka Hanuman Garhi, Zarouna Road, Civil Line-224001',
  whatsappMessage:
    'Hello! I would like to know more about your yoga classes.',
};

export const classes = [
  {
    id: 1,
    title: 'Hatha Yoga',
    description:
      'Traditional yoga focusing on physical postures and breathing techniques. Perfect for beginners and those seeking balance.',
    duration: 60,
    difficulty: 'Beginner',
    image: hathaImage,
    benefits: [
      'Improved flexibility',
      'Stress relief',
      'Better posture',
      'Enhanced breathing',
    ],
  },
  {
    id: 2,
    title: 'Vinyasa Flow',
    description:
      'Dynamic and flowing yoga practice that synchronizes movement with breath. Build strength and endurance.',
    duration: 75,
    difficulty: 'Intermediate',
    image: vinyasaImage,
    benefits: [
      'Cardiovascular health',
      'Muscle toning',
      'Mental clarity',
      'Increased stamina',
    ],
  },
  {
    id: 3,
    title: 'Yin Yoga',
    description:
      'Slow-paced practice with poses held for longer periods. Deep stretching and meditation for relaxation.',
    duration: 90,
    difficulty: 'Beginner',
    image: yinImage,
    benefits: [
      'Deep tissue release',
      'Joint health',
      'Relaxation',
      'Improved flexibility',
    ],
  },
  {
    id: 4,
    title: 'Power Yoga',
    description:
      'Vigorous and fitness-based approach to vinyasa-style yoga. Build strength and burn calories.',
    duration: 60,
    difficulty: 'Advanced',
    image: powerImage,
    benefits: [
      'Strength building',
      'Weight loss',
      'Endurance',
      'Core stability',
    ],
  },
  {
    id: 5,
    title: 'Restorative Yoga',
    description:
      'Gentle practice using props to support the body. Perfect for recovery and stress relief.',
    duration: 75,
    difficulty: 'Beginner',
    image: restorativeImage,
    benefits: [
      'Deep relaxation',
      'Stress reduction',
      'Better sleep',
      'Nervous system balance',
    ],
  },
  {
    id: 6,
    title: 'Prenatal Yoga',
    description:
      'Specially designed for expecting mothers. Safe poses to support pregnancy and prepare for childbirth.',
    duration: 60,
    difficulty: 'Beginner',
    image: prenatalImage,
    benefits: [
      'Pregnancy support',
      'Pelvic floor strength',
      'Birth preparation',
      'Relaxation',
    ],
  },
];

export const instructors = [
  {
    id: 1,
    name: 'Maya Rodriguez',
    bio: 'Certified yoga instructor with a passion for helping students find their inner peace. Specializes in Hatha and Vinyasa styles with over 8 years of experience.',
    image: mayaImage,
    specialization: 'Hatha & Vinyasa',
    experienceYears: 8,
  },
  {
    id: 2,
    name: 'David Chen',
    bio: 'Former athlete turned yoga instructor. Brings dynamic energy to power yoga and vinyasa flow classes, helping students build strength and confidence.',
    image: davidImage,
    specialization: 'Power Yoga',
    experienceYears: 6,
  },
  {
    id: 3,
    name: 'Sarah Williams',
    bio: 'Specializes in restorative and yin yoga. Trained in mindfulness and meditation practices. Sarah creates a nurturing space for deep healing and relaxation.',
    image: sarahImage,
    specialization: 'Yin & Restorative',
    experienceYears: 10,
  },
  {
    id: 4,
    name: 'Priya Patel',
    bio: "Certified prenatal yoga instructor with background in women's wellness. Mother of two who understands the journey of pregnancy firsthand.",
    image: priyaImage,
    specialization: 'Prenatal Yoga',
    experienceYears: 7,
  },
];

export const schedule = [
  { id: 1, classTitle: 'Hatha Yoga', instructor: 'Maya Rodriguez', day: 'Monday', time: '7:00 AM - 8:00 AM', spots: 15 },
  { id: 2, classTitle: 'Power Yoga', instructor: 'David Chen', day: 'Monday', time: '6:00 PM - 7:00 PM', spots: 12 },
  { id: 3, classTitle: 'Vinyasa Flow', instructor: 'Maya Rodriguez', day: 'Tuesday', time: '9:00 AM - 10:15 AM', spots: 15 },
  { id: 4, classTitle: 'Yin Yoga', instructor: 'Sarah Williams', day: 'Tuesday', time: '7:00 PM - 8:30 PM', spots: 10 },
  { id: 5, classTitle: 'Prenatal Yoga', instructor: 'Priya Patel', day: 'Wednesday', time: '10:00 AM - 11:00 AM', spots: 8 },
  { id: 6, classTitle: 'Power Yoga', instructor: 'David Chen', day: 'Wednesday', time: '6:30 PM - 7:30 PM', spots: 12 },
  { id: 7, classTitle: 'Restorative Yoga', instructor: 'Sarah Williams', day: 'Thursday', time: '7:30 PM - 8:45 PM', spots: 10 },
  { id: 8, classTitle: 'Vinyasa Flow', instructor: 'Maya Rodriguez', day: 'Friday', time: '7:00 AM - 8:15 AM', spots: 15 },
  { id: 9, classTitle: 'Hatha Yoga', instructor: 'Maya Rodriguez', day: 'Saturday', time: '9:00 AM - 10:00 AM', spots: 15 },
  { id: 10, classTitle: 'Yin Yoga', instructor: 'Sarah Williams', day: 'Saturday', time: '4:00 PM - 5:30 PM', spots: 10 },
];
