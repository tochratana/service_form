export default function UnstickyNavbar() {
  return (
    <div>
      <header className="grid grid-cols-1 md:grid-cols-3 bg-primary-500 p-3 min-w-80">
        <div className="hidden md:grid"></div>
        <div className="grid place-content-center ">
          <div className="flex gap-3 items-center">
            <i class="fa-solid fa-face-smile text-white"></i>
            <p className="text-white">Where Finding Services is Effortless!</p>
          </div>
        </div>
        <div></div>
      </header>
    </div>
  );
}
