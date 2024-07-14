import Item1 from "../items/Item1";
import Item2 from "../items/Item2";
import Item3 from "../items/Item3";
import Item4 from "../items/Item4";
import Item5 from "../items/Item5";
import Item6 from "../items/Item6";

const Item = () => {
  return (
    <section className="item text-center my-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
        <Item5 />
        <Item6 />
      </div>
    </section>
  );
};

export default Item;
