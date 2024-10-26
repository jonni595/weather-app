import DateStamp from "../components/DateStamp";

const Grid = () => {
  return (
    <main className="grid">
      <aside className="primary-aside">
        <DateStamp city="Vancouver" />
      </aside>
      <aside className="secondary-aside">aside 2</aside>
      <section className="primary-section">section 1</section>
      <section className="secondary-section">section 2</section>
      <footer className="footer">footer</footer>
    </main>
  );
};

export default Grid;
