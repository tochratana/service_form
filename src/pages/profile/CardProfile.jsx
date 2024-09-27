export function CardProfile({ image, name, email }) {
  return (
    <>
      <section className="grid grid-cols-3 gap-5">
        <img
          src={
            image
              ? image
              : "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
          }
          className="w-14 h-14 md:w-20 md:h-20 grid col-span-1"
          alt=""
        />
        <div className="grid col-span-2">
          <p>{name ? name : "RubyJane"}</p>
          <p>{email ? email : "rubyjane@gmail.com"}</p>
        </div>
      </section>
    </>
  );
}
