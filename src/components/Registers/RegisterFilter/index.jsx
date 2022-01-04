import './index.css';

const RegisterFilter = ({ onChangeFilter, yearRange, selectedYear }) => {
  const selectChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };

  const options = yearRange.map((i) => (
    <option key={i.id} value={i.year}>
      {i.year}
    </option>
  ));

  return (
    <div className="registers-filter">
      <div className="registers-filter_control">
        <label htmlFor="yearFilter">Filter by year</label>

        <select
          onChange={selectChangeHandler}
          name="yearFilter"
          id="yearFilter"
          value={selectedYear}
        >
          <option value="0">Select</option>
          {options}
        </select>
      </div>
    </div>
  );
};

export default RegisterFilter;
