import { useAppSelector } from "@/app/store";
import OpportunityCard from "@/components/OpportunityCard";

const SearchResultContainer = () => {
  const searchQuery = useAppSelector(
    (state) => state.searchReducer.value.query
  );
  const opportunities = useAppSelector(
    (state) => state.opportunityReducer.value
  );

  const regex = new RegExp(`^${searchQuery}`, "i");

  const filteredOpportunities = opportunities.filter((opportunity) =>
    regex.test(opportunity.title)
  );

  return (
    <div>
      {filteredOpportunities.length === 0 ? (
        <h1>No opportunities found</h1>
      ) : (
        filteredOpportunities.map((opportunity, index) => (
          <OpportunityCard key={index} data={opportunity} />
        ))
      )}
    </div>
  );
};

export default SearchResultContainer;
