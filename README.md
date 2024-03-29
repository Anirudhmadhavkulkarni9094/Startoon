# Patient Information Dashboard

This is a patient information dashboard built using React, consisting of multiple components to display essential patient data and statistics. The dashboard provides an organized and visually appealing way to access information about a patient.

## Components

### 1. Header
- **Description:** The header component displays the patient's basic information, including their name, gender, age, and patient ID. It also features the patient's profile picture.

### 2. Stats
- **Description:** The Stats component visualizes the progress towards a goal using a circular progress bar. It shows the percentage of the goal achieved and an indicator to represent the goal completion. This component provides a quick overview of the patient's progress.

### 3. Information
- **Description:** The Information component presents essential contact and medical details about the patient. It includes the patient's phone number, email address, affected side, medical condition, and speciality. Each detail is accompanied by an appropriate icon for easy identification.

### 4. MedicalHistory
- **Description:** The MedicalHistory component displays the patient's medical history, listing their medical conditions. It features an icon and a label for clear identification of the section.

## Usage
You can use these components in your React application to create a patient information dashboard. To use them, follow these steps:

1. Import the necessary components into your React application.
2. Place the components where you want them to appear in your application.
3. Customize the patient data and information as needed by passing the appropriate props.

## Example

```jsx
import React from 'react';
import Header from './Header';
import Stats from './Stats';
import Information from './Information';
import MedicalHistory from './MedicalHistory';

function PatientDashboard() {
  return (
    <div>
      <Header />
      <Stats />
      <Information />
      <MedicalHistory />
    </div>
  );
}

export default PatientDashboard;
