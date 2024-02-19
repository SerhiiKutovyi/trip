import css from './SearchTrip.module.css';

const SearchTrip = () => {
  return (
    <>
      <form>
        <input
          className={css.search}
          type="search"
          id="search"
          name="search"
          placeholder="Search your trip"
        />
      </form>
      <div>{[1, 2, 3, 4, 5, 6, 7]}</div>
    </>
  );
};

export default SearchTrip;
