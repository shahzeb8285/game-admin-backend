import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsUpdateManyMutationInput } from './agents-update-many-mutation.input';
import { Type } from 'class-transformer';
import { agentsWhereInput } from './agents-where.input';

@ArgsType()
export class UpdateManyagentsArgs {

    @Field(() => agentsUpdateManyMutationInput, {nullable:false})
    @Type(() => agentsUpdateManyMutationInput)
    data!: agentsUpdateManyMutationInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;
}
