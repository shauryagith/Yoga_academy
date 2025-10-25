import { ArrowRight, Sparkles, Users, Award, Heart } from 'lucide-react';
import { classes } from '../data/yogaData';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 shadow-lg">
              <Sparkles className="text-teal-600" size={18} />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Welcome to Your Wellness Journey</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              Find Your Inner
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent animate-fadeIn">
                Peace & Strength
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Transform your body, calm your mind, and nurture your soul through the ancient practice of yoga
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button
                onClick={() => onNavigate('classes')}
                className="w-full sm:w-auto group bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Classes
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button
                onClick={() => onNavigate('schedule')}
                className="w-full sm:w-auto bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200"
              >
                View Schedule
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Classes Weekly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Popular Classes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Discover the perfect class for your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {classes.slice(0, 3).map((yogaClass, index) => (
              <div
                key={yogaClass.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={yogaClass.image}
                    alt={yogaClass.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-teal-600">
                    {yogaClass.difficulty}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{yogaClass.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{yogaClass.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{yogaClass.duration} minutes</span>
                    <button
                      onClick={() => onNavigate('classes')}
                      className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1 group"
                    >
                      Learn More
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('classes')}
              className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View All Classes
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Join our community and experience the transformative power of yoga
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
