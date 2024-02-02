import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayScalarWhereInput } from './agent-records-by-day-scalar-where.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayUpdateManyMutationInput } from './agent-records-by-day-update-many-mutation.input';

@InputType()
export class agent_records_by_dayUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => agent_records_by_dayScalarWhereInput, {nullable:false})
    @Type(() => agent_records_by_dayScalarWhereInput)
    where!: agent_records_by_dayScalarWhereInput;

    @Field(() => agent_records_by_dayUpdateManyMutationInput, {nullable:false})
    @Type(() => agent_records_by_dayUpdateManyMutationInput)
    data!: agent_records_by_dayUpdateManyMutationInput;
}
