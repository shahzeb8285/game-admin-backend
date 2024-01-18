import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutGame_historyInput } from './players-update-without-game-history.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutGame_historyInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutGame_historyInput, {nullable:false})
    @Type(() => playersUpdateWithoutGame_historyInput)
    data!: playersUpdateWithoutGame_historyInput;
}
