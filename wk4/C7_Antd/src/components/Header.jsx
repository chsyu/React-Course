export default function Header({ title, slogan }) {
    return (
       <div className="header">
          <h1 className="header-title">
             {title}
          </h1>
          <p
             className="header-slogan">
             {slogan}
          </p>
          <hr className="hr-header-line" />
       </div>
    );
 }