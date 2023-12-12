import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyagentsArgs {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;
}
