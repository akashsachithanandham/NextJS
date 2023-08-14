export const getDoctorSpecialization = (specializations = []) => {
  const approvedSpecialization = specializations.filter((item) => item.approved);
  let speciality = null;

  if (
    approvedSpecialization &&
    approvedSpecialization[0] &&
    approvedSpecialization[0].subspeciality &&
    approvedSpecialization[0].subspeciality.sub_speciality_name
  ) {
    speciality = approvedSpecialization[0].subspeciality.sub_speciality_name;
  }

  return speciality;
};