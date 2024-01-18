import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_historyInput } from './players-create-without-game-history.input';

@InputType()
export class playersCreateOrConnectWithoutGame_historyInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_historyInput)
    create!: playersCreateWithoutGame_historyInput;
}
