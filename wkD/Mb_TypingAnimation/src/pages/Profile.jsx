import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header'
import ProfileCard from '@/components/ProfileCard'
import Footer from '@/components/Footer'

function Profile() {
   const title = "Profile";

  return (
    <div className="main-layout min-h-screen">
      <div className="container mx-auto ">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header
          title={title}
          slogan="The best place to buy your favorite products"
        />
        <ProfileCard />
      </div>
      <Footer />
    </div>
  )
}

export default Profile
