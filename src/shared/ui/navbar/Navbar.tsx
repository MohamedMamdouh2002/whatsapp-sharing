import MainLogo from "../../MainLogo";
import Container from "../Container/Container";
function Navbar() {
  return (
    <>
      <nav className="fixed md:top-0 z-50 md:right-0 md:left-0 left-2 right-2 top-4 rounded-xl md:rounded-none bg-[var(--color-primary)] shadow-lg dark:bg-[var(--color-dark)]">
        <Container className="flex justify-center items-center gap-4 px-6 py-4">
          <MainLogo />
          <h1 className="text-white font-semibold text-xl lg:text-3xl">
            MUST GOT Talent
          </h1>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
