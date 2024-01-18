import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutPlayersInput } from './agents-create-without-players.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutPlayersInput } from './agents-create-or-connect-without-players.input';
import { agentsUpsertWithoutPlayersInput } from './agents-upsert-without-players.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { agentsUpdateToOneWithWhereWithoutPlayersInput } from './agents-update-to-one-with-where-without-players.input';

@InputType()
export class agentsUpdateOneRequiredWithoutPlayersNestedInput {

    @Field(() => agentsCreateWithoutPlayersInput, {nullable:true})
    @Type(() => agentsCreateWithoutPlayersInput)
    create?: agentsCreateWithoutPlayersInput;

    @Field(() => agentsCreateOrConnectWithoutPlayersInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: agentsCreateOrConnectWithoutPlayersInput;

    @Field(() => agentsUpsertWithoutPlayersInput, {nullable:true})
    @Type(() => agentsUpsertWithoutPlayersInput)
    upsert?: agentsUpsertWithoutPlayersInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: agentsWhereUniqueInput;

    @Field(() => agentsUpdateToOneWithWhereWithoutPlayersInput, {nullable:true})
    @Type(() => agentsUpdateToOneWithWhereWithoutPlayersInput)
    update?: agentsUpdateToOneWithWhereWithoutPlayersInput;
}
