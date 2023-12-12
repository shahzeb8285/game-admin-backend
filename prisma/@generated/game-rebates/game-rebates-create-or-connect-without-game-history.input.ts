import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { game_rebatesWhereUniqueInput } from './game-rebates-where-unique.input';
import { Type } from 'class-transformer';
import { game_rebatesCreateWithoutGame_historyInput } from './game-rebates-create-without-game-history.input';

@InputType()
export class game_rebatesCreateOrConnectWithoutGame_historyInput {

    @Field(() => game_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => game_rebatesWhereUniqueInput)
    where!: Prisma.AtLeast<game_rebatesWhereUniqueInput, 'game_rebates_id'>;

    @Field(() => game_rebatesCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => game_rebatesCreateWithoutGame_historyInput)
    create!: game_rebatesCreateWithoutGame_historyInput;
}
