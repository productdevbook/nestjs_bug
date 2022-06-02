import Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().default('development'),
});
