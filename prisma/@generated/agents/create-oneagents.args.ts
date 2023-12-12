import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsCreateInput } from './agents-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneagentsArgs {

    @Field(() => agentsCreateInput, {nullable:false})
    @Type(() => agentsCreateInput)
    data!: agentsCreateInput;
}
