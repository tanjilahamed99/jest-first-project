import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <p data-testid="state-type">{typeof isToggled === 'boolean' ? 'Valid Boolean' : 'Invalid'}</p>
      <button onClick={() => setIsToggled((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default Toggle;
