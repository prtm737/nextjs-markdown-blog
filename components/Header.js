import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="bg-[#4C3A51] mb-8 py-4">
        <div className=" container flex mx-auto justify-center text-white">
          <Link href="/">
            <a className="text-2xl font-bold">PrtmTechie</a>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
