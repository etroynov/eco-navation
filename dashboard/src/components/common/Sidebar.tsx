/**
 * Dependencies
 */

import * as React from 'react';
import Link from 'next/link';

/*!
 * Expo
 */

const Sidebar = () => (
  <aside className="sidebar">
    <header className="sidebar__header">
      <Link href="/dashboard">
        <a className="sidebar__logo text-center">
          <svg width="32" height="32" className="sidebar__logo-icon">
            <svg viewBox="0 0 940 1024" width="100%" height="100%">
              <path d="M448.332 69.637l-61.016-46.425-92.187 35.813-61.016 21.223-109.43 97.492-8.622 90.197-36.477 39.793-9.948 64.332-38.466 49.741-9.285 224.166 47.751 159.834 29.181 43.109-0.663 29.181 77.596 79.585 78.259 7.959 33.161 32.497h127.337l70.301-49.741 31.171 31.171 149.223 21.223 17.907-33.161 53.057-1.326 94.839-67.648 11.938-59.026 45.098-66.321 19.233-119.378v-104.124l-64.995-45.098 72.29-49.741-33.824-85.554 3.316-55.047-49.078-46.425 3.316-61.016-138.611-133.306-39.793-1.99-52.394-47.088h-84.891z" fill="#fff"></path>
              <path d="M939.772 640.663v-103.461l-11.275-7.959-39.13-27.855 8.622-7.295 39.793-34.487 2.653-9.948-5.306-11.938-29.181-74.943-0.663-1.326v-59.689l-43.109-43.109v-61.679l-7.959-7.959-72.29-73.617-0.663-1.326-69.637-69.637h-44.435l-35.813-35.813-7.959-8.622h-113.409l-66.984 66.984v202.943l-55.047-15.254v-86.881c3.316-1.326 5.969-3.316 7.959-5.969v0c5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886v0c2.653 2.653 5.306 4.642 7.959 5.969v37.803l-45.098-12.601c-1.326-6.632-3.979-12.601-8.622-16.58-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285v0c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886v0c5.306 5.306 13.264 9.285 21.886 9.285s15.917-3.316 21.886-9.285l0.663-0.663c0 0 0.663 0 0.663 0l52.394 14.591v29.181c-1.326 6.632 2.653 13.927 9.948 15.917l72.29 19.896v45.098c-0.663 0.663-1.99 0.663-2.653 1.326l-84.228 66.321h-50.404c-1.326-2.653-3.316-5.969-5.969-7.959-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886v0c5.306 5.306 13.264 9.285 21.886 9.285s15.917-3.316 21.886-9.285v0c1.99-1.99 3.979-5.306 5.969-7.959h55.047c3.316 0 6.632-1.326 9.285-3.979l72.953-57.036v39.13l8.622 8.622h37.803l8.622-8.622v-137.285l65.658-27.192c3.316-0.663 6.632-2.653 8.622-5.969v0 0c1.326-1.99 1.99-4.642 1.99-7.295l3.316-33.161 49.741-1.326c1.99 0 3.979-0.663 5.969-1.326l29.181-15.254c0.663-0.663 1.326-0.663 2.653-1.326 5.306 3.316 10.611 4.642 16.58 4.642 7.959 0 15.917-3.316 21.223-9.285v0c5.969-5.969 8.622-13.927 8.622-21.886s-3.316-15.917-9.285-21.223v0c-5.969-5.969-13.927-8.622-21.886-8.622s-15.917 3.316-21.223 9.285v0c-5.969 5.969-8.622 13.927-8.622 21.886 0 0.663 0 1.99 0 2.653v0l-26.528 13.264-43.772 0.663 1.99-19.233c0-0.663 0-1.326 0-2.653 3.979-1.326 7.295-3.979 9.948-6.632v0c5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886v0c1.99 1.99 3.979 3.979 6.632 5.306 0 0 0 0.663 0 1.326l-7.959 72.953-49.078 20.56v-161.824l35.15-35.15h68.311l2.653 3.316 41.119 41.119h44.435l55.047 55.047 64.332 65.658v62.342l43.109 43.109v31.171h-56.373l-27.192-59.026c3.979-5.306 6.632-11.938 6.632-18.57 0-8.622-3.316-15.917-9.285-21.886-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886v0c5.306 5.306 13.264 9.285 21.886 9.285v0l30.508 65.658c1.99 5.306 7.295 8.622 12.601 8.622h5.306v47.088l-59.026 50.404c-3.979-1.99-7.959-2.653-12.601-2.653-8.622 0-15.917 3.316-21.886 9.285-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886c5.306 5.306 13.264 9.285 21.886 9.285s15.917-3.316 21.886-9.285c5.306-5.306 9.285-13.264 9.285-21.886 0-2.653 0-4.642-0.663-6.632v0l63.005-53.057c3.979-2.653 5.969-6.632 5.969-11.275v0 0 0-53.057h35.813l19.896 52.394 1.99 5.969-4.642 3.979-45.762 39.13-24.539 21.223v3.316l26.528 18.57 52.394 37.14 3.979 2.653v73.617l-7.295 27.192-55.047-10.611-13.927-41.119c5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886c4.642 4.642 11.275 7.959 17.907 8.622l14.591 42.446-23.876 35.15c-0.663 0.663-1.326 1.99-1.326 3.316-1.99-0.663-3.979-0.663-6.632-0.663-8.622 0-15.917 3.316-21.886 9.285-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886c5.306 5.306 13.264 9.285 21.886 9.285s15.917-3.316 21.886-9.285c5.306-5.306 9.285-13.264 9.285-21.886 0-5.306-1.326-9.948-3.316-13.927 1.326-0.663 1.99-1.99 2.653-3.316l23.212-33.161 52.394 9.948-26.528 102.798-0.663 2.653-33.824 33.824v37.803l-22.549 22.549c0 0-0.663-0.663-0.663-0.663l-43.109-43.109c1.326-3.316 1.99-6.632 1.99-10.611 0-8.622-3.316-15.917-9.285-21.886-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 8.622 21.223v0c5.306 5.306 13.264 9.285 21.886 9.285 3.316 0 5.969-0.663 9.285-1.326l43.772 43.772c0 0 0.663 0.663 0.663 0.663l-25.865 25.865h-66.321l-34.487 34.487h-117.389l-9.948 7.959 45.762 45.762h103.461l33.824-33.824h66.984l99.482-99.482v-37.803l27.855-27.855 1.99-7.295 44.435-170.446 0.663-3.316 0.663-10.611zM293.14 205.596c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959v0c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959zM382.010 148.56v0c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959 0 2.653-1.326 5.969-3.316 7.959zM285.845 433.078v0c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959zM672.497 153.865v0c1.99-1.99 4.642-3.316 7.959-3.316 2.653 0 5.969 0.663 7.959 3.316v0c1.99 1.99 3.316 5.306 3.316 7.959s-0.663 5.969-3.316 7.959v0c-1.99 1.99-4.642 3.316-7.959 3.316-2.653 0-5.969-0.663-7.959-3.316v0c-1.99-1.99-3.316-5.306-3.316-7.959 0-3.316 1.326-5.969 3.316-7.959zM563.067 121.368c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959v0c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959 0-2.653 0.663-5.969 3.316-7.959zM751.42 284.518v0c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959zM728.207 514.653c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959zM773.969 740.145c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959zM795.855 599.544c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959 0 2.653-1.326 5.969-3.316 7.959zM722.902 844.269v0c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959 0 2.653-1.326 5.969-3.316 7.959z"></path>
              <path d="M641.99 591.585l-7.959 8.622v190.342l7.295 7.295h17.244l5.969-8.622 45.762-177.078-7.959-20.56h-45.098z"></path>
              <path d="M703.005 418.487l-38.466-169.782-5.969-8.622h-17.244l-7.295 7.959v182.383l7.959 8.622h53.057z"></path>
              <path d="M547.15 778.611v68.974c0 3.979 1.99 7.959 4.642 10.611l20.56 19.896c0.663 0.663 1.326 1.326 2.653 1.99-0.663 1.99-0.663 4.642-0.663 6.632 0 8.622 3.316 15.917 9.285 21.886 5.306 5.306 13.264 9.285 21.886 9.285s15.917-3.316 21.886-9.285c5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285-4.642 0-8.622 1.326-12.601 2.653l-17.244-17.244v-160.497c2.653-1.326 5.306-3.316 7.295-5.306 5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886c2.653 2.653 5.306 4.642 8.622 5.969v69.637h-50.404v-174.425h63.005c0.663 0 0.663 0 1.326 0 3.316 0 5.969-1.326 8.622-3.979l36.477-36.477c2.653 0.663 5.306 1.326 7.959 1.326 8.622 0 15.917-3.316 21.886-9.285 5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285-3.316 0-6.632 0.663-9.948 1.99l-30.508-30.508v-79.585c3.316-1.326 5.969-3.316 7.959-5.969 5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886c2.653 2.653 5.306 4.642 7.959 5.969v83.565c-0.663 2.653 0 5.306 1.326 7.959v0c1.326 2.653 2.653 4.642 4.642 5.969l32.497 32.497c-1.326 3.316-1.326 6.632-1.326 9.948 0 3.979 0.663 7.959 1.99 11.275l-31.171 31.171h-57.036v-46.425l-8.622-8.622h-275.233l-8.622 8.622v168.456l18.57 18.57 87.544 29.181 9.948-8.622-61.679-61.679v-100.808h184.373v99.482h-47.088l-25.865-23.876-0.663-0.663c0.663-1.99 0.663-4.642 0.663-6.632 0-8.622-3.316-15.917-8.622-21.223v0c-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.223v0c5.306 5.306 13.264 9.285 21.886 9.285 4.642 0 8.622-0.663 12.601-2.653l23.212 23.212v67.648l-26.528 26.528c-3.316-1.326-7.295-1.99-11.275-1.99-8.622 0-15.917 3.316-21.223 9.285v0c-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886v0c5.306 5.306 13.264 9.285 21.223 9.285 8.622 0 15.917-3.316 21.886-9.285 5.306-5.306 9.285-13.264 9.285-21.886 0-2.653-0.663-5.306-1.326-7.959l29.181-29.181c3.979-2.653 6.632-7.295 6.632-12.601v-64.995h39.13v259.316l-35.15 35.15h-54.383v-42.446l16.58-16.58c0.663-0.663 1.326-1.326 1.99-2.653 2.653 0.663 5.969 1.326 9.285 1.326 8.622 0 15.917-3.316 21.886-9.285 5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.223 8.622v0c-5.306 5.306-9.285 13.264-9.285 21.886 0 3.979 0.663 7.295 1.99 10.611-0.663 0.663-1.326 0.663-1.99 1.326l-11.275 11.275-51.067-51.067c-0.663-0.663-1.326-1.326-1.99-1.99v0 0c-3.316-1.99-6.632-3.316-10.611-2.653h-44.435l-27.192-59.026c4.642-5.306 7.295-11.938 7.295-19.896 0-8.622-3.316-15.917-9.285-21.223v0c-5.306-5.306-13.264-9.285-21.886-9.285s-15.917 3.316-21.886 9.285v0c-5.306 5.306-9.285 13.264-9.285 21.223 0 8.622 3.316 15.917 9.285 21.223v0c5.306 5.306 12.601 8.622 20.56 9.285l29.845 64.995c1.326 3.979 3.979 7.295 7.295 8.622v0 0c1.99 1.326 4.642 1.326 7.295 1.326h47.751l53.72 53.72v42.446h-28.518l-34.487-34.487h-66.984l-67.648-67.648v-37.803l-33.824-33.824-39.13-156.518v-11.275l47.088 21.886v0.663c0 8.622 3.316 15.917 9.285 21.223v0c5.306 5.306 13.264 9.285 21.886 9.285s15.917-3.316 21.886-9.285c5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285-6.632 0-12.601 1.99-17.907 5.969l-59.689-27.192v-166.466l44.435-44.435v-19.896h41.782l17.907 45.762c0 0.663 0.663 1.326 1.326 1.99l-43.772 43.772c-2.653 2.653-3.979 5.969-3.979 9.285v0 0 0 31.171c-2.653 1.326-5.969 3.316-7.959 5.969-5.306 5.306-9.285 13.264-9.285 21.886s3.316 15.917 9.285 21.886c5.306 5.306 13.264 9.285 21.886 9.285s15.917-3.316 21.886-9.285c5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-2.653-2.653-5.306-3.979-7.959-5.969v-25.202l84.891-85.554c0.663-0.663 0.663-0.663 1.326-1.326v0l0.663-0.663c1.326-1.99 1.99-4.642 1.99-7.295v-92.187l80.249 46.425c0 1.326 0 1.99 0 3.316 0 8.622 3.316 15.917 8.622 21.223v0c5.306 5.306 13.264 9.285 21.886 9.285s15.917-3.316 21.886-9.285c5.306-5.306 9.285-13.264 9.285-21.886s-3.316-15.917-9.285-21.886c-5.306-5.306-13.264-9.285-21.886-9.285-5.969 0-11.275 1.326-15.917 4.642l-100.808-58.363c-1.99-1.326-4.642-2.653-7.959-2.653-7.295 0-13.927 5.969-13.927 13.927v109.43l-21.886 21.886-17.907-45.098c-1.99-5.306-7.295-8.622-12.601-8.622h-51.067v-17.907l49.741-49.741v-70.301l103.461-103.461h44.435l43.772-43.772h76.269l2.653-7.295-61.016-46.425h-41.119l-43.772 43.772h-44.435l-127.337 127.337-7.295 7.959v70.301l-49.078 49.078v66.321l-36.477 36.477-7.959 7.295v236.104l0.663 3.316 44.435 170.446 1.99 7.295 27.855 27.855v37.803l7.959 7.959 83.565 82.238 7.959 7.959h66.984l33.824 33.824h154.528l67.648-66.321v-178.404h49.741zM596.891 878.756c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316c-1.99-1.99-3.316-4.642-3.316-7.959 0-2.653 1.326-5.969 3.316-7.959zM552.456 645.969c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959zM567.71 346.86c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959zM606.176 498.736c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959zM348.85 624.083v0c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316v0c1.99 1.99 3.316 4.642 3.316 7.959 0 2.653-1.326 5.969-3.316 7.959zM346.197 797.181c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959v0c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959 0 2.653-1.326 5.969-3.316 7.959zM372.725 871.461v0c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959 0.663-3.316 1.326-5.969 3.316-7.959zM189.016 775.959v0c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959v0c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316v0c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959zM124.021 641.99c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959zM133.969 533.886c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316c-1.99-1.99-3.316-4.642-3.316-7.959s1.326-5.969 3.316-7.959c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959zM332.269 327.627v0c1.99-1.99 4.642-3.316 7.959-3.316s5.969 1.326 7.959 3.316c1.99 1.99 3.316 4.642 3.316 7.959s-1.326 5.969-3.316 7.959c-1.99 1.99-4.642 3.316-7.959 3.316s-5.969-1.326-7.959-3.316v0c-1.99-1.99-3.316-4.642-3.316-7.959 0-2.653 1.326-5.969 3.316-7.959z"></path>
            </svg>
          </svg>
        </a>
      </Link>
    </header>
    <nav className="sidebar__nav">
      <ul className="nav">
        <li className="nav__item text-center">
          <Link href="/dashboard">
            <a href="/" className="nav__link">
              <svg width="32" height="32" className="svg-icon icon-main ">
                <svg id="icon-main" viewBox="0 0 1024 1024" width="100%" height="100%">
                  <path d="M928 480c-41.406 0.094-76.687 26.461-90.029 63.331l-101.971 0.669c-0.031 0-0.067 0-0.104 0-13.65 0-25.304 8.547-29.902 20.581l-53.194 142.299-76.8-488c-2.553-15.336-15.722-26.883-31.588-26.883-0.145 0-0.289 0.001-0.434 0.003h0.022c-0.173-0.003-0.377-0.005-0.582-0.005-15.524 0-28.467 11.055-31.384 25.722l-72.034 384.204-56-195.2c-4.1-13.273-16.26-22.749-30.634-22.749-0.481 0-0.959 0.011-1.434 0.032-0.603-0.052-1.384-0.081-2.172-0.081-13.439 0-24.942 8.284-29.684 20.024l-53.837 140.055h-80.32c-13.577-37.605-48.961-64-90.51-64-53.019 0-96 42.981-96 96s42.981 96 96 96c41.549 0 76.933-26.395 90.298-63.331l102.291-0.669c0.009 0 0.020 0 0.031 0 13.409 0 24.891-8.247 29.652-19.946l30.157-76.054 68.16 233.28c4.085 13.297 16.257 22.797 30.648 22.797 15.55 0 28.509-11.091 31.399-25.794l62.113-330.123 67.84 424.96c2.146 14.19 13.808 25.395 28.345 26.869l3.655 0.011c0.031 0 0.067 0 0.104 0 13.65 0 25.304-8.547 29.902-20.581l88.074-235.419h79.68c13.577 37.605 48.961 64 90.51 64 53.019 0 96-42.981 96-96s-42.981-96-96-96c-0.095 0-0.19 0-0.284 0zM96 608c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32s-14.327 32-32 32zM928 608c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32s-14.327 32-32 32z"></path>
                </svg>
              </svg>
              <span className="nav__text">Главная</span>
            </a>
          </Link>
        </li>
        <li className="nav__item text-center">
          <Link href="/dashboard/courses">
            <a className="nav__link">
              <svg width="32" height="32" className="nav__icon">
                <svg id="icon-courses" viewBox="0 0 1024 1024" width="100%" height="100%">
                  <path d="M864 128c0-17.673-14.327-32-32-32h-544c-70.692 0-128 57.308-128 128v592c2.101 62.327 53.132 112.055 115.778 112.055 1.26 0 2.514-0.020 3.764-0.060l552.458 0.005c0.025 0 0.054 0 0.083 0 17.673 0 32-14.327 32-32 0-7.1-2.312-13.66-6.225-18.968-12.578-16.752-20.179-38.004-20.179-61.032s7.601-44.28 20.431-61.385c3.61-4.932 5.89-11.45 5.89-18.501 0-0.040 0-0.080 0-0.12v0.006-608zM800 704h-448v-544h448v544zM288 160v544h-8.64c-19.872 0.036-39.103 5.001-56.051 13.765l0.691-493.765c0-35.346 28.654-64 64-64zM780.48 864h-501.12c-1.666 0.204-3.595 0.32-5.552 0.32-26.686 0-48.32-21.634-48.32-48.32s21.634-48.32 48.32-48.32c1.956 0 3.885 0.116 5.781 0.342l500.891-0.022c-4.579 14.357-7.218 30.87-7.218 48s2.639 33.643 7.533 49.156z"></path>
                  <path d="M448 288h256c17.673 0 32-14.327 32-32s-14.327-32-32-32h-256c-17.673 0-32 14.327-32 32s14.327 32 32 32z"></path>
                  <path d="M672 320h-192c-17.673 0-32 14.327-32 32s14.327 32 32 32h192c17.673 0 32-14.327 32-32s-14.327-32-32-32z"></path>
                </svg>
              </svg>
              <span className="nav__text">Курсы</span>
            </a>
          </Link>
        </li>
        <li className="nav__item text-center">
          <Link href="/dashboard/vebinari">
            <a className="nav__link">
              <svg width="32" height="32" className="nav__icon">
                <svg id="icon-courses" viewBox="0 0 1024 1024" width="100%" height="100%">
                  <path d="M832 192h-640c-70.692 0-128 57.308-128 128v384c0 70.692 57.308 128 128 128h640c70.692 0 128-57.308 128-128v-384c0-70.692-57.308-128-128-128zM896 704c0 35.346-28.654 64-64 64h-640c-35.346 0-64-28.654-64-64v-384c0-35.346 28.654-64 64-64h640c35.346 0 64 28.654 64 64v384z"></path>
                  <path d="M654.72 482.24l-218.56-125.44c-4.965-2.882-10.926-4.584-17.284-4.584-19.075 0-34.574 15.312-34.876 34.315v250.908c0.302 19.032 15.801 34.344 34.876 34.344 6.358 0 12.319-1.701 17.452-4.673l218.392-125.35c10.24-6.124 16.989-17.154 16.989-29.76s-6.749-23.636-16.832-29.673z"></path>
                </svg>
              </svg>
              <span className="nav__text">Вебинары</span>
            </a>
          </Link>
        </li>
        <li className="nav__item text-center">
          <Link href="/dashboard/blog">
            <a className="nav__link">
              <svg width="32" height="32" className="nav__icon">
                <svg id="icon-blog" viewBox="0 0 1024 1024" width="100%" height="100%">
                  <path d="M928 160h-704c-17.673 0-32 14.327-32 32v96h-96c-17.673 0-32 14.327-32 32v448c0 53.019 42.981 96 96 96h704c53.019 0 96-42.981 96-96v-576c0-17.673-14.327-32-32-32zM128 352h64v416c0 17.673-14.327 32-32 32s-32-14.327-32-32v-416zM896 768c0 17.673-14.327 32-32 32h-613.76c3.485-9.11 5.664-20.286 5.76-31.959v-544.041h640v544z"></path>
                  <path d="M352 736h448c17.673 0 32-14.327 32-32s-14.327-32-32-32h-448c-17.673 0-32 14.327-32 32s14.327 32 32 32z"></path>
                  <path d="M352 608h448c17.673 0 32-14.327 32-32s-14.327-32-32-32h-448c-17.673 0-32 14.327-32 32s14.327 32 32 32z"></path>
                  <path d="M608 480h192c17.673 0 32-14.327 32-32s-14.327-32-32-32h-192c-17.673 0-32 14.327-32 32s14.327 32 32 32z"></path>
                  <path className="path5 fill-color2" d="M608 352h192c17.673 0 32-14.327 32-32s-14.327-32-32-32h-192c-17.673 0-32 14.327-32 32s14.327 32 32 32z"></path>
                  <path className="path6 fill-color2" d="M352 288h128c17.673 0 32 14.327 32 32v128c0 17.673-14.327 32-32 32h-128c-17.673 0-32-14.327-32-32v-128c0-17.673 14.327-32 32-32z"></path>
                </svg>
              </svg>
              <span className="nav__text">Блог</span>
            </a>
          </Link>
        </li>
        <li className="nav__item text-center">
          <a href="/dashboard/career" className="nav__link">
            <svg width="32" height="32" className="nav__icon">
              <svg id="icon-career" viewBox="0 0 1024 1024" width="100%" height="100%">
                <path d="M418.202 379.52c-28.952 28.954-46.859 68.952-46.859 113.133 0 88.366 71.634 160 160 160s160-71.634 160-160c0-44.181-17.907-84.179-46.859-113.133-28.827-29.234-68.869-47.343-113.141-47.343s-84.314 18.109-113.123 47.325zM599.232 560.522c-17.384 17.402-41.409 28.167-67.949 28.167-53.042 0-96.042-42.999-96.042-96.042s42.999-96.042 96.042-96.042c53.042 0 96.041 42.999 96.042 96.041-0.002 26.499-10.735 50.5-28.091 67.886zM848.109 175.875c-54.938-54.938-145.187-69.843-254.438-41.92-25.785-3.472-125.6 38.65-207.881 102.336-24.663 3.069-169.47 28.298-239.118 97.959-16.2 14.444-26.352 35.373-26.352 58.674 0 4.991 0.466 9.872 1.356 14.604 10.839 55.589 84.535 95.551 115.354 110.005 3.404 61.543 37.808 129.801 90.486 178.616 36.316 44.082 102.524 81.748 177.555 90.56 15.77 30.817 55.908 104.769 112.071 115.611 4.267 0.884 9.243 1.4 14.339 1.405 22.621-0.238 43.573-10.347 58.188-26.344 69.496-69.503 94.92-214.415 99.007-240.472 16.989-7.394 72.553-99.269 100.397-202.519 28.88-113.202 14.006-203.577-40.963-258.514zM184.429 394.813c-0.045-0.456-0.071-0.986-0.071-1.522 0-5.771 2.991-10.843 7.507-13.751 6.017-11.478 53.461-42.087 107.357-57.327-13.21 11.004-43.55 63.932-57.179 123.242-16.475-1.66-42.016-22.592-57.302-50.020zM644.48 832.064c-2.986 4.537-8.055 7.491-13.815 7.491-0.472 0-0.939-0.020-1.401-0.059-15.327-4.922-39.258-27.629-52.426-56.303 23.053-0.532 79.819-24.463 126.111-61.060 0.324 17.077-23.427 68.81-58.804 110.334zM828.016 414.4c-1.677 46.436-50.514 144.987-122.743 221.13-64.883 64.777-194.601 153.244-332.32 15.526-137.811-137.843-49.312-267.501 15.718-332.531 21.758-33.385 112.916-93.83 217.363-121.754 26.609-7.507 56.784-12.029 87.957-12.398 3.153-0.208 6.589-0.325 10.052-0.325 37.917 0 72.553 14.046 98.989 37.219 37.607 37.638 46.766 108.076 24.983 193.132zM321.296 732.275c18.235 12.855-0.719 1.478-16.305-13.397 15.372 15.919-0.718 1.551-12.965-15.732-8.013-16.156-25.426-29.46-46.172-32.822-21.515 0.212-40.936 10.244-53.834 25.862-43.69 43.682-61.754 150.716-63.658 162.777-0.254 1.514-0.399 3.258-0.399 5.037 0 17.669 14.321 31.994 31.989 32 0.025 0 0.054 0 0.082 0 1.738 0 3.441-0.148 5.097-0.432 11.886-1.895 118.978-19.911 162.542-63.508 15.412-12.455 25.6-31.776 26.031-53.49-1.913-18.25-14.421-36.244-32.084-46.122zM282.422 786.813c-7.853 9.364-41.757 27.406-79.404 35.235-1.533-15.013 12.59-51.098 34.563-81.067 0.342-0.168 1.062-0.888 1.75-1.512 0.342 0.499 0.72 0.96 1.062 1.437-18.537-25.898-2.041 1.155 19.456 23.333-22.372-21.905-1.961 1.288 22.668 18.979l1.998 1.467c-0.656 0.659-1.344 1.379-2.093 2.128z"></path>
              </svg>
            </svg>
            <span className="nav__text">Карьера</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
