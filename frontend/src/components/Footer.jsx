const Footer = () => {
    return (
      <footer className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 mt-6 py-4 sticky bottom-0 z-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Pern store made with great ❤️ . All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="https://mirzaaslambeg.netlify.app/" className="hover:text-gray-400">My Portfolio</a></li>
              <li><a href="https://aslam-storen-1.onrender.com/" className="hover:text-gray-400">Aslam StoreN Projects</a></li>
    
              <li><a href="https://drive.google.com/file/d/1yG0KXqn_d4JWVxk0w1pbHm0FDO-SlrSX/view?usp=drive_link" className="hover:text-gray-400">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  