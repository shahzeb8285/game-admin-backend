import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutGame_historyInput } from './players-create-without-game-history.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutGame_historyInput } from './players-create-or-connect-without-game-history.input';
import { playersUpsertWithoutGame_historyInput } from './players-upsert-without-game-history.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutGame_historyInput } from './players-update-to-one-with-where-without-game-history.input';

@InputType()
export class playersUpdateOneRequiredWithoutGame_historyNestedInput {

    @Field(() => playersCreateWithoutGame_historyInput, {nullable:true})
    @Type(() => playersCreateWithoutGame_historyInput)
    create?: playersCreateWithoutGame_historyInput;

    @Field(() => playersCreateOrConnectWithoutGame_historyInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: playersCreateOrConnectWithoutGame_historyInput;

    @Field(() => playersUpsertWithoutGame_historyInput, {nullable:true})
    @Type(() => playersUpsertWithoutGame_historyInput)
    upsert?: playersUpsertWithoutGame_historyInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutGame_historyInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutGame_historyInput)
    update?: playersUpdateToOneWithWhereWithoutGame_historyInput;
}
