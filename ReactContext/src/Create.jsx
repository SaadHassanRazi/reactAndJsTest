import React, { useState } from "react";

const Create = () => {
  const [incomeData, setIncomeData] = useState("");
  const [date, setDate] = useState();

  const navigate = useNavigate();
  const postData = () => {
    axios
      .post("ApiEnpoint", {
        incomeData,
        date,
      })
      .then(() => {
        navigate("/dashboard");
      });
  };

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="expenseData">Add Expense</label>
          <input
            type="text"
            onChange={(e) => {
              setIncomeData(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            id=""
          />
        </div>
        <button type="submit" onClick={postData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
