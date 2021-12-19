import { Injectable, OverrideProvider, ParamMetadata, PipeMethods, ValidationError, ValidationPipe } from "@tsed/common";
import { ObjectSchema } from "joi";

@OverrideProvider(ValidationPipe)
export class JoiValidationPipe implements PipeMethods {
    transform(value: any, metadata: ParamMetadata) {
        const schema = metadata.store.get<ObjectSchema>(JoiValidationPipe);

        if (schema != null) {
            const { error } = schema.validate(value);

            if (error != null) {
                throw new ValidationError('Oops! Something is wrong.', [error]);
            }
        }

        return value;
    }
}