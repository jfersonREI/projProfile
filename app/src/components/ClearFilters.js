import { withSearch } from "@elastic/react-search-ui";

function ClearFilters({ filters, clearFilters }) {
  return (
    <div className="mb-6">
      <button
        className="bg-rei-gray-10 px-6 py-2"
        onClick={() => clearFilters()}
      >
        Clear {filters.length} Filters
      </button>
    </div>
  );
}

export default withSearch(({ filters, clearFilters }) => ({
  filters,
  clearFilters,
}))(ClearFilters);
