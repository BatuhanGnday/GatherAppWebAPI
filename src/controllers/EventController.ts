import { Controller } from "@tsed/di";
import { Get, Post } from "@tsed/schema";
import { UseJoiSchema } from "src/decorators/UseJoiSchemaDecorator";
import { CreateEventRequestDto } from "src/models/dto/CreateEventRequestDto";
import { JoiCreateEventRequestDto } from "src/models/joi-validation/JoiCreateEventRequestDto";

@Controller("/events")
export class EventController {
  @Post()
  public createEvent(
    @UseJoiSchema(JoiCreateEventRequestDto) body: CreateEventRequestDto
  ) {}

  @Get()
  public findEvents() {}

  @Get("/:id")
  public findEventById() {}
}
