// Personal Information Part
export function PersonalProfile({
  firstName,
  lastName,
  emailAddress,
  phone,
  Bio,
}) {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid items-center gap-10  px-5 py-5 justify-center rounded-xl border-2 border-black">
        <div className="grid col-span-2 text-xl text-black font-bold">
          <h1>Personal Information</h1>
        </div>
        <div className="col-span-1 ">
          <p>Firstname</p>
          <p>{firstName ? firstName : "Ruby"}</p>
        </div>
        <div className="col-span-1">
          <p>Lastname</p>
          <p>{lastName ? lastName : "Jane"}</p>
        </div>
        <div className="col-span-1">
          <p>Email Address</p>
          <p className="line-clamp-2">
            {emailAddress ? emailAddress : "RubyJane@gmail.com"}
          </p>
        </div>
        <div>
          <p className="col-span-1">Phone Number</p>
          <p>{phone ? phone : "+885 85 934 733"}</p>
        </div>
        <div className="col-span-1">
          <p>Bio</p>
          <p>{Bio ? Bio : "None"}</p>
        </div>
      </div>
    </section>
  );
}
// Address Infromation Profile
export function InformationProfile({ country, state, zip, street, number }) {
  return (
    <section>
      <div className="grid grid-cols-2 items-center gap-10  px-5 py-5 justify-center rounded-xl border-2 border-black">
        <div className="col-span-2 text-xl text-black font-bold">
          <h1>Address</h1>
        </div>
        <div className="col-span-1">
          <p>Country</p>
          <p>{country ? country : "Phnom Penh"}</p>
        </div>
        <div className="col-span-1">
          <p>State</p>
          <p>{state ? state : "Terk Thla"}</p>
        </div>
        <div className="col-span-1">
          <p>Zip Code</p>
          <p>{zip ? zip : "040404"}</p>
        </div>
        <div>
          <p className="col-span-1">State</p>
          <p>{street ? street : "112st"}</p>
        </div>
        <div className="col-span-1">
          <p>Home Number</p>
          <p>{number ? number : "None"}</p>
        </div>
      </div>
    </section>
  );
}
