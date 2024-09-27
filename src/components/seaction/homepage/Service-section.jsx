import ServicesCards from "../../cards/homepage/Services-Cards";

let Service = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 p-10   ">
      <section className="grid place-content-center">
        <ServicesCards />
      </section>
      <section className="grid place-content-center">
        <ServicesCards />
      </section>
      <section className="grid place-content-center">
        <ServicesCards />
      </section>
    </div>
  );
};
export default Service;
