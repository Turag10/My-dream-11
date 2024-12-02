const NewsletterSection = () => {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800">Subscribe to our Newsletter</h2>
          
          {/* Description */}
          <p className="mt-4 text-lg text-gray-600">
            Get the latest updates and news right in your inbox!
          </p>
          
          {/* Input and Button */}
          <div className="mt-8 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-r-full shadow-lg hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsletterSection;
  