import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';


const ErrorThrower = () => {
    const [throwError, setThrowError] = useState(false);
    if (throwError) {
      throw new Error('Intentional Error for Testing');
    }
    return (
      <Button className='error' onClick={() => setThrowError(true)}>Trigger Error</Button>
    );
};
export default ErrorThrower;