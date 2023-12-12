import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_rebatesCreateWithoutGame_historyInput } from './game-rebates-create-without-game-history.input';
import { Type } from 'class-transformer';
import { game_rebatesCreateOrConnectWithoutGame_historyInput } from './game-rebates-create-or-connect-without-game-history.input';
import { game_rebatesCreateManyGame_historyInputEnvelope } from './game-rebates-create-many-game-history-input-envelope.input';
import { Prisma } from '@prisma/client';
import { game_rebatesWhereUniqueInput } from './game-rebates-where-unique.input';

@InputType()
export class game_rebatesUncheckedCreateNestedManyWithoutGame_historyInput {

    @Field(() => [game_rebatesCreateWithoutGame_historyInput], {nullable:true})
    @Type(() => game_rebatesCreateWithoutGame_historyInput)
    create?: Array<game_rebatesCreateWithoutGame_historyInput>;

    @Field(() => [game_rebatesCreateOrConnectWithoutGame_historyInput], {nullable:true})
    @Type(() => game_rebatesCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: Array<game_rebatesCreateOrConnectWithoutGame_historyInput>;

    @Field(() => game_rebatesCreateManyGame_historyInputEnvelope, {nullable:true})
    @Type(() => game_rebatesCreateManyGame_historyInputEnvelope)
    createMany?: game_rebatesCreateManyGame_historyInputEnvelope;

    @Field(() => [game_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => game_rebatesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<game_rebatesWhereUniqueInput, 'game_rebates_id'>>;
}
