import React from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import IconWidget from "../../components/Widget/icon_widget";
import SubHeader from "../../components/Body/SubHeader";
import MainProjectFrom from "./components/MainProjectFrom";
import SetMyGoals from "./components/SetMyGoals";
import { useSidebar } from "../../contexts/hooks/useSidebar";

const View = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar(); 

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
        <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
          <main className="min-h-screen dark:bg-gray-700">
            <SubHeader />
            <section className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
              <MainProjectFrom />
              <SetMyGoals />
            </section>
            <section className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="py-4 lg:py-4 antialiased col-span-2 bg-white shadow-lg rounded-lg">
                <div className="max-w-full px-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                      Discussion (20)
                    </h2>
                  </div>
                  <form className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                      <label className="sr-only" htmlFor="comment">
                        Your comment
                      </label>
                      <textarea
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        id="comment"
                        placeholder="Write a comment..."
                        required
                        rows="6"
                      />
                    </div>
                    <button
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                      type="submit">
                      Post comment
                    </button>
                  </form>
                  <article className="p-6 mb-3 text-base bg-white rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            alt="Michael Gough"
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          />
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time dateTime="2022-02-08" pubdate="" title="February 8th, 2022">
                            Feb. 8, 2022
                          </time>
                        </p>
                      </div>
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        data-dropdown-toggle="dropdownComment1"
                        id="dropdownComment1Button"
                        type="button">
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only">Comment settings</span>
                      </button>
                      <div
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="dropdownComment1">
                        <ul
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                          className="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      Very straight-to-point article. Really worth time reading. Thank you!
                      But tools are just the instruments for the UX designers. The knowledge
                      of the design tools are as important as the creation of the design
                      strategy.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                        type="button">
                        <svg
                          aria-hidden="true"
                          className="mr-1.5 w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 20 18"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                  <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            alt="Jese Leos"
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          />
                          Jese Leos
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time dateTime="2022-02-12" pubdate="" title="February 12th, 2022">
                            Feb. 12, 2022
                          </time>
                        </p>
                      </div>
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        data-dropdown-toggle="dropdownComment2"
                        id="dropdownComment2Button"
                        type="button">
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only">Comment settings</span>
                      </button>
                      <div
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="dropdownComment2">
                        <ul
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                          className="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      Much appreciated! Glad you liked it ☺️
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                        type="button">
                        <svg
                          aria-hidden="true"
                          className="mr-1.5 w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 20 18"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                  <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            alt="Bonnie Green"
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          />
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time dateTime="2022-03-12" pubdate="" title="March 12th, 2022">
                            Mar. 12, 2022
                          </time>
                        </p>
                      </div>
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        data-dropdown-toggle="dropdownComment3"
                        id="dropdownComment3Button"
                        type="button">
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only">Comment settings</span>
                      </button>
                      <div
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="dropdownComment3">
                        <ul
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                          className="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      The article covers the essentials, challenges, myths and stages the UX
                      designer should consider while creating the design strategy.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                        type="button">
                        <svg
                          aria-hidden="true"
                          className="mr-1.5 w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 20 18"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                  <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            alt="Helene Engels"
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          />
                          Helene Engels
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time dateTime="2022-06-23" pubdate="" title="June 23rd, 2022">
                            Jun. 23, 2022
                          </time>
                        </p>
                      </div>
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        data-dropdown-toggle="dropdownComment4"
                        id="dropdownComment4Button"
                        type="button">
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>
                      <div
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="dropdownComment4">
                        <ul
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                          className="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              href="#">
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      Thanks for sharing this. I do came from the Backend development and
                      explored some of the tools to design my Side Projects.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                        type="button">
                        <svg
                          aria-hidden="true"
                          className="mr-1.5 w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 20 18"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                </div>
              </div>
              <div className="py-4 lg:py-4 antialiased col-span-2 bg-white shadow-lg rounded-lg">
                <div className="max-w-full px-4">
                  <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                      <div className="mx-auto max-w-5xl">
                        <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            My reviews
                          </h2>
                          <div className="mt-6 sm:mt-0">
                            <label
                              className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                              htmlFor="order-type">
                              Select review type
                            </label>
                            <select
                              className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              id="order-type">
                              <option selected>All reviews</option>
                              <option value="5">5 stars</option>
                              <option value="4">4 stars</option>
                              <option value="3">3 stars</option>
                              <option value="2">2 stars</option>
                              <option value="1">1 star</option>
                            </select>
                          </div>
                        </div>
                        <div className="mt-6 flow-root sm:mt-8">
                          <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    Apple iMac 27", M2 Max CPU 1TB HDD, Retina 5K{" "}
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  It’s fancy, amazing keyboard, matching accessories. Super
                                  fast, batteries last more than usual, everything runs perfect
                                  in this...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder1"
                                  id="actionsMenuDropdown1"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder1">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown1"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-4 md:py-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    iPad Pro 13-Inch (M4): XDR Display, 512GB{" "}
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  Elegant look, exceptional keyboard, and well-matched
                                  accessories. Lightning-quick speed, impressive battery
                                  duration...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder2"
                                  id="actionsMenuDropdown2"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder2">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown2"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-4 md:py-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    PlayStation®5 Console – 1TB, PRO Controller{" "}
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  It’s fancy, amazing keyboard, matching accessories. Super
                                  fast, batteries last more than usual, everything runs perfect
                                  in this...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="none"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder3"
                                  id="actionsMenuDropdown3"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder3">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown3"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-4 md:py-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    Apple Watch SE [GPS 40mm], Smartwatch{" "}
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  The DualSense controller enhances gameplay with immersive
                                  feedback, making it a must-have for gaming...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder4"
                                  id="actionsMenuDropdown4"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder4">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown4"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-4 md:py-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    Apple MacBook PRO Laptop with M2 chip{" "}
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  Elegant and refined, with well-chosen accessories. Quick
                                  response, durable battery, and everything runs smoothly...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder5"
                                  id="actionsMenuDropdown5"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder5">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown5"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-4 md:py-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    Microsoft Xbox Series X 1TB Gaming Console{" "}
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  The console's design might not appeal to everyone, and
                                  exclusive titles are still somewhat limited...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="none"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="none"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder6"
                                  id="actionsMenuDropdown6"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder6">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown6"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-4 md:py-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    Apple iPhone 15 Pro Max, 256GB, Blue Titanium{" "}
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  The camera system continues to excel, capturing high-quality
                                  photos and videos...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="none"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder7"
                                  id="actionsMenuDropdown7"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder7">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown7"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-4 md:py-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    Microsoft Surface Pro, Copilot+ PC, 13 Inch{" "}
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  It’s fancy, amazing keyboard, matching accessories. Super
                                  fast, batteries last more than usual, everything runs perfect
                                  in this...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder8"
                                  id="actionsMenuDropdown8"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder8">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown8"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-4 md:py-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    Sony a7 III (ILCEM3K/B) Full-frame Mirrorless
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  The Sony a7 III is a versatile mirrorless camera that excels
                                  in both photo and video quality...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder9"
                                  id="actionsMenuDropdown9"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder9">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown9"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-12 gap-4 md:gap-6 pt-4 md:pt-6">
                              <dl className="md:col-span-3 order-3 md:order-1">
                                <dt className="sr-only">Product:</dt>
                                <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                  <a className="hover:underline" href="#">
                                    Brother MFC-J1010DW Wireless Color Inkjet
                                  </a>
                                </dd>
                              </dl>
                              <dl className="md:col-span-6 order-4 md:order-2">
                                <dt className="sr-only">Message:</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">
                                  The inkjet printer has been a frustrating experience. Print
                                  quality is inconsistent, with colors often...
                                </dd>
                              </dl>
                              <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                <dl>
                                  <dt className="sr-only">Stars:</dt>
                                  <dd className="flex items-center space-x-1">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="none"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="none"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="none"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </dd>
                                </dl>
                                <button
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-dropdown-toggle="dropdownOrder10"
                                  id="actionsMenuDropdown10"
                                  type="button">
                                  <span className="sr-only"> Actions </span>
                                  <svg
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="4"
                                    />
                                  </svg>
                                </button>
                                <div
                                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                  data-popper-placement="bottom"
                                  id="dropdownOrder10">
                                  <ul
                                    aria-labelledby="actionsMenuDropdown10"
                                    className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-target="editReviewModal"
                                        data-modal-toggle="editReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        <span>Edit review</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500"
                                        data-modal-target="deleteReviewModal"
                                        data-modal-toggle="deleteReviewModal"
                                        type="button">
                                        <svg
                                          aria-hidden="true"
                                          className="me-1.5 h-4 w-4"
                                          fill="none"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          width="24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                          />
                                        </svg>
                                        Delete review
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <nav
                          aria-label="Page navigation example"
                          className="mt-6 flex items-center justify-center sm:mt-8">
                          <ul className="flex h-8 items-center -space-x-px text-sm">
                            <li>
                              <a
                                className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                href="#">
                                <span className="sr-only">Previous</span>
                                <svg
                                  aria-hidden="true"
                                  className="h-4 w-4 rtl:rotate-180"
                                  fill="none"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="m15 19-7-7 7-7"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                href="#">
                                1
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                href="#">
                                2
                              </a>
                            </li>
                            <li>
                              <a
                                aria-current="page"
                                className="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                href="#">
                                3
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                href="#">
                                ...
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                href="#">
                                100
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                href="#">
                                <span className="sr-only">Next</span>
                                <svg
                                  aria-hidden="true"
                                  className="h-4 w-4 rtl:rotate-180"
                                  fill="none"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="m9 5 7 7-7 7"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </section>
                  <div
                    aria-hidden="true"
                    className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
                    id="deleteReviewModal"
                    tabIndex="-1">
                    <div className="relative h-full w-full max-w-md p-4 md:h-auto">
                      <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
                        <button
                          className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="deleteReviewModal"
                          type="button">
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              clipRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              fillRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                          <svg
                            aria-hidden="true"
                            className="h-8 w-8 text-gray-500 dark:text-gray-400"
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                          <span className="sr-only">Danger icon</span>
                        </div>
                        <p className="mb-3.5 text-gray-900 dark:text-white">
                          Are you sure you want to delete this review?
                        </p>
                        <p className="mb-4 text-gray-500 dark:text-gray-300">
                          This action cannot be undone.
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                          <button
                            className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            data-modal-toggle="deleteReviewModal"
                            type="button">
                            No, cancel
                          </button>
                          <button
                            className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            type="submit">
                            Yes, delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased"
                    id="editReviewModal"
                    tabIndex="-1">
                    <div className="relative max-h-full w-full max-w-2xl p-4">
                      <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                        <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
                          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Edit review
                          </h3>
                          <button
                            className="absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="editReviewModal"
                            type="button">
                            <svg
                              aria-hidden="true"
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>
                        <form className="p-4 md:p-5">
                          <div className="mb-4 grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                              <div className="flex items-center">
                                <svg
                                  aria-hidden="true"
                                  className="h-6 w-6 text-yellow-300"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  className="ms-2 h-6 w-6 text-yellow-300"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  className="ms-2 h-6 w-6 text-yellow-300"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  aria-hidden="true"
                                  className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="ms-2 text-lg font-bold text-gray-900 dark:text-white">
                                  3.0 out of 5
                                </span>
                              </div>
                            </div>
                            <div className="col-span-2">
                              <label
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="title">
                                Review title
                              </label>
                              <input
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                id="title"
                                name="title"
                                required
                                type="text"
                              />
                            </div>
                            <div className="col-span-2">
                              <label
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="description">
                                Review description
                              </label>
                              <textarea
                                className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                id="description"
                                required
                                rows="6"
                              />
                              <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                                Problems with the product or delivery?{" "}
                                <a
                                  className="text-primary-600 hover:underline dark:text-primary-500"
                                  href="#">
                                  Send a report
                                </a>
                                .
                              </p>
                            </div>
                            <div className="col-span-2">
                              <div className="flex items-center">
                                <input
                                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                  defaultValue=""
                                  id="review-checkbox"
                                  type="checkbox"
                                />
                                <label
                                  className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                  htmlFor="review-checkbox">
                                  By publishing this review you agree with the{" "}
                                  <a
                                    className="text-primary-600 hover:underline dark:text-primary-500"
                                    href="#">
                                    terms and conditions
                                  </a>
                                  .
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                            <button
                              className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              type="submit">
                              Edit review
                            </button>
                            <button
                              className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                              data-modal-toggle="editReviewModal"
                              type="button">
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default View;
