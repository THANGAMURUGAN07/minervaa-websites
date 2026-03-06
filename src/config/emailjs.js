// EmailJS Configuration
// Get these values from https://dashboard.emailjs.com
//
// Setup steps:
//  1. Create an account at https://emailjs.com
//  2. Add an Email Service (Gmail, Outlook, etc.) and copy the Service ID
//  3. Create a Template for each form and copy the Template IDs
//  4. Copy your Public Key from Account > API Keys
//  5. Replace the placeholder strings below (or use VITE_ env vars)
//
// Template variable names expected by each template:
//  CONTACT:   from_name, from_email, phone, message, submission_date
//  ADMISSION: child_name, date_of_birth, sex, blood_group, contact_number, contact_type,
//             class_admission, tc_attached, how_know, submission_date,
//             father_name, father_nationality, father_occupation, father_office_address,
//             father_distance, father_permanent_address, father_income,
//             mother_name, mother_nationality, mother_occupation, mother_office_address,
//             mother_distance, mother_permanent_address, mother_income,
//             guardian_name, guardian_nationality, guardian_occupation, guardian_office_address,
//             guardian_distance, guardian_permanent_address, guardian_income
//  (Both the home page enrollment form and the full admission popup use ADMISSION template)

export const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';

export const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export const EMAILJS_TO_EMAIL =
  import.meta.env.VITE_EMAILJS_TO_EMAIL || 'mvmofficepollachi@gmail.com';

export const EMAILJS_TEMPLATES = {
  CONTACT:   import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT   || 'YOUR_CONTACT_TEMPLATE_ID',
  ADMISSION: import.meta.env.VITE_EMAILJS_TEMPLATE_ADMISSION || 'YOUR_ADMISSION_TEMPLATE_ID',
};
