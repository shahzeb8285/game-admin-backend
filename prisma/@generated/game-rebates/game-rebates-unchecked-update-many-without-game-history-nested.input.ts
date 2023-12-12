import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_rebatesCreateWithoutGame_historyInput } from './game-rebates-create-without-game-history.input';
import { Type } from 'class-transformer';
import { game_rebatesCreateOrConnectWithoutGame_historyInput } from './game-rebates-create-or-connect-without-game-history.input';
import { game_rebatesUpsertWithWhereUniqueWithoutGame_historyInput } from './game-rebates-upsert-with-where-unique-without-game-history.input';
import { game_rebatesCreateManyGame_historyInputEnvelope } from './game-rebates-create-many-game-history-input-envelope.input';
import { Prisma } from '@prisma/client';
import { game_rebatesWhereUniqueInput } from './game-rebates-where-unique.input';
import { game_rebatesUpdateWithWhereUniqueWithoutGame_historyInput } from './game-rebates-update-with-where-unique-without-game-history.input';
import { game_rebatesUpdateManyWithWhereWithoutGame_historyInput } from './game-rebates-update-many-with-where-without-game-history.input';
import { game_rebatesScalarWhereInput } from './game-rebates-scalar-where.input';

@InputType()
export class game_rebatesUncheckedUpdateManyWithoutGame_historyNestedInput {

    @Field(() => [game_rebatesCreateWithoutGame_historyInput], {nullable:true})
    @Type(() => game_rebatesCreateWithoutGame_historyInput)
    create?: Array<game_rebatesCreateWithoutGame_historyInput>;

    @Field(() => [game_rebatesCreateOrConnectWithoutGame_historyInput], {nullable:true})
    @Type(() => game_rebatesCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: Array<game_rebatesCreateOrConnectWithoutGame_historyInput>;

    @Field(() => [game_rebatesUpsertWithWhereUniqueWithoutGame_historyInput], {nullable:true})
    @Type(() => game_rebatesUpsertWithWhereUniqueWithoutGame_historyInput)
    upsert?: Array<game_rebatesUpsertWithWhereUniqueWithoutGame_historyInput>;

    @Field(() => game_rebatesCreateManyGame_historyInputEnvelope, {nullable:true})
    @Type(() => game_rebatesCreateManyGame_historyInputEnvelope)
    createMany?: game_rebatesCreateManyGame_historyInputEnvelope;

    @Field(() => [game_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => game_rebatesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<game_rebatesWhereUniqueInput, 'game_rebates_id'>>;

    @Field(() => [game_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => game_rebatesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<game_rebatesWhereUniqueInput, 'game_rebates_id'>>;

    @Field(() => [game_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => game_rebatesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<game_rebatesWhereUniqueInput, 'game_rebates_id'>>;

    @Field(() => [game_rebatesWhereUniqueInput], {nullable:true})
    @Type(() => game_rebatesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<game_rebatesWhereUniqueInput, 'game_rebates_id'>>;

    @Field(() => [game_rebatesUpdateWithWhereUniqueWithoutGame_historyInput], {nullable:true})
    @Type(() => game_rebatesUpdateWithWhereUniqueWithoutGame_historyInput)
    update?: Array<game_rebatesUpdateWithWhereUniqueWithoutGame_historyInput>;

    @Field(() => [game_rebatesUpdateManyWithWhereWithoutGame_historyInput], {nullable:true})
    @Type(() => game_rebatesUpdateManyWithWhereWithoutGame_historyInput)
    updateMany?: Array<game_rebatesUpdateManyWithWhereWithoutGame_historyInput>;

    @Field(() => [game_rebatesScalarWhereInput], {nullable:true})
    @Type(() => game_rebatesScalarWhereInput)
    deleteMany?: Array<game_rebatesScalarWhereInput>;
}
