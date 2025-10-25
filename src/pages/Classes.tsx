import { Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { classes } from '../data/yogaData';
import { useState } from 'react';

export default function Classes() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredClasses = selectedDifficulty === 'All'
    ? classes
    : classes.filter(c => c.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Our Yoga Classes
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Choose from our diverse range of classes designed for all levels. Each class is crafted to help you achieve your wellness goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                selectedDifficulty === difficulty
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredClasses.map((yogaClass, index) => (
            <div
              key={yogaClass.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-teal-600">
                      {yogaClass.difficulty}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 flex items-center gap-1">
                      <Clock size={14} />
                      {yogaClass.duration} min
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{yogaClass.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{yogaClass.description}</p>

                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <TrendingUp className="text-teal-600" size={18} />
                    <span className="font-semibold text-sm sm:text-base text-gray-800">Key Benefits:</span>
                  </div>
                  <ul className="space-y-2">
                    {yogaClass.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No classes found for this difficulty level.</p>
          </div>
        )}
      </div>
    </div>
  );
}
