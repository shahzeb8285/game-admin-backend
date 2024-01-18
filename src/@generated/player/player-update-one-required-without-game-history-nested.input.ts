import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutGame_historyInput } from './player-create-without-game-history.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutGame_historyInput } from './player-create-or-connect-without-game-history.input';
import { PlayerUpsertWithoutGame_historyInput } from './player-upsert-without-game-history.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateToOneWithWhereWithoutGame_historyInput } from './player-update-to-one-with-where-without-game-history.input';

@InputType()
export class PlayerUpdateOneRequiredWithoutGame_historyNestedInput {

    @Field(() => PlayerCreateWithoutGame_historyInput, {nullable:true})
    @Type(() => PlayerCreateWithoutGame_historyInput)
    create?: PlayerCreateWithoutGame_historyInput;

    @Field(() => PlayerCreateOrConnectWithoutGame_historyInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutGame_historyInput;

    @Field(() => PlayerUpsertWithoutGame_historyInput, {nullable:true})
    @Type(() => PlayerUpsertWithoutGame_historyInput)
    upsert?: PlayerUpsertWithoutGame_historyInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;

    @Field(() => PlayerUpdateToOneWithWhereWithoutGame_historyInput, {nullable:true})
    @Type(() => PlayerUpdateToOneWithWhereWithoutGame_historyInput)
    update?: PlayerUpdateToOneWithWhereWithoutGame_historyInput;
}
