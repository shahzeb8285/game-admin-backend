import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersCreateInput } from './players-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneplayersArgs {

    @Field(() => playersCreateInput, {nullable:false})
    @Type(() => playersCreateInput)
    data!: playersCreateInput;
}
