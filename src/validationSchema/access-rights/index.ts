import * as yup from 'yup';

export const accessRightsValidationSchema = yup.object().shape({
  access_level: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
