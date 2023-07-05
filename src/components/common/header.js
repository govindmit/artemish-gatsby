import React from "react";
import { removeDuplicatesArray } from "../../commonfunctions/commonfunctions";
import { graphql, useStaticQuery } from "gatsby";
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

  console.log(uniqueArray);

  return (
    // <header id="header" class="header-corporate header-10 header-loaded">
    //   <div class="header-main header-body" style={{ top: "0px" }}>
    //     <div class="header-container container">
    //       <div class="header-left">
    //         <h1 class="logo logo-transition">
    //           <a
    //             href="https://stag-pike.artemishq.com/"
    //             title="Artemis Defense Institute - You have the RIGHT to bear arms… You have the RESPONSIBILITY to Train!"
    //             rel="home"
    //           >
    //             <img
    //               class="img-responsive standard-logo"
    //               width="171"
    //               height="171"
    //               src="//stag-pike.artemishq.com/wp-content/uploads/2021/01/Artboard-4.png"
    //               alt="Artemis Defense Institute"
    //             />
    //             <img
    //               class="img-responsive retina-logo"
    //               width="709"
    //               height="710"
    //               src="//stag-pike.artemishq.com/wp-content/uploads/2021/01/ADI_original_retina.png"
    //               alt="Artemis Defense Institute"
    //               style={{ maxHeight: "710px" }}
    //             />
    //           </a>
    //         </h1>
    //       </div>

    //       <div class="header-right">
    //         <div class="header-right-top">
    //           <div class="header-contact">
    //             <ul class="nav nav-top">
    //               <li class="d-none d-sm-block nav-item-anim-icon nav-item-right-border"></li>
    //               <li class="phone nav-item-right-border">
    //                 <span>
    //                   <i class="fa fa-phone"></i>,
    //                   <a href="tel:9493056586">Call (949) 305-6586 (8AM-9PM)</a>
    //                 </span>
    //               </li>
    //               <li class="phone nav-item-right-border">
    //                 <span>
    //                   <a href="https://adi.artemishq.com/submit-ticket/">
    //                     Tech Support
    //                   </a>
    //                 </span>
    //               </li>
    //             </ul>
    //           </div>
    //           <div class="searchform-popup search-popup">
    //             <a class="search-toggle" aria-label="Search Toggle" href="#">
    //               <i class="fas fa-search"></i>
    //               <span class="search-text">Search</span>
    //             </a>
    //             <form
    //               action="https://stag-pike.artemishq.com/"
    //               method="get"
    //               class="searchform"
    //             >
    //               <div class="searchform-fields">
    //                 <span class="text">
    //                   <input
    //                     name="s"
    //                     type="text"
    //                     value=""
    //                     placeholder="Search"
    //                     autocomplete="off"
    //                   />
    //                 </span>
    //                 <span class="button-wrap">
    //                   <button
    //                     class="btn btn-special"
    //                     title="Search"
    //                     type="submit"
    //                   >
    //                     <i class="fas fa-search"></i>
    //                   </button>
    //                 </span>
    //               </div>
    //             </form>
    //           </div>
    //           <div id="mini-cart" class="mini-cart simple">
    //             <div class="cart-head">
    //               <span class="cart-icon">
    //                 <i class="minicart-icon minicart-icon-default"></i>
    //                 <span class="cart-items">0</span>
    //               </span>
    //               <span class="cart-items-text">0 items</span>
    //             </div>
    //             <div class="cart-popup widget_shopping_cart">
    //               <div class="widget_shopping_cart_content">
    //                 <div class="total-count text-v-dark clearfix">
    //                   <span>0 ITEMS</span>
    //                   <a
    //                     class="text-v-dark pull-right text-uppercase"
    //                     href="https://stag-pike.artemishq.com/cart/"
    //                   >
    //                     View cart
    //                   </a>
    //                 </div>
    //                 <ul class="cart_list product_list_widget scrollbar-inner">
    //                   <li class="woocommerce-mini-cart__empty-message empty">
    //                     No products in the cart.
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="header-right-bottom">
    //           <div id="main-menu">
    //             <ul id="menu-main" class="main-menu mega-menu">
    //               <li
    //                 id="nav-menu-item-102254"
    //                 class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children active has-sub narrow sub-ready"
    //               >
    //                 <a href="https://stag-pike.artemishq.com" class="current">
    //                   Home
    //                 </a>
    //                 <div class="popup" style={{ display: "block" }}>
    //                   <div class="inner">
    //                     <ul class="sub-menu pos-left">
    //                       <li
    //                         id="nav-menu-item-7104"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ocsd-approved-training/about-artemis/">
    //                           About Artemis
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-101092"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ocsd-approved-training/team-artemis/">
    //                           Team Artemis
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-96797"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a
    //                           target="_blank"
    //                           href="https://stag-pike.artemishq.com/ocsd-approved-training/the-lab-2/"
    //                         >
    //                           The Lab
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-101093"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/testimonials/">
    //                           Testimonials
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-101094"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ocsd-approved-training/faqs/">
    //                           FAQs
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-101095"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ocsd-approved-training/affiliate-partners/">
    //                           Affiliate Partners
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-133733"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ocsd-approved-training/careers/">
    //                           Careers
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-149437"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ocsd-approved-training/artemis-scholarship-contest/">
    //                           Artemis Scholarship Contest
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-149458"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ocsd-approved-training/press-releases/">
    //                           In The Media
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </li>
    //               <li
    //                 id="nav-menu-item-103137"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub narrow sub-ready"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/training/">
    //                   Training
    //                 </a>
    //                 <div class="popup" style={{ display: "block" }}>
    //                   <div class="inner">
    //                     <ul class="sub-menu pos-left">
    //                       <li
    //                         id="nav-menu-item-101358"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/ccw-classes/">
    //                           CCW Classes
    //                         </a>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="nav-menu-item-131709"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/pre-ccw-information-and-workshop/">
    //                               Free Pre-CCW Informational Workshop
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-131755"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/ccw-classes/#CCW">
    //                               CCW Courses (OCSD &amp; LASD)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-131756"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/ccw-classes/#addons">
    //                               CCW Add-Ons
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-131757"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/ccw-classes/#renewal">
    //                               CCW Renewals (OCSD &amp; LASD)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-101449"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           ></li>
    //                           <li
    //                             id="nav-menu-item-101448"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           ></li>
    //                           <li
    //                             id="nav-menu-item-101447"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           ></li>
    //                           <li
    //                             id="nav-menu-item-102085"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           ></li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-159030"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/group-classes/">
    //                           Group Classes
    //                         </a>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="nav-menu-item-159037"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/group-classes/pistol-series/">
    //                               Pistol Series
    //                             </a>
    //                             <ul class="sub-menu">
    //                               <li
    //                                 id="nav-menu-item-134010"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/pistol-1/">
    //                                   Pistol 1
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159038"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-pistol/">
    //                                   Ladies’ Pistol 1
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-134011"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/pistol-2/">
    //                                   Pistol 2
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159040"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-pistol-2/">
    //                                   Ladies’ Pistol 2
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-134016"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/pistol-3/">
    //                                   Pistol 3
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159039"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-pistol-3/">
    //                                   Ladies’ Pistol 3
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-134012"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/skillsanddrills/">
    //                                   Skills and Drills (FKA Transitions)
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-134013"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/4m-qualification/">
    //                                   4M Qualification
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-134014"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/4m-manipulation-marksmanship-movement-mindset/">
    //                                   4M: Manipulation / Marksmanship / Movement
    //                                   / Mindset
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-174196"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/4m-e-manipulation-marksmanship-movement-mindset-extended/">
    //                                   4M-E: Manipulation / Marksmanship /
    //                                   Movement / Mindset – Extended
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-101571"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/training/ladies-programs/">
    //                               Ladies’ Programs
    //                             </a>
    //                             <ul class="sub-menu">
    //                               <li
    //                                 id="nav-menu-item-117710"
    //                                 class="menu-item menu-item-type-custom menu-item-object-custom"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-night/">
    //                                   Ladies Night
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-125324"
    //                                 class="menu-item menu-item-type-custom menu-item-object-custom"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-intro-to-live-shoot/">
    //                                   Ladies’ Intro To Live Shoot
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159041"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-pistol/">
    //                                   Ladies’ Pistol 1
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159043"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-pistol-2/">
    //                                   Ladies’ Pistol 2
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159042"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-pistol-3/">
    //                                   Ladies’ Pistol 3
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-115876"
    //                                 class="menu-item menu-item-type-custom menu-item-object-custom"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-into-to-transition/">
    //                                   Ladies’ Intro To Transitions
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-118643"
    //                                 class="menu-item menu-item-type-custom menu-item-object-custom"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/shoot-like-a-girl/">
    //                                   Shoot Like A Girl
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-130180"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/refuse-to-be-a-victim-seminar-college-edition/">
    //                                   Refuse To Be A Victim: College Edition
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-159090"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/group-classes/handgun-courses/">
    //                               Handgun Courses
    //                             </a>
    //                             <ul class="sub-menu">
    //                               <li
    //                                 id="nav-menu-item-159092"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/pistol-for-dummies/">
    //                                   Pistol for Dummies (Online)
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159094"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/date-night-2/">
    //                                   Date Night
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159096"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/fam-fire/">
    //                                   FAM (Familiarization) Fire
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159091"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/range-day-with-steven-and-sandy/">
    //                                   Range Day with Steven and Sandy
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-165515"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/live-fire-red-dot-pistol-class/">
    //                                   Live-Fire Red Dot Pistol Class
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-159095"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/club-2a/">
    //                                   Club 2A Live Fire – Members’ Only
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-157491"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/cleaning-your-handgun/">
    //                                   Cleaning Your Handgun
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-159109"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/group-classes/long-gun-courses/">
    //                               Long Gun Courses
    //                             </a>
    //                             <ul class="sub-menu">
    //                               <li
    //                                 id="nav-menu-item-169292"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/club-2a-tactics/">
    //                                   Club 2A Tactics
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169290"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/rifle-series-rifle-1-rifle-2-rifle-3/">
    //                                   Basic Rifle Series – Rifle 1, 2, &amp; 3
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169293"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/rifle-refresher-class/">
    //                                   Rifle Refresher Class
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169291"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/defensive-shotgun/">
    //                                   Defensive Shotgun
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-159130"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/group-classes/live-fire-courses/">
    //                               Live Fire Courses
    //                             </a>
    //                             <ul class="sub-menu">
    //                               <li
    //                                 id="nav-menu-item-169287"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/fam-fire/">
    //                                   FAM (Familiarization) Fire
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169288"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/ladies-intro-to-live-shoot/">
    //                                   Ladies’ Intro to Live Shoot
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169283"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/range-day-with-steven-and-sandy/">
    //                                   Range Day with Steven and Sandy
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169282"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/club-2a/">
    //                                   Club 2A
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169281"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/club-2a-tactics/">
    //                                   Club 2A Tactics
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169289"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/live-fire-red-dot-pistol-class/">
    //                                   Live-Fire Red Dot Pistol Class
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169284"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/rifle-series-rifle-1-rifle-2-rifle-3/">
    //                                   Basic Rifle Series – Rifle 1, Rifle 2
    //                                   &amp; Rifle 3
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169286"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/defensive-shotgun/">
    //                                   Defensive Shotgun
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-169285"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/nra-basic-pistol-qualification-shoot/">
    //                                   NRA Basic Pistol Qualification Shoot
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-10857"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/private-training/">
    //                           Private Training
    //                         </a>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="nav-menu-item-160595"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/60-minute-private-training-on-the-orion-system/">
    //                               60 Minute Private Immersive VR Training (1
    //                               Person)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-160596"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/60-minutes-1-hour-session-max-2-trainees/">
    //                               60 Minute Private Training Session (1-2
    //                               People)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-160597"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/90-minutes-1-hour-30-minutes-max-3-trainees/">
    //                               90 Minute Private Training Session (2-3
    //                               People)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-160598"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/120-minutes-2-hours-session-max-4-trainees/">
    //                               120 Minute Private Training Session (3-4
    //                               People)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-101103"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/training/corporate-training/">
    //                               Private Party &amp; Corporate Group Training
    //                               (4+ People)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-101102"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/le-mil-security-training/">
    //                               LE/MIL/HOW Security Team Training
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-101413"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/specialty-programs/">
    //                           Specialty Programs
    //                         </a>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="nav-menu-item-101531"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/law/">
    //                               Law
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-157470"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/tactical-medicine-emergency-casualty-care/">
    //                               Tactical Medicine
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-101530"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/tarani-classes/">
    //                               Tarani Classes
    //                             </a>
    //                             <ul class="sub-menu">
    //                               <li
    //                                 id="nav-menu-item-139817"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               ></li>
    //                               <li
    //                                 id="nav-menu-item-139917"
    //                                 class="menu-item menu-item-type-custom menu-item-object-custom"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/taraniadvanced-edge-weapons/?date=2022-10-15">
    //                                   Advanced Edged Weapons
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-139819"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               ></li>
    //                               <li
    //                                 id="nav-menu-item-139924"
    //                                 class="menu-item menu-item-type-custom menu-item-object-custom"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/steve-taranis-defensive-walking-stick/?date=2022-05-15">
    //                                   Defensive Walking Stick
    //                                 </a>
    //                               </li>
    //                               <li
    //                                 id="nav-menu-item-139818"
    //                                 class="menu-item menu-item-type-post_type menu-item-object-product"
    //                               ></li>
    //                               <li
    //                                 id="nav-menu-item-139925"
    //                                 class="menu-item menu-item-type-custom menu-item-object-custom"
    //                               >
    //                                 <a href="https://stag-pike.artemishq.com/product/tarani-improvised-weapons/?date=2022-02-15">
    //                                   Improvised Weapons
    //                                 </a>
    //                               </li>
    //                             </ul>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-161760"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/learn-to-hunt-part-1/">
    //                               Learn To Hunt
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-130181"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/refuse-to-be-a-victim-seminar-college-edition/">
    //                               Refuse To Be A Victim: College Edition
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-103621"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/training/specialty-programs/101989-2/">
    //                               Situational Awareness
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-104676"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/training/specialty-programs/self-defense-classes/">
    //                               Self Defense
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-101241"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/free-training-2/">
    //                           Free Training
    //                         </a>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="nav-menu-item-101096"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/training/free-training-2/free-training/">
    //                               New Gun Owner Series
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-101356"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/group-classes/handgun-courses/handgun-fundamentals/">
    //                               Handgun Fundamentals
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-101355"
    //                             class="menu-item menu-item-type-post_type menu-item-object-page"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/shotgun-fundamentals/">
    //                               Shotgun Fundamentals
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </li>
    //               <li
    //                 id="nav-menu-item-101086"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page narrow"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/services/">
    //                   Services
    //                 </a>
    //               </li>
    //               <li
    //                 id="nav-menu-item-102308"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub narrow sub-ready"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/membership/">
    //                   Membership
    //                 </a>
    //                 <div class="popup" style={{ display: "block" }}>
    //                   <div class="inner">
    //                     <ul class="sub-menu pos-left">
    //                       <li
    //                         id="nav-menu-item-132976"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/membership/">
    //                           Membership Options
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-132971"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children sub"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/members-only-events/">
    //                           Members Only Events
    //                         </a>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="nav-menu-item-132974"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/drinks-with-the-ltc-and-captain/">
    //                               Drinks with the Major &amp; the Captain – For
    //                               Members Only
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-172627"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/disaster-preparedness-part-1/">
    //                               Fundamentals of Disaster Preparedness:
    //                               Classroom Preparedness
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-172626"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/disaster-preparedness-part-2/">
    //                               Fundamentals of Disaster Preparedness:
    //                               Hands-On Preparedness
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="nav-menu-item-132975"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/webinar-with-steven-sandy-2/">
    //                               Webinar with Steven &amp; Sandy
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </li>
    //               <li
    //                 id="nav-menu-item-10845"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page narrow"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/resource-calendar/">
    //                   Calendar
    //                 </a>
    //               </li>
    //               <li
    //                 id="nav-menu-item-102347"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub narrow sub-ready"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/shop-2/">Shop</a>
    //                 <div class="popup" style={{ display: "block" }}>
    //                   <div class="inner">
    //                     <ul class="sub-menu pos-left">
    //                       <li
    //                         id="nav-menu-item-147811"
    //                         class="menu-item menu-item-type-custom menu-item-object-custom"
    //                         data-cols="1"
    //                       ></li>
    //                       <li
    //                         id="nav-menu-item-163898"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/shop-2/gift-card/">
    //                           Gift Cards
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-132977"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/membership/">
    //                           Membership Options
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-132985"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/services/">
    //                           Services
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-132981"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/">
    //                           Training
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-133204"
    //                         class="menu-item menu-item-type-custom menu-item-object-custom"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/shopping-guide">
    //                           Shopping Guide
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-115872"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ocsd-approved-training/rewards/">
    //                           Artemis Rewards Program
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </li>
    //               <li
    //                 id="nav-menu-item-5320"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page narrow"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/blog/">2A Blog</a>
    //               </li>
    //               <li
    //                 id="nav-menu-item-7132"
    //                 class="nmr-logged-out menu-item menu-item-type-custom menu-item-object-custom narrow"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/log-in">Login</a>
    //               </li>
    //               <li
    //                 id="nav-menu-item-7134"
    //                 class="nmr-logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub narrow sub-ready"
    //               >
    //                 <a href="#">Signup</a>
    //                 <div class="popup" style={{ display: "none" }}>
    //                   <div class="inner">
    //                     <ul class="sub-menu pos-left">
    //                       <li
    //                         id="nav-menu-item-103489"
    //                         class="nmr-logged-out menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/trainer-register/">
    //                           Artemis Team Registration
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="nav-menu-item-103490"
    //                         class="nmr-logged-out menu-item menu-item-type-post_type menu-item-object-page"
    //                         data-cols="1"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/trainee-register/">
    //                           Client Registration
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //           <div class="share-links">
    //             <a
    //               target="_blank"
    //               rel="nofollow noopener noreferrer"
    //               class="share-facebook"
    //               href="https://www.facebook.com/ArtemisDefenseInstitute"
    //               title="Facebook"
    //             ></a>
    //             <a
    //               target="_blank"
    //               rel="nofollow noopener noreferrer"
    //               class="share-twitter"
    //               href="https://twitter.com/ArtemisDefense"
    //               title="Twitter"
    //             ></a>
    //             <a
    //               target="_blank"
    //               rel="nofollow noopener noreferrer"
    //               class="share-youtube"
    //               href="https://www.youtube.com/channel/UCjSkGjjTP3u0YWVh8KVG1pQ"
    //               title="Youtube"
    //             ></a>
    //             <a
    //               target="_blank"
    //               rel="nofollow noopener noreferrer"
    //               class="share-instagram"
    //               href="https://www.instagram.com/artemisdefenseinstitute"
    //               title="Instagram"
    //             ></a>
    //             <a
    //               target="_blank"
    //               rel="nofollow noopener noreferrer"
    //               class="share-linkedin"
    //               href="https://www.linkedin.com/company/artemis-defense-institute/"
    //               title="LinkedIn"
    //             ></a>
    //             <a
    //               target="_blank"
    //               rel="nofollow noopener noreferrer"
    //               class="share-yelp"
    //               href="https://www.yelp.com/biz/artemis-defense-institute-lake-forest"
    //               title="Yelp"
    //             ></a>
    //           </div>
    //           <a class="mobile-toggle" href="#" aria-label="Mobile Menu">
    //             <i class="fas fa-bars"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div id="nav-panel">
    //       <div class="container">
    //         <div class="mobile-nav-wrap">
    //           <div class="menu-wrap">
    //             <ul id="menu-main-1" class="mobile-menu accordion-menu">
    //               <li
    //                 id="accordion-menu-item-102254"
    //                 class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children active has-sub"
    //               >
    //                 <a href="https://stag-pike.artemishq.com" class="current">
    //                   Home
    //                 </a>
    //                 <span class="arrow"></span>
    //                 <ul class="sub-menu">
    //                   <li
    //                     id="accordion-menu-item-7104"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/ocsd-approved-training/about-artemis/">
    //                       About Artemis
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-101092"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/ocsd-approved-training/team-artemis/">
    //                       Team Artemis
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-96797"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a
    //                       target="_blank"
    //                       href="https://stag-pike.artemishq.com/ocsd-approved-training/the-lab-2/"
    //                     >
    //                       The Lab
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-101093"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/testimonials/">
    //                       Testimonials
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-101094"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/ocsd-approved-training/faqs/">
    //                       FAQs
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-101095"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/ocsd-approved-training/affiliate-partners/">
    //                       Affiliate Partners
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-133733"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/ocsd-approved-training/careers/">
    //                       Careers
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-149437"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/ocsd-approved-training/artemis-scholarship-contest/">
    //                       Artemis Scholarship Contest
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-149458"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/ocsd-approved-training/press-releases/">
    //                       In The Media
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li
    //                 id="accordion-menu-item-103137"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/training/">
    //                   Training
    //                 </a>
    //                 <span class="arrow"></span>
    //                 <ul class="sub-menu">
    //                   <li
    //                     id="accordion-menu-item-101358"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/training/ccw-classes/">
    //                       CCW Classes
    //                     </a>
    //                     <span class="arrow"></span>
    //                     <ul class="sub-menu">
    //                       <li
    //                         id="accordion-menu-item-131709"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/pre-ccw-information-and-workshop/">
    //                           Free Pre-CCW Informational Workshop
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-131755"
    //                         class="menu-item menu-item-type-custom menu-item-object-custom"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ccw-classes/#CCW">
    //                           CCW Courses (OCSD &amp; LASD)
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-131756"
    //                         class="menu-item menu-item-type-custom menu-item-object-custom"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ccw-classes/#addons">
    //                           CCW Add-Ons
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-131757"
    //                         class="menu-item menu-item-type-custom menu-item-object-custom"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/ccw-classes/#renewal">
    //                           CCW Renewals (OCSD &amp; LASD)
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-101449"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page hidden-item"
    //                       ></li>
    //                       <li
    //                         id="accordion-menu-item-101448"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page hidden-item"
    //                       ></li>
    //                       <li
    //                         id="accordion-menu-item-101447"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page hidden-item"
    //                       ></li>
    //                       <li
    //                         id="accordion-menu-item-102085"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page hidden-item"
    //                       ></li>
    //                     </ul>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-159030"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/group-classes/">
    //                       Group Classes
    //                     </a>
    //                     <span class="arrow"></span>
    //                     <ul class="sub-menu">
    //                       <li
    //                         id="accordion-menu-item-159037"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/group-classes/pistol-series/">
    //                           Pistol Series
    //                         </a>
    //                         <span class="arrow"></span>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="accordion-menu-item-134010"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/pistol-1/">
    //                               Pistol 1
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159038"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-pistol/">
    //                               Ladies’ Pistol 1
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-134011"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/pistol-2/">
    //                               Pistol 2
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159040"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-pistol-2/">
    //                               Ladies’ Pistol 2
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-134016"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/pistol-3/">
    //                               Pistol 3
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159039"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-pistol-3/">
    //                               Ladies’ Pistol 3
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-134012"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/skillsanddrills/">
    //                               Skills and Drills (FKA Transitions)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-134013"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/4m-qualification/">
    //                               4M Qualification
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-134014"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/4m-manipulation-marksmanship-movement-mindset/">
    //                               4M: Manipulation / Marksmanship / Movement /
    //                               Mindset
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-174196"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/4m-e-manipulation-marksmanship-movement-mindset-extended/">
    //                               4M-E: Manipulation / Marksmanship / Movement /
    //                               Mindset – Extended
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-101571"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/ladies-programs/">
    //                           Ladies’ Programs
    //                         </a>
    //                         <span class="arrow"></span>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="accordion-menu-item-117710"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-night/">
    //                               Ladies Night
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-125324"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-intro-to-live-shoot/">
    //                               Ladies’ Intro To Live Shoot
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159041"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-pistol/">
    //                               Ladies’ Pistol 1
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159043"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-pistol-2/">
    //                               Ladies’ Pistol 2
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159042"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-pistol-3/">
    //                               Ladies’ Pistol 3
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-115876"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-into-to-transition/">
    //                               Ladies’ Intro To Transitions
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-118643"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/shoot-like-a-girl/">
    //                               Shoot Like A Girl
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-130180"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/refuse-to-be-a-victim-seminar-college-edition/">
    //                               Refuse To Be A Victim: College Edition
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-159090"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/group-classes/handgun-courses/">
    //                           Handgun Courses
    //                         </a>
    //                         <span class="arrow"></span>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="accordion-menu-item-159092"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/pistol-for-dummies/">
    //                               Pistol for Dummies (Online)
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159094"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/date-night-2/">
    //                               Date Night
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159096"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/fam-fire/">
    //                               FAM (Familiarization) Fire
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159091"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/range-day-with-steven-and-sandy/">
    //                               Range Day with Steven and Sandy
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-165515"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/live-fire-red-dot-pistol-class/">
    //                               Live-Fire Red Dot Pistol Class
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-159095"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/club-2a/">
    //                               Club 2A Live Fire – Members’ Only
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-157491"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/cleaning-your-handgun/">
    //                               Cleaning Your Handgun
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-159109"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/group-classes/long-gun-courses/">
    //                           Long Gun Courses
    //                         </a>
    //                         <span class="arrow"></span>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="accordion-menu-item-169292"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/club-2a-tactics/">
    //                               Club 2A Tactics
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169290"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/rifle-series-rifle-1-rifle-2-rifle-3/">
    //                               Basic Rifle Series – Rifle 1, 2, &amp; 3
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169293"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/rifle-refresher-class/">
    //                               Rifle Refresher Class
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169291"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/defensive-shotgun/">
    //                               Defensive Shotgun
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-159130"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/group-classes/live-fire-courses/">
    //                           Live Fire Courses
    //                         </a>
    //                         <span class="arrow"></span>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="accordion-menu-item-169287"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/fam-fire/">
    //                               FAM (Familiarization) Fire
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169288"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/ladies-intro-to-live-shoot/">
    //                               Ladies’ Intro to Live Shoot
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169283"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/range-day-with-steven-and-sandy/">
    //                               Range Day with Steven and Sandy
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169282"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/club-2a/">
    //                               Club 2A
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169281"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/club-2a-tactics/">
    //                               Club 2A Tactics
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169289"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/live-fire-red-dot-pistol-class/">
    //                               Live-Fire Red Dot Pistol Class
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169284"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/rifle-series-rifle-1-rifle-2-rifle-3/">
    //                               Basic Rifle Series – Rifle 1, Rifle 2 &amp;
    //                               Rifle 3
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169286"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/defensive-shotgun/">
    //                               Defensive Shotgun
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-169285"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/nra-basic-pistol-qualification-shoot/">
    //                               NRA Basic Pistol Qualification Shoot
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-10857"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/training/private-training/">
    //                       Private Training
    //                     </a>
    //                     <span class="arrow"></span>
    //                     <ul class="sub-menu">
    //                       <li
    //                         id="accordion-menu-item-160595"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/60-minute-private-training-on-the-orion-system/">
    //                           60 Minute Private Immersive VR Training (1 Person)
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-160596"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/60-minutes-1-hour-session-max-2-trainees/">
    //                           60 Minute Private Training Session (1-2 People)
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-160597"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/90-minutes-1-hour-30-minutes-max-3-trainees/">
    //                           90 Minute Private Training Session (2-3 People)
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-160598"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/120-minutes-2-hours-session-max-4-trainees/">
    //                           120 Minute Private Training Session (3-4 People)
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-101103"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/corporate-training/">
    //                           Private Party &amp; Corporate Group Training (4+
    //                           People)
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-101102"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/le-mil-security-training/">
    //                           LE/MIL/HOW Security Team Training
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-101413"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/training/specialty-programs/">
    //                       Specialty Programs
    //                     </a>
    //                     <span class="arrow"></span>
    //                     <ul class="sub-menu">
    //                       <li
    //                         id="accordion-menu-item-101531"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/law/">
    //                           Law
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-157470"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/tactical-medicine-emergency-casualty-care/">
    //                           Tactical Medicine
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-101530"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/tarani-classes/">
    //                           Tarani Classes
    //                         </a>
    //                         <span class="arrow"></span>
    //                         <ul class="sub-menu">
    //                           <li
    //                             id="accordion-menu-item-139817"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product hidden-item"
    //                           ></li>
    //                           <li
    //                             id="accordion-menu-item-139917"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/taraniadvanced-edge-weapons/?date=2022-10-15">
    //                               Advanced Edged Weapons
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-139819"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product hidden-item"
    //                           ></li>
    //                           <li
    //                             id="accordion-menu-item-139924"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/steve-taranis-defensive-walking-stick/?date=2022-05-15">
    //                               Defensive Walking Stick
    //                             </a>
    //                           </li>
    //                           <li
    //                             id="accordion-menu-item-139818"
    //                             class="menu-item menu-item-type-post_type menu-item-object-product hidden-item"
    //                           ></li>
    //                           <li
    //                             id="accordion-menu-item-139925"
    //                             class="menu-item menu-item-type-custom menu-item-object-custom"
    //                           >
    //                             <a href="https://stag-pike.artemishq.com/product/tarani-improvised-weapons/?date=2022-02-15">
    //                               Improvised Weapons
    //                             </a>
    //                           </li>
    //                         </ul>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-161760"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/learn-to-hunt-part-1/">
    //                           Learn To Hunt
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-130181"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/refuse-to-be-a-victim-seminar-college-edition/">
    //                           Refuse To Be A Victim: College Edition
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-103621"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/specialty-programs/101989-2/">
    //                           Situational Awareness
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-104676"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/specialty-programs/self-defense-classes/">
    //                           Self Defense
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-101241"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/training/free-training-2/">
    //                       Free Training
    //                     </a>
    //                     <span class="arrow"></span>
    //                     <ul class="sub-menu">
    //                       <li
    //                         id="accordion-menu-item-101096"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/training/free-training-2/free-training/">
    //                           New Gun Owner Series
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-101356"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/group-classes/handgun-courses/handgun-fundamentals/">
    //                           Handgun Fundamentals
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-101355"
    //                         class="menu-item menu-item-type-post_type menu-item-object-page"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/shotgun-fundamentals/">
    //                           Shotgun Fundamentals
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li
    //                 id="accordion-menu-item-101086"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/services/">
    //                   Services
    //                 </a>
    //               </li>
    //               <li
    //                 id="accordion-menu-item-102308"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/membership/">
    //                   Membership
    //                 </a>
    //                 <span class="arrow"></span>
    //                 <ul class="sub-menu">
    //                   <li
    //                     id="accordion-menu-item-132976"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/membership/">
    //                       Membership Options
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-132971"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/members-only-events/">
    //                       Members Only Events
    //                     </a>
    //                     <span class="arrow"></span>
    //                     <ul class="sub-menu">
    //                       <li
    //                         id="accordion-menu-item-132974"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/drinks-with-the-ltc-and-captain/">
    //                           Drinks with the Major &amp; the Captain – For
    //                           Members Only
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-172627"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/disaster-preparedness-part-1/">
    //                           Fundamentals of Disaster Preparedness: Classroom
    //                           Preparedness
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-172626"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/disaster-preparedness-part-2/">
    //                           Fundamentals of Disaster Preparedness: Hands-On
    //                           Preparedness
    //                         </a>
    //                       </li>
    //                       <li
    //                         id="accordion-menu-item-132975"
    //                         class="menu-item menu-item-type-post_type menu-item-object-product"
    //                       >
    //                         <a href="https://stag-pike.artemishq.com/product/webinar-with-steven-sandy-2/">
    //                           Webinar with Steven &amp; Sandy
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li
    //                 id="accordion-menu-item-10845"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/resource-calendar/">
    //                   Calendar
    //                 </a>
    //               </li>
    //               <li
    //                 id="accordion-menu-item-102347"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-sub"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/shop-2/">Shop</a>
    //                 <span class="arrow"></span>
    //                 <ul class="sub-menu">
    //                   <li
    //                     id="accordion-menu-item-147811"
    //                     class="menu-item menu-item-type-custom menu-item-object-custom hidden-item"
    //                   ></li>
    //                   <li
    //                     id="accordion-menu-item-163898"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/shop-2/gift-card/">
    //                       Gift Cards
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-132977"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/membership/">
    //                       Membership Options
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-132985"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/services/">
    //                       Services
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-132981"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/training/">
    //                       Training
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-133204"
    //                     class="menu-item menu-item-type-custom menu-item-object-custom"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/shopping-guide">
    //                       Shopping Guide
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-115872"
    //                     class="menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/ocsd-approved-training/rewards/">
    //                       Artemis Rewards Program
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li
    //                 id="accordion-menu-item-5320"
    //                 class="menu-item menu-item-type-post_type menu-item-object-page"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/blog/">2A Blog</a>
    //               </li>
    //               <li
    //                 id="accordion-menu-item-7132"
    //                 class="nmr-logged-out menu-item menu-item-type-custom menu-item-object-custom"
    //               >
    //                 <a href="https://stag-pike.artemishq.com/log-in">Login</a>
    //               </li>
    //               <li
    //                 id="accordion-menu-item-7134"
    //                 class="nmr-logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub"
    //               >
    //                 <a href="#">Signup</a> <span class="arrow"></span>
    //                 <ul class="sub-menu">
    //                   <li
    //                     id="accordion-menu-item-103489"
    //                     class="nmr-logged-out menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/trainer-register/">
    //                       Artemis Team Registration
    //                     </a>
    //                   </li>
    //                   <li
    //                     id="accordion-menu-item-103490"
    //                     class="nmr-logged-out menu-item menu-item-type-post_type menu-item-object-page"
    //                   >
    //                     <a href="https://stag-pike.artemishq.com/trainee-register/">
    //                       Client Registration
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <></>
  );
};

export default Header;
