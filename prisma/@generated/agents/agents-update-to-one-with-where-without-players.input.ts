import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsWhereInput } from './agents-where.input';
import { Type } from 'class-transformer';
import { agentsUpdateWithoutPlayersInput } from './agents-update-without-players.input';

@InputType()
export class agentsUpdateToOneWithWhereWithoutPlayersInput {

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;

    @Field(() => agentsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => agentsUpdateWithoutPlayersInput)
    data!: agentsUpdateWithoutPlayersInput;
}
