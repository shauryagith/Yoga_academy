import { Calendar, Clock, User, Users } from 'lucide-react';
import { schedule } from '../data/yogaData';
import { useState } from 'react';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const filteredSchedule = selectedDay === 'All'
    ? schedule
    : schedule.filter(s => s.day === selectedDay);

  const groupedByDay = filteredSchedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, typeof schedule>);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Class Schedule
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Find the perfect time for your practice. Classes run throughout the week to fit your schedule.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                selectedDay === day
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="space-y-6 sm:space-y-8">
          {Object.entries(groupedByDay).map(([day, classes]) => (
            <div key={day} className="animate-fadeInUp">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Calendar className="text-teal-600" size={24} />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{day}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {classes.map((classItem) => (
                  <div
                    key={classItem.id}
                    className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                          {classItem.classTitle}
                        </h3>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-teal-600">
                          <Clock size={14} />
                          <span className="font-semibold text-xs sm:text-sm">{classItem.time}</span>
                        </div>
                      </div>
                      <div className="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0">
                        {classItem.spots}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 mb-3 sm:mb-4">
                      <User size={14} />
                      <span className="text-xs sm:text-sm">{classItem.instructor}</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Book Class
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSchedule.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No classes scheduled for this day.</p>
          </div>
        )}

        <div className="mt-10 sm:mt-12 md:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="md:w-1/3">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="text-white" size={40} />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Can't Find a Suitable Time?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Contact us to discuss private sessions or to request additional class times. We're here to accommodate your schedule.
              </p>
              <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
