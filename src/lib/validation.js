const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_DOCS = {
  resume: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  identityDocument: ["application/pdf", "image/jpeg", "image/png"],
  educationalCertificate: ["application/pdf", "image/jpeg", "image/png"],
};

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateFile(file, field) {
  if (!file) return "This file is required.";
  if (file.size > MAX_FILE_SIZE) return "File must be 5 MB or smaller.";
  if (!ALLOWED_DOCS[field].includes(file.type)) return "File type is not supported.";
  return null;
}

export function validateStep(step, form) {
  const errors = {};

  if (step === 1) {
    if (!form.fullName.trim()) errors.fullName = "Full name is required.";
    if (!form.dateOfBirth) errors.dateOfBirth = "Date of birth is required.";
    if (!form.email.trim()) errors.email = "Email is required.";
    else if (!isEmail(form.email)) errors.email = "Enter a valid email address.";
    if (!form.phone.trim()) errors.phone = "Phone number is required.";
    if (!form.city.trim()) errors.city = "City is required.";
    if (!form.country.trim()) errors.country = "Country is required.";
  }

  if (step === 2) {
    if (!form.highestQualification.trim()) errors.highestQualification = "Highest qualification is required.";
    if (!form.teachingExperience) errors.teachingExperience = "Please select your teaching experience.";
    if (!form.currentOccupation.trim()) errors.currentOccupation = "Current occupation is required.";
  }

  if (step === 3) {
    if (!form.coursePreference) errors.coursePreference = "Please select a course.";
    if (!form.preferredBatch.trim()) errors.preferredBatch = "Preferred batch is required.";
    if (!form.interestStatement.trim()) errors.interestStatement = "Please tell us why you are interested.";
    else if (form.interestStatement.trim().length < 30) errors.interestStatement = "Please write at least 30 characters.";
  }

  if (step === 4) {
    const resumeErr = validateFile(form.resume, "resume");
    if (resumeErr) errors.resume = resumeErr;
    const idErr = validateFile(form.identityDocument, "identityDocument");
    if (idErr) errors.identityDocument = idErr;
    const certErr = validateFile(form.educationalCertificate, "educationalCertificate");
    if (certErr) errors.educationalCertificate = certErr;
  }

  if (step === 5) {
    if (!form.consent) errors.consent = "You must consent to continue.";
  }

  return errors;
}

export function validateAll(form) {
  let errors = {};
  for (let i = 1; i <= 5; i++) {
    errors = { ...errors, ...validateStep(i, form) };
  }
  return errors;
}
