import React, { useState } from "react";
// import Select from "react-select";
import styles from "../../styles/stylescss/Roles.module.css";

const options = [
  { value: "Admin", label: "Admin" },
  { value: "Manager", label: "Manager" },
  { value: "User", label: "User" },
];
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <span className={styles.dropdown_style}>
        {/* <Select defaultValue={selectedOption} options={options} /> */}
      </span>
    </>
  );
};

export default Dropdown;
