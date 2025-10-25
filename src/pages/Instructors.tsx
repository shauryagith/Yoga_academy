import { Award, Star } from 'lucide-react';
import { instructors } from '../data/yogaData';

export default function Instructors() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Meet Our Instructors
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Our certified yoga instructors bring passion, expertise, and dedication to every class. Learn from the best and transform your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <div className="h-64 sm:h-80 md:h-full relative overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg inline-flex items-center gap-2">
                      <Award className="text-teal-600" size={20} />
                      <span className="font-semibold text-gray-800">{instructor.experienceYears} Years</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/5 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{instructor.name}</h3>
                      <p className="text-teal-600 font-semibold text-base sm:text-lg">{instructor.specialization}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 sm:px-3 py-1 rounded-full flex-shrink-0">
                      <Star className="text-amber-500 fill-amber-500" size={16} />
                      <span className="font-semibold text-amber-700">5.0</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">{instructor.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      Certified Instructor
                    </span>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                      {instructor.experienceYears}+ Years Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Join a Class Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Experience personalized guidance from our expert instructors and take your practice to the next level
          </p>
          <button className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            View Class Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
