import { SideMenu } from "../components/button/sideMenu/sideMenu";
import { CardProfile } from "./profile/CardProfile";
import {
  InformationProfile,
  PersonalProfile,
} from "./profile/InformationProfile";
export function Profile() {
  return (
    <section className="max-w-screen-2xl mx-10">
      <div className="grid grid-cols-3 gap-3 justify-center">
        <div className="grid col-span-1 gap-3">
          <SideMenu />
        </div>
        <div className="grid col-span-2 gap-3">
          <h1 className="text-2xl font-bold text-black ">My Profile</h1>
          <CardProfile />
          <PersonalProfile />
          <InformationProfile />
        </div>
      </div>
    </section>
  );
}
