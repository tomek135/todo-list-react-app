import React, { FC } from 'react';
import styles from './Registration.module.css';

interface RegistrationProps {}

const Registration: FC<RegistrationProps> = () => (
  <div className={styles.Registration} data-testid="Registration">
    Registration Component
  </div>
);

export default Registration;
