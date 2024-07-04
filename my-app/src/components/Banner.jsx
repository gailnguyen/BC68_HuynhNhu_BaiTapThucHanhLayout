const Banner = () => {
  return (
    <section className="banner text-center leading-loose">
      <div className="container mx-auto">
        <div className="my-10 p-20 banner_layout bg-slate-100 rounded-lg">
          <h1 className="font-bold text-6xl mb-6">A warm welcome!</h1>
          <p className="text-2xl mb-6 leading-relaxed">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="px-5 py-4 text-xl rounded-md bg-blue-600 text-white">
            Call to action
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
