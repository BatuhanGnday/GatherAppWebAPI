import Joi from "joi";

export const JoiCreateEventRequestDto = Joi.object({
    title: Joi.string().max(40).required(),
    description: Joi.string().max(256).required(),
    location: Joi.string().max(64).required(),
    startAt: Joi.date().required(),
    endAt: Joi.date(),
    userLimit: Joi.number(),
    isPrivate: Joi.boolean()
});