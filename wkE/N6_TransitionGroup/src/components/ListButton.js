import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";

export default function ListButton() {

   const [ showList, setShowList ] = useState(false);
   const [ highlightedHobby, setHighlightedHobby ] = useState(false);
   
   const onShowList = () => setShowList(!showList);
   const listSwitch = () => setHighlightedHobby(!highlightedHobby);

   return (
      <div className="container">
        <button className="display" onClick={onShowList}>
          Obinna
        </button>
        <CSSTransition
          in={showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={listSwitch}
          onExit={listSwitch}
        >
          <div className="list-body">
            <ul className="list">
              <li
                className={cx("list-item", {
                  "list-item--active": highlightedHobby
                })}
              >
                Writing JavaScript
              </li>
              <li className="list-item"> Running</li>
              <li className="list-item"> Technical Writing</li>
              <li className="list-item"> Writing Clean code</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
   );
}

