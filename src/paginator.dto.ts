import { IsNumber, Min, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { Field, InputType } from '@nestjs/graphql';
 
@InputType()
export class PaginationParamsDto {
  @Field(() => Number, {nullable:true})
  offset?: number;
 
  @Field(() => Number, {nullable:true})
  limit?: number;
}