import Link from "next/link";

const HomePage = () => {
  return (
    <div
      className="relative h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-screen"
      style={{
        backgroundImage:
          "url('https://tecdn.b-cdn.net/img/Photos/Inne/ostia.jpg')",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(2, 56, 53, 0.7)" }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">
              Admin Side of Journal Motion
            </h2>
            <h4 className="mb-6 text-xl font-semibold">
              Wanna Explore Journal Motion
            </h4>
            <Link href="/trending">
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Learn more about Rome
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
