import notFound from '../assets/404.svg';

function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <img src={notFound} alt="Not found" />
      <div className="flex justify-center bg-dark text-xl sm:text-2xl rounded-md p-3 mt-3 no-data">
        no such page :(
      </div>
    </section>
  );
}

export default NotFoundPage;
