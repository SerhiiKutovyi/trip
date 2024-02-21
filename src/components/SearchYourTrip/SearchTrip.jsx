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
    </>
  );
};

export default SearchTrip;
