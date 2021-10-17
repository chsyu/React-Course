import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sections = [
   {
      title: 'Architecto aliquam',
      subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
   },
   {
      title: 'Ceritatis placeat',
      subtitle: 'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?'
   },
   {
      title: 'Vitae voluptates',
      subtitle: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
   },
   {
      title: 'Architecto aliquam',
      subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
   },
];


const ScrollElements = () => {

   const revealRefs = useRef([]);
   revealRefs.current = [];

   const addToRefs = ref => {
      if (ref && !revealRefs.current.includes(ref)) {
         revealRefs.current.push(ref);
      }
   };

   useEffect(() => {

      revealRefs.current.forEach((ref, index) => {
         gsap.fromTo(ref, {
            autoAlpha: 0
         }, {
            duration: 1,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
               id: `section-${index + 1}`,
               // pin: true,
               // scrub: true,
               trigger: ref,
               // markers: true,
               start: 'top center+=100', //當ref的top碰到畫面中央+100px的高度時，就觸發動畫
               toggleActions: 'play none none reverse'
               //play none none reverse 對應四個動作
               // onEnter - scrolling down, start meets scroller-start
               // onLeave - scrolling down, end meets scroller-end
               // onEnterBack - scrolling up, end meets scroller-end
               // onLeaveBack - scrolling up, start meets scroller-star
            }
         });

      });

   }, []);

   return (
      <div className="App">
         <main className="App-main">
            {
               sections.map(({ title, subtitle }) => (
                  <div className="App-section" key={title} ref={addToRefs}>
                     <h2>{title}</h2>
                     <p>{subtitle}</p>
                  </div>
               ))
            }
         </main>
      </div>
   );
}

export default ScrollElements;