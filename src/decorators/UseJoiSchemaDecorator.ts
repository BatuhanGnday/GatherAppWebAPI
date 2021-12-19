import { StoreSet } from "@tsed/core";
import { ObjectSchema } from "joi";
import { JoiValidationPipe } from "src/pipes/JoiValidationPipe";


export function UseJoiSchema(schema: ObjectSchema) {
    return StoreSet(JoiValidationPipe, schema);
}