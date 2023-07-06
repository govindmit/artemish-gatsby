import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { removeDuplicatesArray } from "../../commonfunctions/commonfunctions";
const HeaderQuery = graphql`
  query MyQuery {
    allWpMenuItem(filter: { locations: { eq: MAIN_MENU } }) {
      edges {
        node {
          id
          label
          path
          parentId
          childItems {
            nodes {
              label
              id
              path
              childItems {
                nodes {
                  id
                  label
                  path
                  childItems {
                    nodes {
                      id
                      label
                      path
                      parentId
                    }
                  }
                  parentId
                }
              }
              parentId
            }
          }
        }
      }
    }
  }
`;
const Header = () => {
  const data = useStaticQuery(HeaderQuery);
  const NavbarData = data.allWpMenuItem?.edges;
  const uniqueArray = removeDuplicatesArray(NavbarData);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src="https://artemish.mangoitsol.com/wp-content/uploads/2021/01/Artboard-4.png"
            className="h-20 mr-3"
            alt="Artemish Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 navbar-menu">
            {uniqueArray?.map((item: any, key: any) => {
              return (
                <>
                  {item?.node?.childItems?.nodes.length > 0 ? (
                    <li className="has-children">
                      <a href="#!" aria-haspopup="true">
                        {item?.node?.label}
                      </a>
                      <ul aria-label="submenu">
                        {item?.node?.childItems?.nodes?.map((item: any, key: any) => {
                          return (
                            <>
                              {item?.childItems?.nodes.length > 0 ? (
                                <li className="has-children">
                                  <a href="#!" aria-haspopup="true">
                                    {item?.label}
                                  </a>
                                  <ul aria-label="submenu">
                                    {item?.childItems?.nodes.map(
                                      (item: any, key: any) => {
                                        return (
                                          <>
                                            {item?.childItems?.nodes.length >
                                              0 ? (
                                              <li className="has-children">
                                                <a
                                                  href="#!"
                                                  aria-haspopup="true"
                                                >
                                                  {item?.label}
                                                </a>
                                                <ul aria-label="submenu">
                                                  {item?.childItems?.nodes.map(
                                                    (item: any, key: any) => {
                                                      return (
                                                        <>
                                                          {item?.childItems
                                                            ?.nodes.length >
                                                            0 ? (
                                                            <>
                                                              <ul aria-label="submenu">
                                                                {item?.childItems?.nodes.map(
                                                                  (
                                                                    item: any,
                                                                    key: any
                                                                  ) => {
                                                                    return (
                                                                      <li
                                                                        key={
                                                                          key
                                                                        }
                                                                      >
                                                                        <a href="#!">
                                                                          {
                                                                            item?.label
                                                                          }
                                                                        </a>
                                                                      </li>
                                                                    );
                                                                  }
                                                                )}
                                                              </ul>
                                                            </>
                                                          ) : (
                                                            <li key={key}>
                                                              <a href="#!">
                                                                {item?.label}
                                                              </a>
                                                            </li>
                                                          )}
                                                        </>
                                                      );
                                                    }
                                                  )}
                                                </ul>
                                              </li>
                                            ) : (
                                              <li key={key}>
                                                <a href="#!">{item?.label}</a>
                                              </li>
                                            )}
                                          </>
                                        );
                                      }
                                    )}
                                  </ul>
                                </li>
                              ) : (
                                <li key={key}>
                                  <a href="#!">{item?.label}</a>
                                </li>
                              )}
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  ) : (
                    <li key={key}>
                      <a href="#" aria-current="page">
                        {item?.node?.label}
                      </a>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
