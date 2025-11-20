
import {  useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut , ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpeg';




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isFiataOpen, setIsFiataOpen] = useState(false);
 
  const [language, setLanguage] = useState("ar")
  const location = useLocation();
  const { t, i18n } = useTranslation();
 

//   const navItems = [t('home'),t('courses'),t('news'),t('contactUs')];
  const navItemsMap: { [key: string]: string } = {
    home:t('home'),
     courses: t('courses'),
    news:t('news'),
    contact:'contactUs'
  };

 const navigation = [
    { name: 'header.home', href: '/' },
    { name: 'header.about', href: '/about' },
    { name: 'header.services', href: '/services' },
  ];

  const moreNavigation = [
    { name: 'header.news', href: '/all-news' },
    { name: 'header.contact', href: '/contact' },
    { name: 'header.partnerships', href: '/partnerships' },
    { name: 'FIATA', href: '/fiata' },
  ];
  const allNavigation = [
      { name: 'header.home', href: '/' },
    { name: 'header.about', href: '/about' },
    { name: 'header.services', href: '/services' },
    { name: 'header.news', href: '/all-news' },
    { name: 'header.contact', href: '/contact' },
    { name: 'header.partnerships', href: '/partnerships' },

  ];

  const fiataNavigation = [
    { name: 'FIATA Home', href: '/fiata' },
    { name: 'About FIATA', href: '/fiata/about' },
    { name: 'JLA as FIATA Member', href: '/fiata/jla-member' },
    { name: 'Diploma Programs', href: '/fiata/programs' },
    { name: 'Diploma in Freight Forwarding', href: '/fiata/diploma-details' },
    { name: 'Industry Updates', href: '/fiata/updates' },
    { name: 'Media Centre', href: '/fiata/media' },
    { name: 'Diploma Holders', href: '/fiata/holders' },
    { name: 'Certified Experts', href: '/fiata/experts' },
    { name: 'FAQs', href: '/fiata/faqs' },
    { name: 'Contact', href: '/fiata/contact' },
  ];


   const memberNavigation = [
    { name: 'header.dashboard', href: '/member-dashboard' },
    { name: 'header.directory', href: '/member-directory' },
    { name: 'header.resources', href: '/member-resources' },
  ];

  const isActive = (path: string) => location.pathname === path;
    const changeLanguage = () => {
    if (language == "en") {
      setLanguage("ar");
      i18n.changeLanguage("ar");
    }else{
      setLanguage("en");
      i18n.changeLanguage("en");
    }
  }




  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt={t("header.associationName")} className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xs lg:text-sm font-semibold text-gray-900"> 
                {t("header.associationName")}
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-2">
            {allNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-2 text-xs  font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {t(item.name)}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsFiataOpen(!isFiataOpen)}
                className="flex items-center px-2 py-2 text-xs font-medium text-gray-700 hover:text-red-600"
              >
                FIATA
                <ChevronDown
                  className={`h-3 w-3 ml-1 transition-transform ${isFiataOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isFiataOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {fiataNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 text-sm ${
                        isActive(item.href)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsFiataOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {false? (
           <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
                {memberNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {t(item.name)}
                  </Link>
                ))}
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{t("header.memberName")}</span>
                  <button
                    // onClick={logout}
                    className="p-1 text-gray-600 hover:text-red-600 transition-colors"
                    title={t("header.logout")}
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/member-login"
                className="ml-8 bg-red-600 text-white px-2 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                {t("header.memberLogin")}
              </Link>
            )}
              <button onClick={() => changeLanguage()} className=" text-sm font-medium px-1 py-2 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200  ">
                    {language=="en"?"العربيه":"English"}
                  </button>
          </nav>

          {/* Mobile Navigation */}
         <div className="lg:hidden flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-1 text-xs md:text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-red-600 bg-red-50 rounded'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
             {/* <button onClick={() => changeLanguage()} className=" text-xs px-1 py-1 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200  ">                     {language=="en"?"Arabic":"الإنجليزية"}
                   </button> */}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center px-2 py-1 text-xs  text-gray-700 hover:text-red-600"
              >
                {t("header.more")}
                <ChevronDown
                  className={`h-3 w-3 ml-1 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMoreOpen && (
                <div className="absolute left-3 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {moreNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 text-sm ${
                        isActive(item.href)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {t(item.name)}
                    </Link>
                  ))}
                   <button onClick={() => changeLanguage()} className="block  px-4 py-2 text-sm  text-gray-700 hover:text-red-600 hover:bg-gray-50 "> {language=="en"?"Arabic":"الإنجليزية"}
                   </button>

                  {false ? (
                    <>
                      <div className="border-t my-2"></div>
                      <div className="px-4 py-2 text-xs text-gray-500 font-medium">
                        {t("header.memberArea")}
                      </div>

                      {memberNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block px-4 py-2 text-sm ${
                            isActive(item.href)
                              ? 'text-green-600 bg-green-50'
                              : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMoreOpen(false)}
                        >
                          {t(item.name)}
                        </Link>
                      ))}
                         

                      <button
                        onClick={() => {
                          // logout();
                          setIsMoreOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        {t("header.logout")}
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="border-t my-2"></div>
                      <Link
                        to="/member-login"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {t("header.memberLogin")}
                      </Link>
                    </>
                  )}
                </div>
              )}
             
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;