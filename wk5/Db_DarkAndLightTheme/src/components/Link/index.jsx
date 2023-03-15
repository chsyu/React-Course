import { Link } from "react-router-dom"
import { theme } from "antd"

export default function (props) {
   const {
      token: { colorTextBase },
    } = theme.useToken();
   return (
      <Link {...props} style ={{
         textDecoration: 'none',
         color: colorTextBase,
      }}>
         {props.children}
      </Link>
   )
}