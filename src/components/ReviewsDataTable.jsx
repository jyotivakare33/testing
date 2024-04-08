import DataTable from "react-data-table-component";

const ReviewsDataTable = (props) => {
  const columns = [
    {
      name: "Review ID",
      selector: (row) => row.reviewId,
      sortable: true,
    },
    {
      name: "Grantee ID",
      selector: (row) => row.granteeId,
      sortable: true,
    },
    {
      name: "Grantee Name",
      selector: (row) => row.granteeName,
      sortable: true,
    },
    {
      name: "Reviews Date",
      selector: (row) => row.reviewDate,
      sortable: true,
    },
  ];

  var employees = {
    accounting: [],
  };

  // eslint-disable-next-line react/prop-types
  props.reviewsData.map(function (review) {
    employees.accounting.push({
      reviewId: review.trip_id,
      granteeId: review.fed_grantee_id,
      granteeName: review.Name,
      reviewDate: review.review_date,
    });
  });

  return <DataTable columns={columns} data={employees.accounting} pagination />;
};

export default ReviewsDataTable;
