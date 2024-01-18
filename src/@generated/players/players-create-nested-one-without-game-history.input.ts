import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutGame_historyInput } from './players-create-without-game-history.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutGame_historyInput } from './players-create-or-connect-without-game-history.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutGame_historyInput {

    @Field(() => playersCreateWithoutGame_historyInput, {nullable:true})
    @Type(() => playersCreateWithoutGame_historyInput)
    create?: playersCreateWithoutGame_historyInput;

    @Field(() => playersCreateOrConnectWithoutGame_historyInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: playersCreateOrConnectWithoutGame_historyInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
