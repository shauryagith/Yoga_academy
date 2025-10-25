import { Heart, Target, Users, Award, Sparkles, Leaf } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            About Serenity Yoga
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A sanctuary for wellness seekers, where ancient wisdom meets modern practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20 items-center">
          <div className="animate-fadeInUp">
            <img
              src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Yoga Studio"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-4 sm:space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Founded in 2010, Serenity Yoga began with a simple vision: to create a welcoming space where everyone could experience the transformative power of yoga. What started as a small studio with a handful of passionate instructors has grown into a thriving community of over 500 members.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We believe that yoga is for every body, regardless of age, fitness level, or experience. Our diverse range of classes and expert instructors ensure that everyone finds their path to wellness, strength, and inner peace.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Today, we're proud to be one of the most trusted yoga studios in the community, known for our inclusive atmosphere, experienced teachers, and commitment to authentic yoga practice.
            </p>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12 px-4">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Compassion</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We create a nurturing environment where everyone feels welcome, supported, and valued on their wellness journey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 sm:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our certified instructors bring expertise and passion to every class, ensuring high-quality instruction and guidance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 sm:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Community</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We foster connections between students, creating a supportive community that extends beyond the mat.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Authenticity</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We honor traditional yoga practices while making them accessible and relevant to modern life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 sm:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Growth</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We encourage continuous learning and personal development, both on and off the mat.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 sm:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Sustainability</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We're committed to eco-friendly practices and creating a positive impact on our environment.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Join Our Community
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Whether you're a complete beginner or an experienced practitioner, you'll find your place at Serenity Yoga. Start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              View Classes
            </button>
            <button className="bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
