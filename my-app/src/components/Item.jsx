const Item = () => {
  return (
    <section className="item text-center my-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {/* grid item */}
        <div>
          <div className="layout bg-slate-100 p-8 rounded-lg">
            <div className="-translate-y-10">
              <i className="bi bi-collection bg-blue-600 text-white text-3xl py-3 px-4 rounded-lg"></i>
            </div>
            <h3 className="font-bold text-3xl m-3">Fresh new layout</h3>
            <p className="text-lg">
              With Bootstrap 5, we have created a fresh new layout for this
              template!
            </p>
          </div>
        </div>
        {/* grid item */}
        <div>
          <div className="layout bg-slate-100 p-8 rounded-lg">
            <div className="-translate-y-10">
              <i className="bi bi-cloud-download bg-blue-600 text-white text-3xl py-3 px-4 rounded-lg"></i>
            </div>
            <h3 className="font-bold text-3xl m-3">Free to download</h3>
            <p className="text-lg">
              As always, Start Bootstrap has a powerful collectin of free
              templates.
            </p>
          </div>
        </div>
        {/* grid item */}
        <div>
          <div className="layout bg-slate-100 p-8 rounded-lg">
            <div className="-translate-y-10">
              <i className="bi bi-card-heading bg-blue-600 text-white text-3xl py-3 px-4 rounded-lg"></i>
            </div>
            <h3 className="font-bold text-3xl m-3">Jumbotron hero header</h3>
            <p className="text-lg">
              The heroic part of this template is the jumbotron hero header!
            </p>
          </div>
        </div>
        {/* grid item */}
        <div>
          <div className="layout bg-slate-100 p-8 rounded-lg">
            <div className="-translate-y-10">
              <i className="bi bi-bootstrap bg-blue-600 text-white text-3xl py-3 px-4 rounded-lg"></i>
            </div>
            <h3 className="font-bold text-3xl m-3">Feature boxes</h3>
            <p className="text-lg">
              We have created some custom feature boxes using Bootstrap icons!
            </p>
          </div>
        </div>
        {/* grid item */}
        <div>
          <div className="layout bg-slate-100 p-8 rounded-lg">
            <div className="-translate-y-10">
              <i className="bi bi-code bg-blue-600 text-white text-3xl py-3 px-4 rounded-lg"></i>
            </div>
            <h3 className="font-bold text-3xl m-3">Simple clean code</h3>
            <p className="text-lg">
              We keep our dependencies up to date and squash bugs as they come!
            </p>
          </div>
        </div>
        {/* grid item */}
        <div>
          <div className="layout bg-slate-100 p-8 rounded-lg">
            <div className="-translate-y-10">
              <i className="bi bi-patch-check bg-blue-600 text-white text-3xl py-3 px-4 rounded-lg"></i>
            </div>
            <h3 className="font-bold text-3xl m-3">A name you trust</h3>
            <p className="text-lg">
              Start Bootstrap has been the leader in free Bootstrap templates
              since 2013!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
