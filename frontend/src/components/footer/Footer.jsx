const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Programs
          </a>
          <a href="#" className="hover:underline">
            Admissions
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Solker College. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
