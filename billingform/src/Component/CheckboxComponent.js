import React, { useState } from 'react';

function CheckboxComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check this box
      </label>
    </div>
  );
}

export default CheckboxComponent;
