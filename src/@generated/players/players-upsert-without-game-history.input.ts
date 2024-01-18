import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutGame_historyInput } from './players-update-without-game-history.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_historyInput } from './players-create-without-game-history.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutGame_historyInput {

    @Field(() => playersUpdateWithoutGame_historyInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_historyInput)
    update!: playersUpdateWithoutGame_historyInput;

    @Field(() => playersCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_historyInput)
    create!: playersCreateWithoutGame_historyInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
