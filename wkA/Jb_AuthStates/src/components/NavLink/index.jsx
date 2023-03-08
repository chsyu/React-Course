import { NavLink } from "react-router-dom"
import { theme } from "antd"

export default function (props) {
   const {
      token: { colorTextBase },
    } = theme.useToken();
   return (
      <NavLink {...props} style ={{
         textDecoration: 'none',
         color: colorTextBase,
      }}>
         {props.children}
      </NavLink>
   )
}