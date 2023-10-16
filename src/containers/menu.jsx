import * as React from "react";
import { BsSearch, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaBusinessTime, FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { MdTravelExplore, MdFastfood } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export const Menu = [
 {
  title: 'Home',
  path: '/',
  icon: <FaHome/>,
  cName: 'nav-text'
 },
 {
  title: 'Categories',
  path: '/category',
  icon: <BiSolidCategory/>,
  cName: 'nav-text'
 },
 {
  title: 'Travel',
  path: '/travel',
  icon: <MdTravelExplore/>,
  cName: 'nav-text'
 },
 {
  title: 'Food',
  path: '/food',
  icon: <MdFastfood/>,
  cName: 'nav-text'
 },
 {
  title: 'Technology',
  path: '/technology',
  icon: <GiTechnoHeart/>,
  cName: 'nav-text'
 },
 {
  title: 'Business',
  path: '/business',
  icon: <FaBusinessTime/>,
  cName: 'nav-text'
 },
]
  // return (
    // <div className={`${isMenuOpen ? "menu-open" : ""}`}>
    //   <button
    //     data-drawer-target="sidebar-multi-level-sidebar"
    //     data-drawer-toggle="sidebar-multi-level-sidebar"
    //     aria-controls="sidebar-multi-level-sidebar"
    //     type="button"
    //     class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //   >
    //     {/* <span className="sr-only">Open sidebar</span> */}
    //     <svg
    //       className="w-6 h-6"
    //       aria-hidden="true"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         clip-rule="evenodd"
    //         fill-rule="evenodd"
    //         d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    //       ></path>
    //     </svg>
    //   </button>

    //   <aside
    //     id="sidebar-multi-level-sidebar"
    //     className="fixed top-0 right-0 z-40 w-70 h-screen transition-transform -translate-x-full sm:translate-x-0"
    //     aria-label="Sidebar"
    //   >
    //     <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    //       <ul className="space-y-2 font-medium">
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <i className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
    //               <FaHome className="w-5 h-5" />
    //             </i>
    //             <span className="ml-3">Home</span>
    //           </a>
    //         </li>
    //         <li>
    //           <div
    //             type="button"
    //             className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //             aria-controls="dropdown-example"
    //             data-collapse-toggle="dropdown-example"
    //           >
    //             <i
    //               className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               viewBox="0 0 18 21"
    //             >
    //               <BiSolidCategory className="w-5 h-5" />{" "}
    //             </i>
    //             <span className="flex-1 ml-3 text-left whitespace-nowrap">
    //               Categories
    //             </span>
    //             <svg
    //               className="w-3 h-3"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 10 6"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="m1 1 4 4 4-4"
    //               />
    //             </svg>
    //           </div>
    //           <ul className="dropdown">
    //             <li>
    //               <a
    //                 href="/travel"
    //                 className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Travel
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="/food"
    //                 className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Food
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="/technology"
    //                 className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Technology
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="/business"
    //                 className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Business
    //               </a>
    //             </li>
                
    //             <DropdownButton
    //               title="Dropdown"
    //               className="flex items-center w-full text-gray-900 normal-case transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //             >
    //               <Dropdown.Item href="/action-1" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> Sub Menu One</Dropdown.Item>
    //               <Dropdown.Item href="/action-2" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    //               Sub Menu Two
    //               </Dropdown.Item >
    //               <Dropdown.Item href="/action-3" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    //               Sub Menu Three
    //               </Dropdown.Item>
    //             </DropdownButton>
    //             {/* <li className="has-children">
    //               <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    //                 <span className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    //                   Dropdown
    //                 </span>
    //                 <svg
    //                   className="w-3 h-3"
    //                   aria-hidden="true"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 10 6"
    //                 >
    //                   <path
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="m1 1 4 4 4-4"
    //                   />
    //                 </svg>{" "}
    //               </div>

    //               <ul className="dropdown">
    //                 <li>
    //                   <a
    //                     href=""
    //                     className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //                   >
    //                     Sub Menu One
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href=""
    //                     className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //                   >
    //                     Sub Menu Two
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href=""
    //                     className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //                   >
    //                     Sub Menu Three
    //                   </a>
    //                 </li>
    //               </ul>
    //             </li> */}
    //           </ul>
    //           <ul id="dropdown-example" className="hidden py-2 space-y-2">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Products
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Billing
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Invoice
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a
    //             href="/travel"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <i className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
    //               <MdTravelExplore className="w-5 h-5" />{" "}
    //             </i>
    //             <span className="flex-1 ml-3 whitespace-nowrap">Travel</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/food"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <i className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
    //               <MdFastfood className="w-5 h-5" />{" "}
    //             </i>
    //             <span className="flex-1 ml-3 whitespace-nowrap">Food</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/technology"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <i className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
    //               <GiTechnoHeart className="w-5 h-5" />{" "}
    //             </i>
    //             <span className="flex-1 ml-3 whitespace-nowrap">
    //               Technology
    //             </span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/business"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <i className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
    //               <FaBusinessTime className="w-5 h-5" />{" "}
    //             </i>
    //             <span className="flex-1 ml-3 whitespace-nowrap">Business</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </aside>
    // </div>
  // );
// };

export default Menu;
