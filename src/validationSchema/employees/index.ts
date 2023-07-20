import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  working_hours: yup.number().integer().required(),
  performance_evaluation: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
