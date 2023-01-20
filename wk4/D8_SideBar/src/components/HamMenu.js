export default function HamMenu({onClick, isOnTouch}) {
   return (
      <>
         {isOnTouch ? (
            <span onClick={onClick} className="ham-menu show-mobile">
               <span className="ham-menu-bar1 ham-menu-bar1--touch"></span>
               <span className="ham-menu-bar2 ham-menu-bar2--touch"></span>
               <span className="ham-menu-bar3 ham-menu-bar3--touch"></span>
            </span>
         ):(
            <span onClick={onClick} className="ham-menu show-mobile">
               <span className="ham-menu-bar1"></span>
               <span className="ham-menu-bar2"></span>
               <span className="ham-menu-bar3"></span>
            </span>
         )}
      </>
   );
}